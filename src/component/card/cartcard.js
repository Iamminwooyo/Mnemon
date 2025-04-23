import { useState } from "react";
import "../card/card.css";

const Cartcard = ({ 
  src, 
  name, 
  price, 
  color, 
  sizeOptions, 
  quantity, 
  onClick, 
  isChecked, // 상위 컴포넌트에서 체크 상태를 받아옴
  onCheckedChange 
}) => {
  // 체크박스 변경 핸들러
  const handleCheckboxChange = (e) => {
    const checked = e.target.checked;
    if (onCheckedChange) {
      onCheckedChange(checked); // 부모 컴포넌트에 상태 전달
    }
  };

  return (
    <div 
      className={`profile-cartcard ${isChecked ? "checked" : ""}`} // 체크 상태에 따라 클래스 변경
    >
      {/* 체크박스 영역 */}
      <input
        type="checkbox"
        checked={isChecked} // 상위 컴포넌트에서 전달받은 상태를 사용
        onChange={handleCheckboxChange}
        className="profile-checkbox"
      />
      {/* 이미지 영역 */}
      <div className="profile-image-container" onClick={onClick} >
        <img src={src} alt="Item" className="profile-image" />
      </div>
      {/* 이름 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="cartprofile-name" style={{ display: "flex", alignItems: "center" }}>
          {name}
        </div>
      </div>
      {/* 사이즈 및 수량 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>

        <div className="cartprofile-price">₩{price}</div>
        <div style={{ display: "flex", gap: "5px" }}>
          {color.map((c, index) => (
            <div
              key={index}
              className="cartprofile-color"
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
      <div style={{ marginBottom: "10px", borderTop: "0.5px solid  rgba(128, 128, 128, 0.3)" }}></div>
      {/* 가격 및 컬러 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="profile-size">사이즈: {sizeOptions}</div>
        <div className="profile-quantity">수량: {quantity}</div>
      </div>
    </div>
  );
};

export default Cartcard;
