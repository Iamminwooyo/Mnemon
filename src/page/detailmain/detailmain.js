import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../../data/item/item"; // items 데이터 가져오기
import reviews from "../../data/board/review"; // 리뷰 데이터 가져오기
import "../detailmain/detailmain.css";
import { Carousel } from "antd"; // Carousel for photo reviews

import Wishmodal from "../../component/modal/wishmodal";
import Detailbuymodal from "../../component/modal/detailbuymodal";

const CustomArrow = ({ className, style, onClick, icon }) => {
  return (
    <img
      src={icon}
      alt="arrow"
      onClick={onClick}
      style={{
        ...style,
        width: "30px",
        height: "30px",
        zIndex: 10,
        cursor: "pointer",
      }}
      className={className}
    />
  );
};

const Detailmain = () => {
  const { id } = useParams();
  const [isIconToggled, setIsIconToggled] = useState(false); // 아이콘 상태 관리
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // 현재 이미지 인덱스
  const [scrollCount, setScrollCount] = useState(0); // 스크롤 횟수
  const contentRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(1); // 페이지네이션의 현재 페이지
  const reviewsPerPage = 3; // 한 페이지에 표시할 리뷰 개수

  const [wishModalOpen, setWishModalOpen] = useState(false); // 모달 상태 관
  const [detailbuyModalOpen, setDetailbuyModalOpen] = useState(false);

  const item = items.find((item) => item.id === parseInt(id));
  const productReviews = reviews.find((review) => review.prductid === parseInt(id)); // 해당 제품의 리뷰 가져오기

  const totalImages = item?.sub?.length || 0; // sub 이미지 수 기반으로 설정
  const totalReviewPages = Math.ceil((productReviews?.reviews.filter((r) => !r.isPhotoReview).length || 0) / reviewsPerPage);

  const SCROLL_THRESHOLD = 2; // 몇 번의 스크롤 후 이미지 전환할지 설정

  const handleIconClick = () => {
    setIsIconToggled((prev) => !prev); // 아이콘 상태 토글
  };

  // 모달 열기 함수
const handlewishModalOpen = () => {
  setWishModalOpen(true);
};

// 모달 닫기 함수
const handlewishModalCancel = () => {
  setWishModalOpen(false);
};

// 모달 확인 클릭 시 동작
const handlewishModalOk = (action) => {
  if (action === "wish") {
    console.log("상품이 찜 목록에 추가되었습니다.");
    // 여기서 필요한 로직 추가 (ex. 찜 목록에 상품 추가)
  }
  setWishModalOpen(false);
};

// 구매 모달 열기 함수
const handledetailbuyModalOpen = () => {
  setDetailbuyModalOpen(true);
};

// 구매 모달 닫기 함수
const handledetailbuyModalCancel = () => {
  setDetailbuyModalOpen(false);
};

// 구매 모달 확인 클릭 시 동작
const handledetailbuyModalOk = (action) => {
  if (action === "buy") {
    console.log("구매가 완료되었습니다.");
    // 여기서 필요한 구매 로직 추가 (ex. 장바구니 또는 결제 처리)
  }
  setDetailbuyModalOpen(false);
};

  useEffect(() => {
    const handleScroll = (e) => {
      if (currentImageIndex >= totalImages - 1) return; // 마지막 이미지에 도달하면 기본 스크롤 허용

      e.preventDefault(); // 기본 스크롤 동작 차단
      setScrollCount((prevCount) => prevCount + 1); // 스크롤 횟수 증가
    };

    const contentElement = contentRef.current;
    if (contentElement) {
      contentElement.addEventListener("wheel", handleScroll, { passive: false });
    }

    return () => {
      if (contentElement) {
        contentElement.removeEventListener("wheel", handleScroll);
      }
    };
  }, [currentImageIndex, totalImages]);

  useEffect(() => {
    if (scrollCount >= SCROLL_THRESHOLD) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
      setScrollCount(0); // 스크롤 횟수 초기화
    }
  }, [scrollCount]);

  if (!item) {
    return <h1>Item Not Found</h1>;
  }

  const renderStars = (rating, sizeClass = "") => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className={`stars-container ${sizeClass}`} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div style={{ display: "flex", gap: "4px" }}>
          {Array(fullStars)
            .fill()
            .map((_, index) => (
              <img
                key={`full-${index}`}
                src="/pixel/pixel-fullstar.png"
                alt="full star"
                className={`star-icon ${sizeClass}`}
              />
            ))}
          {hasHalfStar && (
            <img
              src="/pixel/pixel-halfstar.png"
              alt="half star"
              className={`star-icon ${sizeClass}`}
            />
          )}
          {Array(emptyStars)
            .fill()
            .map((_, index) => (
              <img
                key={`empty-${index}`}
                src="/pixel/pixel-star.png"
                alt="empty star"
                className={`star-icon ${sizeClass}`}
              />
            ))}
        </div>
        <span className={`star-rating-value ${sizeClass}`}>
          {rating.toFixed(1)}
        </span>
      </div>
    );
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const filteredReviews = productReviews?.reviews.filter((review) => !review.isPhotoReview) || [];
  const displayedReviews = filteredReviews.slice((currentPage - 1) * reviewsPerPage, currentPage * reviewsPerPage);

  return (
    <div className="detailmain retro-window">
      <div className="retro-header">
        <span>Mnemon - Detail</span>
        <div className="controls">
          <button className="minimize">-</button>
          <button className="close">x</button>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div  style={{ display: "flex", justifyContent:'center', marginBottom:'34px'}}>
          <div className="detailfont">Detail</div>
        </div>
        <div className="detailcontent-box">
          <div className="button-tab-container">
            <div className="button-container">
              <div className="back-button" onClick={() => window.history.back()}>뒤로</div>
            </div>
            <div style={{display:'flex'}}>
              <div className="button-container">
                <div className="wish-button" onClick={handlewishModalOpen}>관심 상품</div>
              </div>
              <div className="button-container">
                <div className="buy-button" onClick={handledetailbuyModalOpen}>구매</div>
              </div>
            </div>
          </div>
          <div className="detailcontent-background" ref={contentRef}>
            {/* 고정된 이미지 */}
            <div className="detailphoto-section">
              <div className="detailimage-container">
                {item.sub &&
                  item.sub.map((subItem, index) => (
                    <img
                      key={subItem.id}
                      src={subItem.src}
                      alt={subItem.alt}
                      className={`layer-image layer-${index}`}
                      style={{
                        opacity: currentImageIndex === index ? 1 : 0,
                      }}
                    />
                  ))}
              </div>
              <div style={{ display: "flex", flex: "1", justifyContent: "center" }}>
                <div className="detailinform">
                  <div style={{marginTop:'20px'}}>
                    <div className="detailname">{item.name}</div>
                  </div>

                  <div>
                    <div className="detailname">Price</div>
                    <div className="detailprice">₩ {item.price}</div>
                  </div>

                  <div style={{marginBottom:'25px'}}>
                    <div className="detailname">Colors</div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      {item.color.map((color, index) => (
                        <div
                          key={index}
                          style={{
                            width: '25px',
                            height: '25px',
                            backgroundColor: color, // 배열의 각 색상을 배경색으로 사용
                            border: '1px solid #000',
                            borderRadius: '5px'
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="detailname">introduce</div>
                    <div className="detailintroduce"> {item.introduce} </div>
                  </div>

                </div>
              </div>
            </div>

            {/* 수평선과 로고 추가 */}
            <hr className="detailhorizontal-line" />
            <div className="detailmnemon-logo">Mnemon</div>
                <div style={{ marginBottom: "50px"}}>
                    <div style={{ display: "flex", gap: "10px", justifyContent: 'center' }}>
                      <div className="detailname-size">Size</div>
                      {item.size.type === "상의" ? (
                        <>
                          <div className="detailname-other">총기장</div>
                          <div className="detailname-other">어깨</div>
                          <div className="detailname-other">가슴</div>
                          <div className="detailname-other">소매</div>
                        </>
                      ) : (
                        <>
                          <div className="detailname-other">총기장</div>
                          <div className="detailname-other">허리</div>
                          <div className="detailname-other">밑위</div>
                          <div className="detailname-other">허벅지</div>
                          <div className="detailname-other">밑단</div>
                        </>
                      )}
                    </div>
                    <table className="detailname-table">
                      <tbody>
                        {item.size.dimensions.map((dimension) => (
                          <tr key={dimension.size}>
                            <td style={{ padding: "5px 10px" }}>{dimension.size.toUpperCase()}</td>
                            {item.size.type === "상의" ? (
                              <>
                                <td style={{ padding: "5px 10px" }}>{dimension.총기장}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.어깨}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.가슴}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.소매}</td>
                              </>
                            ) : (
                              <>
                                <td style={{ padding: "5px 10px" }}>{dimension.총기장}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.허리}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.밑위}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.허벅지}</td>
                                <td style={{ padding: "5px 10px" }}>{dimension.밑단}</td>
                              </>
                            )}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div style={{marginBottom:'50px'}}>
                    <div className="detailname">Fabric</div>
                    <div className="detailvalue">{item.fabric}</div>
                  </div>

                  <div style={{marginBottom:'50px'}}>
                    <div className="detailname" style={{marginTop:'10px', marginBottom:'10px'}}>Material Details</div>
                    <div>
                      {item.materialDetails &&
                        Object.entries(item.materialDetails).map(([key, value]) => (
                          <div key={key} className="material-detail-row" style={{fontSize:'15px'}}>
                            <div className="material-detail-key">{key}</div>
                            <div className="detailvalue">{value}</div>
                          </div>
                        ))}
                    </div>
                  </div>
            {/* 추가 이미지 렌더링 */}
            <div className="detailadditional-content">
              {item.children &&
                item.children.map((child) => (
                  <img
                    key={child.id}
                    src={child.src}
                    alt={child.alt}
                    className="detailadditional-image"
                    style={{ width: "500px", marginBottom: "30px" }}
                  />
                ))}
            </div>
            <div className="detailreview-container">
              {/* 포토 리뷰 */}
              <div className="detailreview-title">Photo Review</div>
              {productReviews?.reviews.filter((review) => review.isPhotoReview).length > 0 ? (
                productReviews.reviews.filter((review) => review.isPhotoReview).length >= 4 ? (
                  <div className="detailreview-photo-list">
                    <div className="photo-review-carousel-wrapper">
                      <Carousel
                        arrows
                        dots={false}
                        infinite={false}
                        slidesToShow={4} // 한 번에 4개 표시
                        slidesToScroll={1} // 화살표 클릭 시 1개씩 이동
                        prevArrow={<CustomArrow icon="/pixel/pixel-left.png" />}
                        nextArrow={<CustomArrow icon="/pixel/pixel-right.png" />}
                        className="photo-review-carousel"
                      >
                        {productReviews.reviews
                          .filter((review) => review.isPhotoReview)
                          .map((review) => (
                            <div key={review.id} className="photo-review-slide">
                              <div className="detailreview-photo-item">
                                <img
                                  src={review.image}
                                  alt={`Review by ${review.reviewer}`}
                                  className="detailreview-photo-image"
                                />
                                <div className="detailreview-photo-info">
                                  <div className="detailreview-photo-stars">
                                    {renderStars(review.rating, "small-stars")}
                                  </div>
                                  <div
                                    style={{
                                      marginBottom: "13px",
                                      borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
                                    }}
                                  ></div>
                                  <div className="detailreview-photo-comment">{review.comment}</div>
                                  <div className="detail-photoreviewrbox">
                                    <div className="profile-reviewr">{review.reviewer}</div>
                                    <div className="profile-reviewrdate">{review.date}</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                      </Carousel>
                    </div>
                  </div>
                ) : (
                  <div className="detailreview-photo-list-least">
                    {productReviews.reviews
                      .filter((review) => review.isPhotoReview)
                      .map((review) => (
                        <div key={review.id} className="detailreview-photo-item-least">
                          <img
                            src={review.image}
                            alt={`Review by ${review.reviewer}`}
                            className="detailreview-photo-image"
                          />
                          <div className="detailreview-photo-info">
                            <div className="detailreview-photo-stars">
                              {renderStars(review.rating, "small-stars")}
                            </div>
                            <div
                              style={{
                                marginBottom: "13px",
                                borderBottom: "1px solid rgba(128, 128, 128, 0.5)",
                              }}
                            ></div>
                            <div className="detailreview-photo-comment">{review.comment}</div>
                            <div className="detail-photoreviewrbox">
                              <div className="profile-reviewr">{review.reviewer}</div>
                              <div className="profile-reviewrdate">{review.date}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                )
              ) : (
                <div className="detailreview-no-photoreviews">포토 리뷰가 없습니다.</div>
              )}

              {/* 일반 리뷰 */}
              <div className="detailreview-title">Review</div>
              {filteredReviews.length > 0 ? (
                <div className="detailreview-text-list">
                  {displayedReviews.map((review) => (
                    <div key={review.id} className="detailreview-text-item">
                      <div className="detailreview-text-stars">{renderStars(review.rating, "large-stars")}</div>
                      <div className="detailreview-text-comment">{review.comment}</div>
                      <div className="detail-textreviewrbox">
                        <div className="detail-reviewr">{review.reviewer}</div>
                        <div className="detail-reviewrdate">{review.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="detailreview-no-reviews">리뷰가 없습니다.</div>
              )}
              {/* 페이지네이션 */}
              <div className="pagination-container">
                {Array.from({ length: totalReviewPages }, (_, i) => (
                  <div
                    key={i}
                    className={`pagination-item ${currentPage === i + 1 ? "active" : ""}`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 찜 추가 모달 */}
      <Wishmodal
        title="관심 상품 추가하기"
        open={wishModalOpen}
        content="해당 상품을 관심 상품 목록에 추가 하시겠습니까?"
        onOk={() => handlewishModalOk("wish")}
        onCancel={handlewishModalCancel}
      />

      {/* 구매 모달 */}
      <Detailbuymodal
        title="Buy"
        items={[item]} // 배열 형태로 감싸서 전달
        open={detailbuyModalOpen}
        onOk={() => handledetailbuyModalOk("buy")}
        onCancel={handledetailbuyModalCancel}
      />
    </div>
  );
};

export default Detailmain;
