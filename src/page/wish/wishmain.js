import "./wish.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 가져오기
import WishlistData from "../../data/user/wishlist"; // Wishlist 데이터 가져오기
import Wishcard from "../../component/card/wishcard";
import Deletemodal from "../../component/modal/deletemodal";

const Wishlistmain = () => {
  const [Wishlist, setWishlistlist] = useState(WishlistData); // Wishlist 데이터를 상태로 관리
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가
  const [checkedItems, setCheckedItems] = useState([]); // 체크된 아이템 ID 리스트
  const [isAllChecked, setIsAllChecked] = useState(false); // 전체 체크 상태
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // 삭제 모달 상태
  const [confirmLoading, setConfirmLoading] = useState(false); // 모달 로딩 상태
  const navigate = useNavigate(); // 네비게이터 생성

  const handleCardClick = (productid) => {
    navigate(`/item/${productid}`);
  };

  const handleAllCheckboxChange = (e) => {
    const checked = e.target.checked;
    setIsAllChecked(checked);

    if (checked) {
      setCheckedItems(Wishlist.map((item) => item.id));
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

  const handleModalOk = (actionType) => {
    setConfirmLoading(true);
    setTimeout(() => {
      if (actionType === "delete") {
        // 체크된 항목 제거
        setWishlistlist((prev) => prev.filter((item) => !checkedItems.includes(item.id)));
        setCheckedItems([]); // 선택된 항목 초기화
        setIsAllChecked(false); // All 체크박스 해제
      } else if (actionType === "buy") {
        console.log("Bought items:", checkedItems);
      }
      setConfirmLoading(false);
      setDeleteModalOpen(false);
    }, 30); // 딜레이를 줄여 빠르게 반응하도록 설정
  };

  const handleModalCancel = () => {
    setDeleteModalOpen(false);
  };

  const selectedItems = Wishlist.filter((item) => checkedItems.includes(item.id));

  const filteredWishlistItems = Wishlist.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main retro-window">
      <div className="retro-header">
        <span>Mnemon - Wishlist</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>
      <div style={{ display: "flex", marginBottom:'34px' }}>
        <div className="font">Wishlist</div>
      </div>
      <div className="wishlistcontent-box">
        <div className="wishlist-header-container">
          <div style={{ display: "flex", alignItems: "center", flex: "3" }}>
            <input
              type="checkbox"
              checked={isAllChecked}
              onChange={handleAllCheckboxChange}
              className="checkbox"
            />
            <div>All</div>
          </div>
          <div className="wishlist-delete-button" onClick={handleDeleteClick}>
            삭제
          </div>
        </div>
        <div className="wishlistgrid-wrapper">
          {filteredWishlistItems.length === 0 ? (
            <div className="no-results">관심 상품이 없습니다.</div>
          ) : (
            <div className="grid-container">
              {filteredWishlistItems.map((item) => (
                <Wishcard
                  key={item.id}
                  src={item.src}
                  name={item.name}
                  price={item.price}
                  color={[item.color]}
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
        title="찜 상품 비우기"
        open={deleteModalOpen}
        content="선택하신 항목을 관심 상품 목록에서 빼시겠습니까?"
        onOk={() => handleModalOk("delete")}
        onCancel={handleModalCancel}
      />
    </div>
  );
};

export default Wishlistmain;
