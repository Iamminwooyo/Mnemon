import React from "react";
import { Carousel, Modal } from "antd";
import Cartselect from "../select/cartselect";
import "../modal/modal.css";
import Cartinput from "../input/cartinput";

const CustomArrow = ({ className, style, onClick, icon }) => {
  return (
    <img
      src={icon} // 화살표 이미지 경로
      alt="arrow"
      onClick={onClick}
      style={{
        ...style,
        width: "30px",
        height: "30px",
        zIndex: 10,
        cursor: "pointer",
      }}
      className={className}
    />
  );
};

const Buymodal = ({ open, title, onOk, onCancel, checkedItems, setCheckedItems }) => {
  const handleSizeChange = (value, item) => {
    console.log(`Selected size for ${item.name}:`, value);
  };

  const handleQuantityChange = (value, item) => {
    setCheckedItems((prevItems) => {
      // 새로운 배열 생성하여 상태 업데이트
      return prevItems.map((prevItem) =>
        prevItem.id === item.id ? { ...prevItem, quantity: value } : prevItem
      );
    });
  };

  // 총 금액 계산
  const totalAmount = checkedItems?.reduce(
    (sum, item) => sum + (parseInt(item.price.replace(",", "")) || 0) * (item.quantity || 1),
    0
  );

  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      closable={false}
      className="buycustom-modal"
      footer={null} // 기본 푸터 제거
    >
      <div style={{ width: "700px" }}>
        {/* Header 영역 */}
        <div className="deleteheader">
          <div style={{ color: "#ffffff" }}>{title}</div>
          <button className="deletemodalbtn" onClick={onCancel}>
            x
          </button>
        </div>
        {/* 모달 내용 */}
        <div style={{ marginTop: "20px" }}>
        <Carousel
            arrows
            infinite={false}
            prevArrow={
              <CustomArrow icon="/pixel/pixel-left.png" /> // 왼쪽 화살표 이미지 경로
            }
            nextArrow={
              <CustomArrow icon="/pixel/pixel-right.png" /> // 오른쪽 화살표 이미지 경로
            }
          >
          {checkedItems.map((item) => (
            <div key={item.id}> 
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "20px",
                  marginBottom: "20px",
                }}
              >
              <img src={item.src} alt={item.name} className="buymodal-img" />
              <div style={{ marginRight: "15px", flex:'1.5' }}>
                <div className="buymodal-name">{item.name}</div>
                <div className="buymodal-price">₩{item.price}</div>
                <div className="buymodal-color">
                  <div>Color</div>
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: item.color,
                      borderRadius: "5px",
                      border: "2px solid #808080",
                      marginBottom: "30px",
                    }}
                  ></div>
                </div>
                <div className="buymodal-size">사이즈</div>
                <Cartselect
                  defaultValue={item.sizeOptions}
                  onChange={(value) => handleSizeChange(value, item)}
                  options={[
                    { value: "S", label: "S" },
                    { value: "M", label: "M" },
                    { value: "L", label: "L" },
                    { value: "XL", label: "XL" },
                    { value: "2XL", label: "2XL" },
                    { value: "3XL", label: "3XL" },
                    { value: "FREE", label: "F" },
                  ]}
                />
                <div className="buymodal-quantity">수량</div>
                <Cartinput
                  value={item.quantity || 1} // item.quantity가 없을 경우 기본값 1
                  onChange={(value) => handleQuantityChange(value, item)} // 변경된 값 전달
                  min={1}
                  max={100}
                />
              </div>
            </div>
           </div> 
          ))}
          </Carousel>
          <div style={{ margin: "10px 0", borderTop: "1px solid rgba(128, 128, 128, 0.5)", width:'100%' }}></div>
        </div>
        {/* Footer 영역 */}
        <div className="buycustom-modal-footer">    
           <div className="total-amount">총 금액: ₩{totalAmount.toLocaleString()}</div>
          <div className="buyfooter-buttons">
            <div onClick={onOk} className="ok-button">
              구매
            </div>
            <div onClick={onCancel} className="cancel-button">
              취소
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Buymodal;
