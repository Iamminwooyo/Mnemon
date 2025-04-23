import { useParams } from "react-router-dom";
import items from "../../data/item/item"; // items 데이터 가져오기
import Header from '../../component/head/head';
import Detailbody from '../../component/body/detailbody';
import Footer from '../../component/foot/foot';

const ItemDetails = () => {
    const { id } = useParams();
    console.log("Received ID:", id);
  
    const item = items.find((item) => item.id === parseInt(id));
  
    if (!item) {
      return <h1>Item Not Found</h1>;
    }
  
    return (
      <div className="background">
        <Header />
        <Detailbody />
        <Footer />
      </div>
    );
  };
  

export default ItemDetails;
