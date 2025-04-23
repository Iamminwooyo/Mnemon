import './background.css';
import Header from '../../component/head/head';
import Body from '../../component/body/body';
import Footer from '../../component/foot/foot';

const BACKGROUND = () => {
  return (
    <div className="background">
      {/* 배경 색상과 격자무늬가 있는 영역 */}
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default BACKGROUND;
