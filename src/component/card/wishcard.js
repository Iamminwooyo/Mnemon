import { useState } from "react";
import "../card/card.css";

const Wishcard = ({ 
  src, 
  name, 
  price, 
  color, 
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
      className={`profile-wishcard ${isChecked ? "checked" : ""}`} // 체크 상태에 따라 클래스 변경
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
      {/* 가격 및 컬러 영역 */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div className="profile-wishprice">₩{price}</div>
        <div style={{ display: "flex", gap: "5px" }}>
          {color.map((c, index) => (
            <div
              key={index}
              className="profile-wishcolor"
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

export default Wishcard;
