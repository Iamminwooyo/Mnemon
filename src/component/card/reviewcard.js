import { useState, useEffect } from "react";
import "../card/card.css";

const Reviewcard = ({ 
  src, 
  name, 
  price, 
  rating, 
  count, 
  reviews, 
  defaultIcon, 
  toggledIcon, 
  onClick 
}) => {
  const [icon, setIcon] = useState(defaultIcon);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0); // 현재 보여줄 리뷰 인덱스

  // 리뷰 전환 로직
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReviewIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 3000); // 3초마다 다음 리뷰로 전환
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 정리
  }, [reviews]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="stars-container" style={{ display: "flex", gap: "4px" }}>
        {Array(fullStars).fill().map((_, index) => (
          <img
            key={`full-${index}`}
            src="/pixel/pixel-fullstar.png"
            alt="full star"
            className="star-icon"
            style={{ width: "20px", height: "20px" }}
          />
        ))}
        {hasHalfStar && (
          <img
            src="/pixel/pixel-halfstar.png"
            alt="half star"
            className="star-icon"
            style={{ width: "20px", height: "20px" }}
          />
        )}
        {Array(emptyStars).fill().map((_, index) => (
          <img
            key={`empty-${index}`}
            src="/pixel/pixel-star.png"
            alt="empty star"
            className="star-icon"
            style={{ width: "20px", height: "20px" }}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="profilereviw-card">
      {/* 이미지 영역 */}
      <div className="profile-image-container">
        <img src={src} alt="Item" className="profile-image" onClick={onClick}/>
      </div>
      {/* 이름 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="profile-name">{name}</div>
      </div>
      {/* 가격 및 리뷰 수 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", textAlign: "center" }}>
        <div className="profile-reviewprice">₩{price}</div>
        <div className="profile-count">리뷰: {count}개</div>
      </div>
      {/* 별점 영역 */}
      <div className="profile-rating" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {renderStars(rating)}
      </div>
      {/* 구분선 */}
      <div style={{ margin: "10px 0", borderTop: "1px solid rgba(128, 128, 128, 0.5)" }}></div>
      {/* 리뷰 표시 */}
      <div className="profile-review">
        <div style={{fontWeight:'600'}}>{reviews[currentReviewIndex].comment}</div>
        <div className="profile-reviewrbox">
          <div className="profile-reviewr">
            {reviews[currentReviewIndex].reviewer}
          </div>
          <div className="profile-reviewrdate">
            {reviews[currentReviewIndex].date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
