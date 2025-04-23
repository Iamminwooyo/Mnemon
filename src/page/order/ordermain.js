import React, { useEffect, useState } from "react";
import "../order/order.css";
import orderlist from "../../data/user/orderlist";
import Datepicker from "../../component/date/date";
import OrderCard from "../../component/card/ordercard";
import Ordermodal from "../../component/modal/ordermodal";
import CancelModal from "../../component/modal/cancelmodal";

const Ordermain = () => {
  const [activeTab, setActiveTab] = useState("1Month");
  const [dateRange, setDateRange] = useState([null, null]);
  const [filteredItems, setFilteredItems] = useState(orderlist);
  const [selectedOrder, setSelectedOrder] = useState(null); // 선택된 Order
  const [isModalOpen, setIsModalOpen] = useState(false); // 주문 상세 모달 열림 상태
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false); // 취소/반품 모달 열림 상태
  const [selectedCancelOrder, setSelectedCancelOrder] = useState(null); // 취소/반품 선택된 Order

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDateChange = (dates) => {
    if (dates) {
      const [start, end] = dates;
      const convertedStart = start.toDate();
      const convertedEnd = end.toDate();
      setDateRange([convertedStart, convertedEnd]);
    } else {
      setDateRange([null, null]);
    }
  };

  useEffect(() => {
    let items = orderlist;
    if (dateRange[0] && dateRange[1]) {
      const startDate = new Date(dateRange[0].setHours(0, 0, 0, 0));
      const endDate = new Date(dateRange[1].setHours(23, 59, 59, 999));
      items = items.filter((order) => {
        const orderDate = new Date(order.orderDate.replace(/\./g, "-"));
        return orderDate >= startDate && orderDate <= endDate;
      });
    } else {
      const now = new Date();
      const calculatePastDate = (months) => {
        const date = new Date();
        date.setMonth(date.getMonth() - months);
        return date;
      };

      if (activeTab === "1Month") {
        const oneMonthAgo = calculatePastDate(1);
        items = items.filter(
          (order) => new Date(order.orderDate.replace(/\./g, "-")) >= oneMonthAgo
        );
      } else if (activeTab === "3Month") {
        const threeMonthsAgo = calculatePastDate(3);
        items = items.filter(
          (order) => new Date(order.orderDate.replace(/\./g, "-")) >= threeMonthsAgo
        );
      } else if (activeTab === "6Month") {
        const sixMonthsAgo = calculatePastDate(6);
        items = items.filter(
          (order) => new Date(order.orderDate.replace(/\./g, "-")) >= sixMonthsAgo
        );
      }
    }
    setFilteredItems(items);
  }, [dateRange, activeTab]);

  const handleCardClick = (order) => {
    setSelectedOrder(order);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedOrder(null);
    setIsModalOpen(false);
  };

  const handleCancelClick = (order) => {
    setSelectedCancelOrder(order);
    setIsCancelModalOpen(true);
  };

  const handleCancelModalClose = () => {
    setSelectedCancelOrder(null);
    setIsCancelModalOpen(false);
  };

  const handleCancelConfirm = () => {
    console.log(`Order ${selectedCancelOrder.orderId} has been cancelled/returned.`);
    setSelectedCancelOrder(null);
    setIsCancelModalOpen(false);
  };

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - Order</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div className="font">Order</div>
      </div>
      <div className="tabs-container">
        <div
          style={{ fontFamily: "DOSSaemmul", fontWeight: "bold", fontSize: "20px" }}
          className={`tab ${activeTab === "1Month" ? "active" : ""}`}
          onClick={() => handleTabClick("1Month")}
        >
          1개월
        </div>
        <div
          style={{ fontFamily: "DOSSaemmul", fontWeight: "bold", fontSize: "20px" }}
          className={`tab ${activeTab === "3Month" ? "active" : ""}`}
          onClick={() => handleTabClick("3Month")}
        >
          3개월
        </div>
        <div
          style={{ fontFamily: "DOSSaemmul", fontWeight: "bold", fontSize: "20px" }}
          className={`tab ${activeTab === "6Month" ? "active" : ""}`}
          onClick={() => handleTabClick("6Month")}
        >
          6개월
        </div>
      </div>

      <div className="ordercontent-box">
        <div className="color-tab-container">
          <Datepicker onChange={handleDateChange} />
        </div>
        <div className="ordergrid-wrapper">
          <div className="ordergrid-container">
            <div className="order-header">
              <div className="order-table">
                <div>주문번호</div>
                <div>이미지</div>
                <div>상품정보</div>
                <div>수량</div>
                <div>상품구매금액</div>
                <div>주문처리상태</div>
                <div>취소/반품</div>
              </div>
            </div>
            {filteredItems.length === 0 ? (
              <div className="no-results">주문하신 내역이 없습니다.</div>
            ) : (
              filteredItems.map((order) => (
                <OrderCard
                  key={order.orderId}
                  order={order}
                  onClick={handleCardClick}
                  onCancelClick={handleCancelClick} // 취소/반품 클릭 핸들러 전달
                />
              ))
            )}
          </div>
        </div>
      </div>

      {selectedOrder && (
        <Ordermodal
          open={isModalOpen}
          title={`Order Details - ${selectedOrder.orderId}`}
          onOk={handleModalClose}
          onCancel={handleModalClose}
          checkedItems={selectedOrder.products}
          orderDate={selectedOrder?.orderDate}
          orderStatus={selectedOrder?.status}
        />
      )}

      {selectedCancelOrder && (
        <CancelModal
          open={isCancelModalOpen}
          title={`주문 ${selectedCancelOrder.orderId} ${selectedCancelOrder.status === "결제대기" ? "취소" : "반품"}`}
          content={`해당 주문을 정말 ${selectedCancelOrder.status === "결제대기" ? "취소" : "반품"}하시겠습니까?`}
          onOk={handleCancelConfirm}
          onCancel={handleCancelModalClose}
        />
      )}
    </div>
  );
};

export default Ordermain;
