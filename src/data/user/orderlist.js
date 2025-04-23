const orderlist = [
    {
      orderId: "A001", // 주문번호
      orderDate: "2024.12.01", // yyyy.mm.dd 형식
      status: "결제대기", // 주문 상태
      products: [ // 상품 배열
        {
          productName: "래티스 스트라이프 후드 집업", // 상품 이름
          image: "/photo/캡처5.PNG", // 상품 이미지
          quantity: 1, // 수량
          size: 'M',
          price: 43000, // 금액
          color:'#466E9F'
        },
        {
          productName: "늑티스 퍼프 크롭 패딩",
          image: "/photo/캡처6.PNG",
          quantity: 2,
          size: 'S',
          price: 98500,
          color:'#5B3737'
        },
      ],
    },
    {
      orderId: "A002",
      orderDate: "2024.12.05",
      status: "배송준비",
      products: [
        {
          productName: "베이직 코어 벌룬 데님",
          image: "/photo/캡처3.PNG",
          quantity: 1,
          size: 'S',
          price: 63000,
          color:'#323339'
        },
        {
          productName: "레오파드 커프 데님 팬츠",
          image: "/photo/캡처.PNG",
          quantity: 1,
          size: 'M',
          price: 49900,
          color:'#6FA3DE'
        },
      ],
    },
    {
      orderId: "A003",
      orderDate: "2024.10.30",
      status: "배송중",
      products: [
        {
          productName: "Summer Shirt",
          image: "/photo/캡처12.PNG",
          quantity: 3,
          size: 'F',
          price: 9900,
          color:'#000000'
        },
      ],
    },
    {
      orderId: "A004",
      orderDate: "2024.09.28",
      status: "배송완료",
      products: [
        {
          productName: "Elegant Skirt",
          image: "/photo/캡처10.PNG",
          quantity: 1,
          size: 'M',
          price: 49900,
          color:'#000000'
        },
      ],
    },
    {
      orderId: "A005",
      orderDate: "2024.08.28",
      status: "배송완료",
      products: [
        {
          productName: "Elegant Skirt",
          image: "/photo/캡처10.PNG",
          quantity: 1,
          size: 'L',
          price: 49900,
          color:'#000000'
        },
      ],
    },
    {
      orderId: "A006",
      orderDate: "2024.03.28",
      status: "배송완료",
      products: [
        {
          productName: "Elegant Skirt",
          image: "/photo/캡처10.PNG",
          quantity: 1,
          size: 'M',
          price: 49900,
          color:'#000000'
        },
      ],
    },
    {
      orderId: "A007",
      orderDate: "2023.12.28",
      status: "배송완료",
      products: [
        {
          productName: "Elegant Skirt",
          image: "/photo/캡처10.PNG",
          quantity: 1,
          size: 'S',
          price: 49900,
          color:'#000000'
        },
      ],
    },
  ];
  export default orderlist;
  