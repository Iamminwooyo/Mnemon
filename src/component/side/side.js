import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../side/side.css';

const Side = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('');

  useEffect(() => {
    setActiveMenu(window.location.pathname); // 현재 URL 경로로 초기화
  }, []);

  const handleMenuClick = (path) => {
    setActiveMenu(path); // 클릭된 메뉴 경로 저장
    navigate(path); // 페이지 이동
  };


  return (
    <div className="side">
      <div className="side-header">
        <span style={{ marginLeft: '5px' }}>Side - menu</span>
        <div>
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div className="side-menu">
        <div
          className={`side-item ${activeMenu === '/' ? 'active' : ''}`}
          style={{ marginTop: '30px' }}
          onClick={() => handleMenuClick('/')}
        >
          <img src="/pixel/pixel-folder3.png" alt="clothes" className="side-icon" />
          <span className="side-label">- Clothes</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/cart' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/cart')}
        >
          <img src="/pixel/pixel-folder3.png" alt="Cart" className="side-icon" />
          <span className="side-label">- Cart</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/wishlist' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/wishlist')}
        >
          <img src="/pixel/pixel-folder3.png" alt="Wishlist" className="side-icon" />
          <span className="side-label">- Wishlist</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/order' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/order')}
        >
          <img src="/pixel/pixel-folder3.png" alt="Order" className="side-icon" />
          <span className="side-label">- Order</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/notice' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/notice')}
        >
          <img src="/pixel/pixel-folder3.png" alt="Announcements" className="side-icon" />
          <span className="side-label">- Notice</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/qna' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/qna')}
        >
          <img src="/pixel/pixel-folder3.png" alt="QnA" className="side-icon" />
          <span className="side-label">- QnA</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/review' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/review')}
        >
          <img src="/pixel/pixel-folder3.png" alt="Reviews" className="side-icon" />
          <span className="side-label">- Reviews</span>
        </div>
        <div
          className={`side-item ${activeMenu === '/event' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/event')}
        >
          <img src="/pixel/pixel-folder3.png" alt="Events" className="side-icon" />
          <span className="side-label">- Events</span>
        </div>
      </div>
    </div>
  );
};

export default Side;
