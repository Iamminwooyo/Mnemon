import "../main/main.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import items from "../../data/item/item";
import Card from "../../component/card/card";

const Accmain = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [selectedColor, setSelectedColor] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const navigate = useNavigate(); // 네비게이터 생성

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleCardClick = (id) => {
    navigate(`/item/${id}`); // /item/:id 형식으로 이동
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value); // 검색어 업데이트
  };

  // 검색 및 필터링 로직
  let filteredItems = items.filter((item) => {
    const matchesType = item.clothestype === "악세사리"; 
    const matchesColor = selectedColor ? item.color.includes(selectedColor) : true; // 색상 필터
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()); // 검색 필터
    return matchesType && matchesColor && matchesSearch; // 모든 조건을 만족
  });

  // 탭에 따라 정렬
  if (activeTab === "Tab 1") {
    // 최신순 (update 기준으로 내림차순 정렬)
    filteredItems = filteredItems.sort((a, b) => new Date(b.update) - new Date(a.update));
  } else if (activeTab === "Tab 2") {
    // 인기순 (likes 기준으로 내림차순 정렬)
    filteredItems = filteredItems.sort((a, b) => b.likes - a.likes);
  } else if (activeTab === "Tab 3") {
    // 가격 낮은 순 (price 기준으로 오름차순 정렬)
    filteredItems = filteredItems.sort((a, b) => parseInt(a.price.replace(",", "")) - parseInt(b.price.replace(",", "")));
  }

  const colors = [
    "#000000", "#808080", "#FF0000", "#008000", "#0000FF",
    "#FFFF00", "#FFA500", "#800080", "#00FFFF", "#FFC0CB",
  ];

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - clothes</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="font"> Acc </div>
      </div>
      <div className="tabs-container">
        <div
          style={{fontFamily:'DOSSaemmul', fontWeight:'bold', fontSize:'20px'}}
          className={`tab ${activeTab === "Tab 1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab 1")}
        >
          최신순
        </div>
        <div
          style={{fontFamily:'DOSSaemmul', fontWeight:'bold', fontSize:'20px'}}
          className={`tab ${activeTab === "Tab 2" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab 2")}
        >
          인기순
        </div>
        <div
          style={{fontFamily:'DOSSaemmul', fontWeight:'bold', fontSize:'20px'}}
          className={`tab ${activeTab === "Tab 3" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab 3")}
        >
          저가순
        </div>
      </div>
      <div className="content-box">
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
        <div className="grid-wrapper">
          {filteredItems.length === 0 ? ( // 검색 결과가 없는 경우 메시지 출력
            <div className="no-results">검색결과가 없습니다.</div>
          ) : (
            <div className="grid-container">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  src={item.src}
                  name={item.name}
                  price={item.price}
                  color={item.color}
                  defaultIcon="/pixel/pixel-heart.png" // 초기 아이콘
                  toggledIcon="/pixel/pixel-fullheart.png" // 클릭 후 변경될 아이콘
                  onClick={() => handleCardClick(item.id)} // 카드 클릭 핸들러에 ID 전달
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default  Accmain;
