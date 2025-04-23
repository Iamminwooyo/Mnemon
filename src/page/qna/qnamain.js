import "./qna.css";
import { useState } from "react";
import qnaData from "../../data/board/qna";
import QnaCard from "../../component/card/qnacard";
import Qnamodal from "../../component/modal/qnamodal"; // Qnamodal 컴포넌트 import

const Qnamain = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태 관리

  const handleModalOpen = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleModalClose = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleModalSubmit = (formData) => {
    console.log("문의 제출 데이터:", formData);
    setIsModalOpen(false); // 모달 닫기
    // formData를 처리하는 로직 추가 (ex: 서버에 전송, QnA 목록에 추가)
  };

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - QnA</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom:'34px' }}>
        <div className="font">QnA</div>
      </div>

      <div className="wishlistcontent-box">
        <div className="color-tab-container">
          <div className="qna-button" onClick={handleModalOpen}>
            문의
          </div>
        </div>
        <div className="qnagrid-wrapper">
          <div className="qnagrid-container">
            <div className="qna-header">
              <div className="qna-table">
                <div style={{ marginLeft: "110px" }}>문의 유형</div>
                <div style={{ marginLeft: "70px" }}>이미지</div>
                <div>문의 내용</div>
                <div style={{ marginRight: "90px" }}>작성자</div>
                <div style={{ marginRight: "130px" }}>작성일자</div>
              </div>
            </div>
            {qnaData.map((qna) => (
              <QnaCard
                key={qna.id}
                type={qna.type}
                image={qna.image}
                content={qna.content}
                author={qna.author}
                date={qna.date}
                answer={qna.answer}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Qna 모달 */}
      <Qnamodal
        open={isModalOpen}
        title="Question"
        onOk={handleModalSubmit} // 제출 시 호출
        onCancel={handleModalClose} // 취소 시 호출
      />
    </div>
  );
};

export default Qnamain;
