import { useState } from "react";
import "../card/card.css";

const Card = ({ src, name, price, color, onClick, defaultIcon, toggledIcon }) => {
  const [icon, setIcon] = useState(defaultIcon); // 기본 아이콘 상태 관리

  // 아이콘 클릭 핸들러
  const handleIconClick = (e) => {
    e.stopPropagation(); // 부모 이벤트 버블링 방지
    setIcon((prevIcon) => (prevIcon === defaultIcon ? toggledIcon : defaultIcon)); // 아이콘 토글
  };

  return (
    <div className="profile-card">
      {/* 이미지 영역 */}
      <div className="profile-image-container" onClick={onClick}>
        <img src={src} alt="Item" className="profile-image" />
      </div>
      {/* 이름 및 아이콘 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop:'5px' }}>
        <div className="profile-name" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {name}
          {icon && (
            <img
              src={icon}
              alt="icon"
              onClick={handleIconClick}
              className="icon" // 클래스 추가
            />
          )}
        </div>
      </div>
      {/* 가격 및 컬러 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="profile-price">₩{price}</div>
        <div style={{ display: "flex", gap: "5px" }}>
          {color.map((c, index) => (
            <div
              key={index}
              className="profile-color"
              style={{
                backgroundColor: c,
                width: "20px",
                height: "20px",
                borderRadius: "15%",
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
