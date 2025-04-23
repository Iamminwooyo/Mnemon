import React, { useState } from "react";
import { Modal } from "antd";
import Buyselect from "../select/buyselect";
import "../modal/modal.css";
import Buyinput from "../input/buyinput";

const Detailbuymodal = ({ open, title, onOk, onCancel, items }) => {
  // 선택된 옵션 상태 관리
  const [selectedOptions, setSelectedOptions] = useState(
    items.map((item) => ({
      id: item.id,
      color: item.color[0], // 첫 번째 컬러를 기본값으로 설정
      size: item.size.dimensions[0]?.size || "S", // 첫 번째 사이즈를 기본값으로 설정
      quantity: 1, // 기본 수량
    }))
  );

  // 컬러 변경 핸들러
  const handleColorChange = (color, itemId) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === itemId ? { ...option, color } : option
      )
    );
  };

  // 사이즈 변경 핸들러
  const handleSizeChange = (value, itemId) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === itemId ? { ...option, size: value } : option
      )
    );
  };

  // 수량 변경 핸들러
  const handleQuantityChange = (value, itemId) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === itemId ? { ...option, quantity: value } : option
      )
    );
  };

  // 총 금액 계산
  const totalAmount = items.reduce((sum, item) => {
    const selectedOption = selectedOptions.find((opt) => opt.id === item.id);
    const price = parseInt(item.price.replace(",", "")) || 0;
    return sum + price * (selectedOption?.quantity || 1);
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
        {/* Header */}
        <div className="deleteheader">
          <div style={{ color: "#ffffff" }}>{title}</div>
          <button className="deletemodalbtn" onClick={onCancel}>
            x
          </button>
        </div>

        {/* 모달 내용 */}
        <div style={{ marginTop: "20px" }}>
          {items.map((item) => {
            const selectedOption = selectedOptions.find(
              (opt) => opt.id === item.id
            );
            return (
              <div key={item.id} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                  }}
                >
                  <img
                    src={item.src}
                    alt={item.name}
                    className="detailmodal-img"
                  />
                  <div style={{ flex: 1 }}>
                    <div className="detailmodal-name">{item.name}</div>
                    <div className="detailmodal-price">₩{item.price}</div>

                    {/* 컬러 선택 버튼 */}
                    <div className="detailmodal-color">
                      <div>Color</div>
                      <div style={{ display: "flex", gap: "8px" }}>
                        {item.color.map((color, index) => (
                          <button
                            key={index}
                            onClick={() => handleColorChange(color, item.id)}
                            style={{
                              width: "30px",
                              height: "30px",
                              backgroundColor: color,
                              border: `2px solid ${
                                selectedOption.color === color
                                  ? "#000"
                                  : "transparent"
                              }`,
                              borderRadius: "5px",
                              position: "relative",
                            }}
                          >
                            {selectedOption.color === color && (
                              <span
                                style={{
                                  color: "#fff",
                                  position: "absolute",
                                  top: "3px",
                                  left: "6px",
                                  fontWeight: "bold",
                                }}
                              >
                                ✔
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* 사이즈 선택 */}
                    <div className="detailmodal-size">사이즈</div>
                    <Buyselect
                      onChange={(value) => handleSizeChange(value, item.id)}
                      options={item.size.dimensions.map((dim) => ({
                        value: dim.size,
                        label: dim.size,
                      }))}
                      defaultValue={selectedOption.size}
                    />

                    {/* 수량 선택 */}
                    <div className="detailmodal-quantity">수량</div>
                    <Buyinput
                      value={selectedOption.quantity}
                      onChange={(value) => handleQuantityChange(value, item.id)}
                      min={1}
                      max={100}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            margin: "10px 0",
            borderTop: "1px solid rgba(128, 128, 128, 0.5)",
            width: "100%",
          }}
        ></div>
        {/* Footer */}
        <div className="buycustom-modal-footer">
          <div className="total-amount">
            총 금액: ₩{totalAmount.toLocaleString()}
          </div>
          <div className="buyfooter-buttons">
            <div onClick={onOk} className="ok-button">
              장바구니
            </div>
            <div onClick={onCancel} className="cancel-button">
              구매
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Detailbuymodal;
