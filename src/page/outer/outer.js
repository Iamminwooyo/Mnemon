import Header from '../../component/head/head';
import Outerbody from '../../component/body/outerbody';
import Footer from '../../component/foot/foot';

const Outer = () => {
    return (
      <div className="background">
        <Header />
        <Outerbody />
        <Footer />
      </div>
    );
  };
  

export default Outer;
