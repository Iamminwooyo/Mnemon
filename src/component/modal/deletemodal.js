import React from 'react';
import { Modal } from 'antd';
import "../modal/modal.css";

const Deletemodal = ({ open, title, content, onOk, onCancel }) => {
  return (
    <Modal
      open={open}
      onOk={onOk}
      onCancel={onCancel}
      closable={false} // X 버튼 제거 (antd 기본 X 버튼)
      footer={null} // 기본 푸터 제거
      className="deletecustom-modal" // 커스텀 스타일 적용
    >
      <div>
        {/* Header 영역 */}
        <div className="deleteheader">
          <div style={{color:'#ffffff'}}>Delete</div>
          {/* Custom X 버튼 */}
          <button className="deletemodalbtn" onClick={onCancel}>x</button>
        </div>
        {/* 모달 내용 */}
        <div style={{display:'flex', justifyContent:'center'}}>
            <img src='/pixel/pixel-warning.png' alt='경고' style={{width:'40px', height:'40px', marginTop:'20px', marginRight:'15px'}}/>             
            <div className="deletemodal">{content}</div>
        </div>
      </div>
      <div className="deletefooter-buttons">
            <div onClick={onOk} className="deleteok-button">
              확인
            </div>
            <div onClick={onCancel} className="deletecancel-button">
              취소
            </div>
        </div>
    </Modal>
  );
};

export default Deletemodal;
