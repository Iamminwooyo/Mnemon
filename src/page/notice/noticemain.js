import "./notice.css";
import { useState } from "react";
import noticeData from "../../data/board/notice"; 
import NoticeCard from "../../component/card/noticecard";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기

const Noticemain = () => {
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // 검색어 업데이트
  };

  // 검색어로 필터링
  const filteredNotices = noticeData.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) // 대소문자 무시 검색
  );

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - Notice</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex" , marginBottom:'34px'}}>
        <div className="font">Notice</div>
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
          {filteredNotices.length > 0 ? (
            filteredNotices.map((notice) => (
              <NoticeCard
                key={notice.id}
                title={notice.title}
                content={notice.content}
                date={notice.date}
                author={notice.author}
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

export default Noticemain;
