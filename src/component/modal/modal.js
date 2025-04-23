import React from 'react';
import { Modal } from 'antd';

const Modal = ({ isOpen, title, content, onOk, onCancel }) => {
  return (
    <Modal
      title={title} // 모달의 제목
      open={isOpen} // 모달 표시 여부
      onOk={onOk} // 확인 버튼 클릭 핸들러
      onCancel={onCancel} // 취소 버튼 클릭 핸들러
    >
      <p>{content}</p> {/* 모달 내용 */}
    </Modal>
  );
};

export default CustomModal;
