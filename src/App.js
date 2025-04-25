import './App.css';
import BACKGROUND from './component/background/background';
// import AllPage from './js/page/all/';
import OuterPage from './page/outer/outer';
import TopPage from './page/top/top';
import BottomPage from './page/bottom/bottom';
import AccPage from './page/acc/acc';
import LoginPage from './page/login/login';
import JoinPage from './page/join/join';
import ItemDetails from "./page/itemdetail/itemdetail";
import CartPage from "./page/cart/cart";
import WishlistPage from "./page/wish/wish";
import OrderPage from "./page/order/order";
import NoticePage from "./page/notice/notice";
import QnAPage from "./page/qna/qna";
import EventPage from "./page/event/event";
import ReviewPage from "./page/review/review";
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
