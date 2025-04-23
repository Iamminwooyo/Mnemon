import "./event.css";
import { useState } from "react";
import eventData from "../../data/board/event"; 
import EventCard from "../../component/card/eventcard";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기

const Eventmain = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // 검색어 업데이트
  };

  // 검색어로 필터링
  const filteredEvents = eventData.filter((event) =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) // 대소문자 무시 검색
  );

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - Event</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom:'34px' }}>
        <div className="font">Event</div>
      </div>
      <div className="wishlistcontent-box">
        <div className="color-tab-container">
          {/* 서치바 추가 */}
          <input
            type="text"
            className="search-bar"
            placeholder="검색"
            value={searchQuery} // 입력값 바인딩
            onChange={handleSearchInputChange} // 입력값 변경 핸들러
          />
        </div>
        <div className="wishlistgrid-wrapper">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                content={event.content}
                date={event.date}
                author={event.author}
              />
            ))
          ) : (
            <div className="no-results">검색 결과가 없습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eventmain;
