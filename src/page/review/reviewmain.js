import "./review.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Reviewcard from "../../component/card/reviewcard";
import reviews from "../../data/board/review";

const Reviewmain = () => {
  const [activeTab, setActiveTab] = useState("Tab 1");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCardClick = (productid) => {
    navigate(`/item/${productid}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // 검색 및 필터링 로직
  let filteredItems = reviews.filter((review) => {
    const matchesSearch = review.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  // 탭에 따라 정렬
  if (activeTab === "Tab 1") {
    // 리뷰 개수 많은 순
    filteredItems = filteredItems.sort((a, b) => b.reviewCount - a.reviewCount);
  } else if (activeTab === "Tab 2") {
    // 리뷰 평점 높은 순
    filteredItems = filteredItems.sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - Review</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="font">Review</div>
      </div>
      <div className="tabs-container">
        <div
          style={{fontFamily:'DOSSaemmul', fontWeight:'bold', fontSize:'20px'}}
          className={`tab ${activeTab === "Tab 1" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab 1")}
        >
          리뷰 많은순
        </div>
        <div
          style={{fontFamily:'DOSSaemmul', fontWeight:'bold', fontSize:'20px'}}
          className={`tab ${activeTab === "Tab 2" ? "active" : ""}`}
          onClick={() => handleTabClick("Tab 2")}
        >
          높은 평점순
        </div>
      </div>
      <div className="content-box">
        <div className="color-tab-container">
          {/* 서치바 */}
          <input
            type="text"
            className="search-bar"
            placeholder="검색"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
        <div className="grid-wrapper">
          {filteredItems.length === 0 ? (
            <div className="no-results">검색결과가 없습니다.</div>
          ) : (
            <div className="grid-container">
              {filteredItems.map((review) => (
                <Reviewcard
                  key={review.id}
                  src={review.image}
                  name={review.name}
                  price={review.price}
                  count={review.reviewCount}
                  rating={review.rating}
                  reviews={review.reviews}
                  defaultIcon="/pixel/pixel-heart.png"
                  toggledIcon="/pixel/pixel-fullheart.png"
                  onClick={() => handleCardClick(review.prductid)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviewmain;
