import "../cart/cart.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import cartlistData from "../../data/user/cartlist"; // cartlist 데이터 가져오기
import Cartcard from "../../component/card/cartcard";
import Deletemodal from "../../component/modal/deletemodal";
import Buymodal from "../../component/modal/buymodal";

const Cartmain = () => {
  const [cartlist, setCartlist] = useState(cartlistData); // cartlist 데이터를 상태로 관리
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [checkedItems, setCheckedItems] = useState([]); // 체크된 아이템 ID 리스트
  const [isAllChecked, setIsAllChecked] = useState(false); // 전체 체크 상태
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // 삭제 모달 상태
  const [buyModalOpen, setBuyModalOpen] = useState(false); // 구매 모달 상태
  const [confirmLoading, setConfirmLoading] = useState(false); // 모달 로딩 상태
  const navigate = useNavigate(); // 네비게이터 생성

  const handleCardClick = (productid) => {
    navigate(`/item/${productid}`);
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleAllCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsAllChecked(checked);

    if (checked) {
      setCheckedItems(cartlist.map((item) => item.id));
    } else {
      setCheckedItems([]);
    }
  };

  const handleItemCheckedChange = (id, isChecked) => {
    setCheckedItems((prev) =>
      isChecked ? [...prev, id] : prev.filter((itemId) => itemId !== id)
    );
  };

  const handleDeleteClick = () => {
    if (checkedItems.length === 0) {
      alert("삭제할 항목을 선택하세요."); // 알림 메시지
      return;
    }
    setDeleteModalOpen(true); // 체크된 항목이 있을 경우에만 모달 열기
  };

  const handleBuyClick = () => {
    if (checkedItems.length === 0) {
      alert("구매할 항목을 선택하세요!");
      return;
    }
    setBuyModalOpen(true);
  };

  const handleModalOk = (actionType) => {
    setConfirmLoading(true);
    setTimeout(() => {
      if (actionType === "delete") {
        // 체크된 항목 제거
        setCartlist((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
        setCheckedItems([]); // 선택된 항목 초기화
        setIsAllChecked(false); // All 체크박스 해제
      } else if (actionType === "buy") {
        console.log("Bought items:", checkedItems);
      }
      setConfirmLoading(false);
      setDeleteModalOpen(false);
      setBuyModalOpen(false);
    }, 30); // 딜레이를 줄여 빠르게 반응하도록 설정
  };

  const handleModalCancel = () => {
    setDeleteModalOpen(false);
    setBuyModalOpen(false);
  };

  const selectedItems = cartlist.filter((item) => checkedItems.includes(item.id));

  const filteredCartItems = cartlist.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - Cart</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom:'34px'}}>
        <div className="font">Cart</div>
      </div>
      <div className="cartcontent-box">
        <div className="cart-header-container">
          <div style={{ display: "flex", alignItems: "center", flex: "3" }}>
            <input
              type="checkbox"
              checked={isAllChecked}
              onChange={handleAllCheckboxChange}
              className="checkbox"
            />
            <div>All</div>
          </div>
          <div className="cart-button-container">
            <div className="cart-delete-button" onClick={handleDeleteClick}>
              삭제
            </div>
            <div className="cart-buy-button" onClick={handleBuyClick}>
              구매
            </div>
          </div>
        </div>
        <div className="cartgrid-wrapper">
          {filteredCartItems.length === 0 ? (
            <div className="no-results">장바구니에 담긴 상품이 없습니다.</div>
          ) : (
            <div className="grid-container">
              {filteredCartItems.map((item) => (
                <Cartcard
                  key={item.id}
                  src={item.src}
                  name={item.name}
                  price={item.price}
                  color={[item.color]}
                  sizeOptions={item.sizeOptions}
                  quantity={item.quantity}
                  isChecked={checkedItems.includes(item.id)}
                  onCheckedChange={(isChecked) =>
                    handleItemCheckedChange(item.id, isChecked)
                  }
                  onClick={() => handleCardClick(item.productid)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 삭제 모달 */}
      <Deletemodal
        title="장바구니 비우기"
        open={deleteModalOpen}
        content="선택하신 항목을 장바구니에서 빼시겠습니까?"
        onOk={() => handleModalOk("delete")}
        onCancel={handleModalCancel}
      />

      {/* 구매 모달 */}
      <Buymodal
        title="Buy"
        open={buyModalOpen}
        checkedItems={selectedItems} // 체크된 아이템 데이터 전달
        setCheckedItems={setCheckedItems} // setCheckedItems 전달
        onOk={() => handleModalOk("buy")}
        onCancel={handleModalCancel}
      />
    </div>
  );
};

export default Cartmain;
