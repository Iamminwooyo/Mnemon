import React from "react";
import "./card.css";

const NoticeCard = ({ title, content, date, author }) => {
  // content 길이 제한
  const truncatedContent =
    content.length > 70 ? `${content.substring(0, 70)}...` : content;

  return (
    <div className="notice-card">
      <div className="notice-card-header">
        <div className="notice-title">{title}</div>
      </div>
      <div className="notice-card-body">
        <div className="notice-content">{truncatedContent}</div>
      </div>
      <div className="notice-card-footer">
        <div className="notice-date">작성일: {date}</div>
        <div className="notice-author">작성자: {author}</div>
      </div>
    </div>
  );
};

export default NoticeCard;
