import React, { useState } from 'react';
import { Modal, Tabs, Checkbox, Row, Col } from 'antd';
import "../modal/modal.css";

const Categorymodal = ({ open, title, content, onOk, onCancel }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const styleOptions = ['캐주얼', '포멀', '스포티', '스트릿', '빈티지'];
  const seasonOptions = ['봄', '여름', '가을', '겨울'];
  const colorOptions = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FFA500', '#800080'];

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };

  const tabItems = [
    {
      label: '상의',
      key: '1',
      children: (
        <div>
          <div style={{ marginBottom: '10px' }}>Style</div>
          <Checkbox.Group style={{ width: '100%' }}>
            <Row>
              {styleOptions.map((style, index) => (
                <Col span={8} key={index} style={{ marginBottom: '10px' }}>
                  <Checkbox value={style}>{style}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>

          <div style={{ marginTop: '20px', marginBottom: '10px' }}>Season</div>
          <Checkbox.Group style={{ width: '100%' }}>
            <Row>
              {seasonOptions.map((season, index) => (
                <Col span={6} key={index} style={{ marginBottom: '10px' }}>
                  <Checkbox value={season}>{season}</Checkbox>
                </Col>
              ))}
            </Row>
          </Checkbox.Group>

          <div style={{ marginTop: '20px', marginBottom: '10px' }}>Color</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {colorOptions.map((color, index) => (
              <div
                key={index}
                onClick={() => handleColorClick(color)}
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: color,
                  borderRadius: '5px',
                  cursor: 'pointer',
                  border: selectedColor === color ? '2px solid #808080' : '1px solid #ccc',
                }}
              ></div>
            ))}
          </div>
          {selectedColor && (
            <div style={{ marginTop: '10px' }}>
              선택된 색상: <span style={{ color: selectedColor }}>{selectedColor}</span>
            </div>
          )}
        </div>
      ),
    },
    {
      label: '아우터',
      key: '2',
      children: <div>아우터에 대한 내용</div>,
    },
    {
      label: '하의',
      key: '3',
      children: <div>하의에 대한 내용</div>,
    },
    {
      label: '악세사리',
      key: '4',
      children: <div>악세사리에 대한 내용</div>,
    },
  ];

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
          <div style={{ color: '#ffffff' }}>{title || 'Option'}</div>
          {/* Custom X 버튼 */}
          <button className="deletemodalbtn" onClick={onCancel}>
            x
          </button>
        </div>
        {/* 모달 내용 */}
        <div style={{ padding: '10px', marginTop: '30px' }}>
          <Tabs tabPosition="left" items={tabItems} />
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

export default Categorymodal;
