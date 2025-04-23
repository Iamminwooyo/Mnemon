import React, { useState } from "react";
import { Modal, Form, Select } from "antd";
import "../modal/modal.css";

const CancelModal = ({ open, title, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [reasonCategory, setReasonCategory] = useState(null); // 첫 번째 Select 선택 상태

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        setReasonCategory(null); // 상태 초기화
        onOk(values); // 선택된 데이터를 상위 컴포넌트로 전달
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const handleCategoryChange = (value) => {
    setReasonCategory(value);
    form.setFieldsValue({ subReason: undefined }); // 하위 사유 초기화
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={() => {
        form.resetFields();
        setReasonCategory(null); // 상태 초기화
        onCancel();
      }}
      closable={false}
      className="deletecustom-modal"
      footer={null} // 기본 푸터 제거
    >
      <div>
        <div className="deleteheader">
          <div style={{ color: "#ffffff" }}>{title}</div>
          <button className="deletemodalbtn" onClick={onCancel}>
            x
          </button>
        </div>
        <Form
          form={form}
          layout="vertical"
          name="cancelForm"
          style={{ padding: "20px" }}
        >
          {/* 첫 번째 Select: 반품/취소 이유 카테고리 */}
          <Form.Item
            name="reasonCategory"
            label="취소/반품 이유"
            rules={[{ required: true, message: "취소/반품 이유를 선택해주세요!" }]}
          >
            <Select
              placeholder="취소/반품 이유를 선택해주세요"
              onChange={handleCategoryChange}
            >
              <Select.Option value="buyer">구매자 책임</Select.Option>
              <Select.Option value="seller">판매자 책임</Select.Option>
            </Select>
          </Form.Item>

          {/* 두 번째 Select: 세부 사유 */}
          {reasonCategory && (
            <Form.Item
              name="subReason"
              label="세부 사유"
              rules={[{ required: true, message: "세부 사유를 선택해주세요!" }]}
            >
              <Select placeholder="세부 사유를 선택해주세요">
                {reasonCategory === "buyer" ? (
                  <>
                    <Select.Option value="changeOfMind">단순 변심</Select.Option>
                    <Select.Option value="wrongOption">옵션(사이즈, 색상 등) 잘못 선택함</Select.Option>
                    <Select.Option value="wrongQuantity">수량을 잘못 선택함</Select.Option>
                    <Select.Option value="sizeMismatch">사이즈가 맞지 않음</Select.Option>
                  </>
                ) : (
                  <>
                    <Select.Option value="damagedProduct">상품 불량</Select.Option>
                    <Select.Option value="wrongItem">주문과 다른 상품이 배송됨</Select.Option>
                    <Select.Option value="wrongColor">주문과 다른 색상이 배송됨</Select.Option>
                    <Select.Option value="wrongDesign">주문과 다른 디자인이 배송됨</Select.Option>
                    <Select.Option value="shippingAccident">배송사고 안내 받음</Select.Option>
                    <Select.Option value="measurementMismatch">주문과 실측이 다름</Select.Option>
                  </>
                )}
              </Select>
            </Form.Item>
          )}
        </Form>
      </div>
      <div className="qnafooter-buttons">
            <div onClick={onOk} className="ok-button">
              확인
            </div>
            <div onClick={onCancel} className="cancel-button">
              취소
            </div>
      </div>
    </Modal>
  );
};

export default CancelModal;
