import React from "react";
import { Carousel, Modal } from "antd";
import "../modal/modal.css";

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

const Ordermodal = ({
  open,
  title,
  onOk,
  onCancel,
  checkedItems,
  orderDate,
  orderStatus,
}) => {
  const totalAmount = checkedItems?.reduce((sum, item) => {
    const price =
      typeof item.price === "string"
        ? parseInt(item.price.replace(",", ""), 10)
        : item.price;
    return sum + (price || 0) * (item.quantity || 1);
  }, 0);

  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      closable={false}
      className="buycustom-modal"
      footer={null}
    >
      <div style={{ width: "700px" }}>
        <div className="deleteheader">
          <div style={{ color: "#ffffff" }}>{title}</div>
          <button className="deletemodalbtn" onClick={onCancel}>
            x
          </button>
        </div>

        {/* Carousel */}
        <div style={{ marginTop: "20px" }}>
          <div className="ordermodal-inform">
            <div>주문일자: {orderDate || "N/A"}</div>
            <div className="ordermodal-inform2">주문처리상태: {orderStatus || "N/A"}</div>
          </div>
          <div style={{ margin: "10px 0", borderTop: "1px solid rgba(128, 128, 128, 0.5)", width:'100%' }}></div>

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
            {checkedItems.map((item, index) => (
              <div key={index}>
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
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="buymodal-img"
                  />
                  <div style={{ marginRight: "15px", flex:'1.5'  }}>
                    <div className="ordermodal-name">{item.productName}</div>
                    <div className="ordermodal-price">
                      ₩{(item.price || 0).toLocaleString()}
                    </div>
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
                    <div className="ordermodal-size">Size: {item.size}</div>
                    <div className="ordermodal-quantity">
                      Quantity: {item.quantity}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>

          <div style={{ margin: "10px 0", borderTop: "1px solid rgba(128, 128, 128, 0.5)", width:'100%' }}></div>
        </div>

        <div className="ordermodal-footer">
          <div className="total-amount"> 총 구매금액: ₩{totalAmount.toLocaleString()}</div>
          <div className="buyfooter-buttons">
            <div onClick={onOk} className="ok-button">
              확인
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

export default Ordermodal;
