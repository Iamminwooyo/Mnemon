import React, { useState } from "react";
import "./card.css";

const QnaCard = ({ type, image, content, author, date, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="qna-background">
         <div className="qna-row" onClick={toggleExpand}>
            <div className="qna-type">{type}</div>
            <div className="qna-image">
                <img src={image} alt="QnA" />
            </div>
            <div>{content}</div>
            <div>{author}</div>
            <div>{date}</div>
         </div>
            <div style={{display:'flex'}}>
                <img src="/pixel/pixel-answer.png" alt='답변화살표' className="answer-img"/>
                <div className="answer-box">
                    <img src="/pixel/pixel-lock.png" alt='자물쇠' className="qna-lock"/>
                    <div>답변</div>
                    <div>Mnemon</div>
                    <div>{date}</div>
                </div>
            </div>
    </div>
  );
};

export default QnaCard;
