const reviews = [
    {
      id: 1,
      prductid: 1,
      name: '레오파드 커프 데님 팬츠',
      price: '49,900',
      image: '/photo/캡처.PNG', // 옷 대표 이미지
      reviews: [
        {
          id: 1,
          reviewer: '김xx',
          rating: 5,
          comment: '핏이 정말 예쁘고 마음에 들어요!',
          image: '/review/review.jpg', // 리뷰 이미지
          date: "2024-11-29",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 2,
          reviewer: '박xx',
          rating: 4,
          comment: '편안하지만 길이가 조금 긴 느낌이에요.',
          image: '/review/review.jpg', // 리뷰 이미지
          date: "2024-11-18",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 3,
          reviewer: '정xx',
          rating: 5,
          comment: '이 바지 정말 마음에 들어요! 추천합니다!',
          image: null,
          date: "2024-11-16",
          isPhotoReview: false, // 포토 리뷰
        },
      ],
      rating: 4.7,
      reviewCount: 3,
    },
    {
      id: 2,
      prductid: 6,
      name: '래티스 스트라이프 후드 집업',
      price: '43,000',
      image: '/photo/캡처5.PNG', // 옷 대표 이미지
      reviews: [
        {
          id: 1,
          reviewer: '이xx',
          rating: 5,
          comment: '디자인도 멋지고 정말 따뜻해요.',
          image: '/review-images/stylish-jacket-review1.jpg', // 리뷰 이미지
          date: "2024-12-02",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 2,
          reviewer: '최xx',
          rating: 4,
          comment: '디자인은 좋은데 사이즈가 조금 작네요.',
          image: null, // 리뷰 이미지
          date: "2024-12-01",
          isPhotoReview: false, // 포토 리뷰
        },
      ],
      rating: 5,
      reviewCount: 2,
    },
    {
      id: 3,
      prductid: 8,
      name: '포티 스티치 카라 데님 자켓',
      price: '63,000',
      image: '/photo/캡처7.PNG', // 옷 대표 이미지
      reviews: [
        {
          id: 1,
          reviewer: '윤xx',
          rating: 3,
          comment: '평범한 품질이에요.',
          image: '/review-images/casual-tshirt-review1.jpg', // 리뷰 이미지
          date: "2024-12-01",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 2,
          reviewer: '장xx',
          rating: 5,
          comment: '소재가 부드럽고 정말 편해요!',
          image: null, // 리뷰 이미지
          date: "2024-11-28",
          isPhotoReview: false, // 포토 리뷰
        },
        {
          id: 3,
          reviewer: '한xx',
          rating: 4,
          comment: '가격 대비 만족스러워요.',
          image: '/review-images/casual-tshirt-review3.jpg', // 리뷰 이미지
          date: "2024-11-27",
          isPhotoReview: true, // 포토 리뷰
        },
      ],
      rating: 4.0,
      reviewCount: 3,
    },
    {
      id: 4,
      prductid: 10,
      name: '미드 센츄리 나염 후드티',
      price: '34,000',
      image: '/photo/캡처9.PNG', // 옷 대표 이미지
      reviews: [
        {
          id: 1,
          reviewer: '신xx',
          rating: 5,
          comment: '정말 우아한 원피스예요!',
          image: '/review/review.jpg', // 리뷰 이미지
          date: "2024-12-03",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 2,
          reviewer: '조xx',
          rating: 4,
          comment: '디자인은 마음에 드는데 소재가 조금 아쉽네요.',
          image: null, // 리뷰 이미지
          date: "2024-12-01",
          isPhotoReview: false, // 포토 리뷰
        },
        {
          id: 3,
          reviewer: '정xx',
          rating: 5,
          comment: '잘 입고있습니다!',
          image: '/review/review1.jpg', // 리뷰 이미지
          date: "2024-12-05",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 4,
          reviewer: '서xx',
          rating: 5,
          comment: '생각보다 너무 이뻐요!',
          image: '/review/review2.jpg', // 리뷰 이미지
          date: "2024-12-06",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 5,
          reviewer: '윤xx',
          rating: 4.3,
          comment: '조금 얇은 거 같아서 간절기에만 입을 거 같아요!',
          image: '/review/review3.jpg', // 리뷰 이미지
          date: "2024-12-06",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 6,
          reviewer: '이xx',
          rating: 3.7,
          comment: '재질 너무 별로에요',
          image: '/review/review4.jpg', // 리뷰 이미지
          date: "2024-12-08",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 7,
          reviewer: '이xx',
          rating: 3.7,
          comment: '재질 너무 별로에요',
          image: '/review/review4.jpg', // 리뷰 이미지
          date: "2024-12-08",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 8,
          reviewer: '박xx',
          rating: 4.7,
          comment: '가격대비 너무 좋아요',
          image: null, // 리뷰 이미지
          date: "2024-11-20",
          isPhotoReview: false, // 포토 리뷰
        },
        {
          id: 9,
          reviewer: '구xx',
          rating: 5,
          comment: '날씨에 맞게 잘 산거 같아여',
          image: null, // 리뷰 이미지
          date: "2024-11-18",
          isPhotoReview: false, // 포토 리뷰
        },
        {
          id: 10,
          reviewer: '구xx',
          rating: 5,
          comment: '날씨에 맞게 잘 산거 같아여',
          image: null, // 리뷰 이미지
          date: "2024-11-18",
          isPhotoReview: false, // 포토 리뷰
        },
        {
          id: 11,
          reviewer: '구xx',
          rating: 5,
          comment: '날씨에 맞게 잘 산거 같아여',
          image: null, // 리뷰 이미지
          date: "2024-11-18",
          isPhotoReview: false, // 포토 리뷰
        },
        {
          id: 12,
          reviewer: '구xx',
          rating: 5,
          comment: '날씨에 맞게 잘 산거 같아여',
          image: null, // 리뷰 이미지
          date: "2024-11-18",
          isPhotoReview: false, // 포토 리뷰
        },
      ],
      rating: 4.5,
      reviewCount: 2,
    },
    {
      id: 5,
      prductid: 12,
      name: '쉐도우 라인 기모 스웻 팬츠',
      price: '64,000',
      image: '/photo/캡처11.PNG', // 옷 대표 이미지
      reviews: [
        {
          id: 1,
          reviewer: '안xx',
          rating: 4,
          comment: '편안하지만 세탁 후 색이 약간 바래요.',
          image: '/review-images/basic-hoodie-review1.jpg', // 리뷰 이미지
          date: "2024-12-08",
          isPhotoReview: true, // 포토 리뷰
        },
        {
          id: 2,
          reviewer: '홍xx',
          rating: 5,
          comment: '매일 입기 좋은 품질이에요!',
          image: '/review-images/basic-hoodie-review2.jpg', // 리뷰 이미지
          date: "2024-11-16",
          isPhotoReview: true, // 포토 리뷰
        },
      ],
      rating: 4.5,
      reviewCount: 2,
    },
    {
        id: 6,
        prductid: 13,
        name: '레트로 포켓 레더 크로스백',
        price: '29,000',
        image: '/photo/캡처12.PNG', // 옷 대표 이미지
        reviews: [
          {
            id: 1,
            reviewer: '정xx',
            rating: 5,
            comment: '핏이 정말 예쁘고 다리가 길어 보여요!',
            image: '/review-images/slim-jeans-review1.jpg', // 리뷰 이미지
            date: "2024-12-05",
            isPhotoReview: true, // 포토 리뷰
          },
          {
            id: 2,
            reviewer: '김xx',
            rating: 4,
            comment: '만족스럽지만 조금 타이트하네요.',
            image: '/review-images/slim-jeans-review2.jpg', // 리뷰 이미지
            date: "2024-12-02",
            isPhotoReview: true, // 포토 리뷰
          },
        ],
        rating: 4.5,
        reviewCount: 2,
      },
      {
        id: 7,
        prductid: 11,
        name: '후드 더플 코트',
        price: '48,500',
        image: '/photo/캡처10.PNG', // 옷 대표 이미지
        reviews: [
          {
            id: 1,
            reviewer: '최xx',
            rating: 4,
            comment: '가성비 최고입니다!',
            image: '/review-images/basic-tshirt-review1.jpg', // 리뷰 이미지
            date: "2024-12-04",
            isPhotoReview: true, // 포토 리뷰
          },
          {
            id: 2,
            reviewer: '박xx',
            rating: 5,
            comment: '매일 입기 편하고 좋네요.',
            image: '/review-images/basic-tshirt-review2.jpg', // 리뷰 이미지
            date: "2024-12-03",
            isPhotoReview: true, // 포토 리뷰
          },
        ],
        rating: 4.5,
        reviewCount: 2,
      },
      {
        id: 8,
        prductid: 3,
        name: '릴레이어 크롭 트러커 자켓',
        price: '53,000',
        image: '/photo/캡처2.PNG', // 옷 대표 이미지
        reviews: [
          {
            id: 1,
            reviewer: '이xx',
            rating: 5,
            comment: '스타일리시하고 정말 편해요!',
            image: '/review-images/oversized-shirt-review1.jpg', // 리뷰 이미지
            date: "2024-12-03",
            isPhotoReview: true, // 포토 리뷰
          },
          {
            id: 2,
            reviewer: '한xx',
            rating: 3,
            comment: '디자인은 좋은데 재질이 조금 아쉬워요.',
            image: '/review-images/oversized-shirt-review2.jpg', // 리뷰 이미지
            date: "2024-12-01",
            isPhotoReview: true, // 포토 리뷰
          },
        ],
        rating: 4.0,
        reviewCount: 2,
      },
      {
        id: 9,
        prductid: 7,
        name: '늑티스 퍼프 크롭 패딩',
        price: '98,500',
        image: '/photo/캡처6.PNG', // 옷 대표 이미지
        reviews: [
          {
            id: 1,
            reviewer: '홍xx',
            rating: 5,
            comment: '겨울에 딱 좋은 코트예요!',
            image: '/review-images/minimal-coat-review1.jpg', // 리뷰 이미지
            date: "2024-11-30",
            isPhotoReview: true, // 포토 리뷰
          },
          {
            id: 2,
            reviewer: '윤xx',
            rating: 4,
            comment: '디자인이 예쁘지만 조금 무거운 편이에요.',
            image: '/review-images/minimal-coat-review2.jpg', // 리뷰 이미지
            date: "2024-11-29",
            isPhotoReview: true, // 포토 리뷰
          },
        ],
        rating: 4.5,
        reviewCount: 2,
      },
      {
        id: 10,
        prductid: 4,
        name: '베이직 코어 벌룬 데님',
        price: '63,000',
        image: '/photo/캡처3.PNG', // 옷 대표 이미지
        reviews: [
          {
            id: 1,
            reviewer: '조xx',
            rating: 5,
            comment: '핏이 좋고 멋있어 보여요!',
            image: '/review-images/leather-jacket-review1.jpg', // 리뷰 이미지
            date: "2024-12-01",
            isPhotoReview: true, // 포토 리뷰
          },
          {
            id: 2,
            reviewer: '안xx',
            rating: 4,
            comment: '소재가 고급스럽지만 조금 비싸요.',
            image: '/review-images/leather-jacket-review2.jpg', // 리뷰 이미지
            date: "2024-11-28",
            isPhotoReview: true, // 포토 리뷰
          },
        ],
        rating: 4.5,
        reviewCount: 2,
      },
      {
        id: 11,
        prductid: 5,
        name: '피오르드 노르딕 니트 집업',
        price: '38,500',
        image: '/photo/캡처4.PNG', // 옷 대표 이미지
        reviews: [
          {
            id: 1,
            reviewer: '강xx',
            rating: 4,
            comment: '가볍고 따뜻해서 데일리로 좋아요.',
            image: '/review-images/casual-hoodie-review1.jpg', // 리뷰 이미지
            date: "2024-12-06",
            isPhotoReview: true, // 포토 리뷰
          },
          {
            id: 2,
            reviewer: '김xx',
            rating: 3,
            comment: '디자인은 괜찮은데 약간 얇아요.',
            image: '/review-images/casual-hoodie-review2.jpg', // 리뷰 이미지
            date: "2024-12-04",
            isPhotoReview: true, // 포토 리뷰
          },
        ],
        rating: 3.5,
        reviewCount: 2,
      },
  ];
  
  export default reviews;
  