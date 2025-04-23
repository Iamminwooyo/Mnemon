import React from "react";
import "./card.css";

const OrderCard = ({ order, onClick, onCancelClick }) => {
  const totalProducts = order.products.length;
  const firstProduct = order.products[0];

  const getButtonText = (status) => {
    switch (status) {
      case "결제대기":
        return "취소";
      case "배송준비":
      case "배송중":
      case "배송완료":
        return "반품";
      default:
        return "";
    }
  };

  return (
    <div className="order-row" onClick={() => onClick(order)}>
      <div className="order-cell">{order.orderId}</div>
      <div className="order-cell">
        <img
          src={firstProduct.image}
          alt={firstProduct.productName}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "cover",
          }}
        />
      </div>
      <div className="order-cell">
        {totalProducts > 1
          ? `${firstProduct.productName} 외 ${totalProducts - 1}개`
          : firstProduct.productName}
      </div>
      <div className="order-cell">
        {order.products.reduce((sum, item) => sum + item.quantity, 0)}
      </div>
      <div className="order-cell">
        ₩
        {order.products
          .reduce((sum, item) => sum + item.price * item.quantity, 0)
          .toLocaleString()}
      </div>
      <div className="order-cell">{order.status}</div>
      <div className="order-cell">
        {getButtonText(order.status) && (
          <button
            className="action-button"
            onClick={(e) => {
              e.stopPropagation(); // 부모 클릭 이벤트 방지
              onCancelClick(order); // 취소/반품 버튼 클릭 핸들러 호출
            }}
          >
            {getButtonText(order.status)}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
