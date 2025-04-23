import React, { useState } from "react";
import { Modal, Form, Input, Select, Checkbox } from "antd";
import "../modal/modal.css";

const Qnamodal = ({ open, title, onOk, onCancel }) => {
  const [form] = Form.useForm();
  const [isLocked, setIsLocked] = useState(false); // 잠금 상태 관리

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        form.resetFields();
        onOk(values); // 입력된 데이터를 상위 컴포넌트로 전달
      })
      .catch((info) => {
        console.log("Validation Failed:", info);
      });
  };

  const handleLockChange = (e) => {
    setIsLocked(e.target.checked);
    if (!e.target.checked) {
      // 체크 해제 시 비밀번호 필드 초기화
      form.setFieldsValue({ password: undefined });
    }
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={onCancel}
      closable={false} // X 버튼 제거 (antd 기본 X 버튼)
      className="deletecustom-modal" // 커스텀 스타일 적용
      footer={null}
    >
      <div>
        {/* Header 영역 */}
        <div className="deleteheader">
          <div style={{ color: "#ffffff" }}>{title}</div>
          {/* Custom X 버튼 */}
          <button className="deletemodalbtn" onClick={onCancel}>
            x
          </button>
        </div>
        {/* Form 영역 */}
        <Form
          form={form}
          layout="vertical"
          name="qnaForm"
          style={{ padding: "20px" }}
        >
          {/* 문의 타입 */}
          <Form.Item
            name="type"
            label="문의 타입"
            rules={[{ required: true, message: "문의 타입을 선택해주세요!" }]}
          >
            <Select placeholder="문의 타입 선택">
              <Select.Option value="service">서비스 관련</Select.Option>
              <Select.Option value="product">상품 관련</Select.Option>
              <Select.Option value="order">주문 관련</Select.Option>
              <Select.Option value="other">기타</Select.Option>
            </Select>
          </Form.Item>

          {/* 문의 제목 */}
          <Form.Item
            name="title"
            label="문의 제목"
            rules={[{ required: true, message: "문의 제목을 입력해주세요!" }]}
          >
            <Input placeholder="문의 제목을 입력해주세요" />
          </Form.Item>

          {/* 문의 내용 */}
          <Form.Item
            name="content"
            label="문의 내용"
            rules={[{ required: true, message: "문의 내용을 입력해주세요!" }]}
          >
            <Input.TextArea rows={4} placeholder="문의 내용을 입력해주세요" />
          </Form.Item>

          {/* 잠금 여부 체크박스 */}
          <Form.Item name="isLocked" valuePropName="checked">
            <Checkbox onChange={handleLockChange}>
              문의 잠금 여부
            </Checkbox>
          </Form.Item>

          {/* 비밀번호 입력 (잠금 활성화 시에만 표시) */}
          {isLocked && (
            <Form.Item
              name="password"
              label="비밀번호"
              rules={[
                { required: true, message: "비밀번호를 입력해주세요!" },
                { min: 4, message: "비밀번호는 최소 4자 이상이어야 합니다." },
              ]}
            >
              <Input.Password placeholder="비밀번호를 입력해주세요" />
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

export default Qnamodal;
