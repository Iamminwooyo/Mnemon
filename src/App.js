import './App.css';
import BACKGROUND from './js/component/background/background';
// import AllPage from './js/page/all/';
import OuterPage from './js/page/outer/outer';
import TopPage from './js/page/top/top';
import BottomPage from './js/page/bottom/bottom';
import AccPage from './js/page/acc/acc';
import LoginPage from './js/page/login/login';
import JoinPage from './js/page/join/join';
import ItemDetails from "./js/page/itemdetail/itemdetail";
import CartPage from "./js/page/cart/cart";
import WishlistPage from "./js/page/wish/wish";
import OrderPage from "./js/page/order/order";
import NoticePage from "./js/page/notice/notice";
import QnAPage from "./js/page/qna/qna";
import EventPage from "./js/page/event/event";
import ReviewPage from "./js/page/review/review";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router 임포트

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 기본 화면 */}
          <Route path="/" element={<BACKGROUND />} />
          <Route path="/outer" element={<OuterPage />} />
          <Route path="/top" element={<TopPage />} />
          <Route path="/bottom" element={<BottomPage />} />
          <Route path="/acc" element={<AccPage />} />
          <Route path="/item/:id" element={<ItemDetails />} />
          {/* 로그인 페이지 */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/join" element={<JoinPage />} />
          {/* 사이드 페이지 */}
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/qna" element={<QnAPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/event" element={<EventPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
