const items = [
  {
    id: 1,
    src: '/photo/캡처.PNG',
    name: '레오파드 커프 데님 팬츠',
    alt: 'Item 1',
    clothestype:'하의',
    price: '49,900',
    color: ['#6FA3DE'],
    update: '2024/08/12', // 최신 업데이트 날짜
    likes: 120, // 좋아요 수
    size: {
      type: '하의',
      dimensions: [
        { size: 'S', 총기장: '100cm', 허리: '72cm', 밑위: '30cm', 허벅지: '58cm', 밑단: '18cm' },
        { size: 'M', 총기장: '102cm', 허리: '76cm', 밑위: '31cm', 허벅지: '60cm', 밑단: '19cm' },
        { size: 'L', 총기장: '104cm', 허리: '80cm', 밑위: '32cm', 허벅지: '62cm', 밑단: '20cm' },
      ]
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '가을'
    },
    introduce: 'This is a stylish and comfortable top for summer.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ]
  },
  {
    id: 2,
    src: '/photo/캡처1.PNG',
    name: '필립 리니어 더블 울 코트',
    alt: 'Item 2',
    clothestype:'아우터',
    price: '139,000',
    color: ['#19181E'],
    update: '2024/08/15',
    likes: 200,
    size: {
      type: '아우터',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ]
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '가을'
    },
    introduce: 'This is a stylish and comfortable top for summer.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ]
  },
  {
    id: 3,
    src: '/photo/캡처2.PNG',
    name: '릴레이어 크롭 트러커 자켓',
    alt: 'Item 3',
    clothestype:'아우터',
    price: '53,000',
    color: ['#70655B'],
    update: '2024/08/10',
    likes: 180,
    size: {
      type: '아우터',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ]
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '가을'
    },
    introduce: 'This is a stylish and comfortable top for summer.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ]
  },
  {
    id: 4,
    src: '/photo/캡처3.PNG',
    name: '베이직 코어 벌룬 데님',
    alt: 'Item 4',
    clothestype:'하의',
    price: '63,000',
    color: ['#323339'],
    update: '2024/08/09',
    likes: 90,
    size: {
      type: '하의',
      dimensions: [
        { size: 'S', 총기장: '100cm', 허리: '72cm', 밑위: '30cm', 허벅지: '58cm', 밑단: '18cm' },
        { size: 'M', 총기장: '102cm', 허리: '76cm', 밑위: '31cm', 허벅지: '60cm', 밑단: '19cm' },
        { size: 'L', 총기장: '104cm', 허리: '80cm', 밑위: '32cm', 허벅지: '62cm', 밑단: '20cm' },
      ],
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '가을',
    },
    introduce: 'This is a stylish and comfortable top for summer.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
    id: 5,
    src: '/photo/캡처4.PNG',
    name: '피오르드 노르딕 니트 집업',
    alt: 'Item 5',
    clothestype:'아우터',
    price: '38,500',
    color: ['#8696B0'],
    update: '2024/08/14',
    likes: 230,
    size: {
      type: '아우터',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ],
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '가을',
    },
    introduce: 'This is a stylish and comfortable top for summer.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
    id: 6,
    src: '/photo/캡처5.PNG',
    name: '래티스 스트라이프 후드 집업',
    alt: 'Item 6',
    clothestype:'아우터',
    price: '43,000',
    color: ['#466E9F'],
    update: '2024/08/08',
    likes: 85,
    size: {
      type: '아우터',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ],
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '봄',
    },
    introduce: 'Light and breathable fabric for spring.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
    id: 7,
    src: '/photo/캡처6.PNG',
    name: '늑티스 퍼프 크롭 패딩',
    alt: 'Item 7',
    clothestype:'아우터',
    price: '98,500',
    color: ['#5B3737'],
    update: '2024/08/11',
    likes: 150,
    size: {
      type: '아우터',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ],
    },
    fabric: 'Polyester 50%, Cotton 50%',
    materialDetails: {
      신축성: '약간',
      비침: '없음',
      두께감: '중간',
      계절감: '가을',
    },
    introduce: 'Perfect blend of comfort and durability.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
    id: 8,
    src: '/photo/캡처7.PNG',
    name: '포티 스티치 카라 데님 자켓',
    alt: 'Item 8',
    clothestype:'아우터',
    price: '63,000',
    color: ['#141F2D'],
    update: '2024/08/13',
    likes: 170,
    size: {
      type: '아우터',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ],
    },
    fabric: 'Wool 70%, Nylon 30%',
    materialDetails: {
      신축성: '없음',
      비침: '없음',
      두께감: '두꺼움',
      계절감: '겨울',
    },
    introduce: 'Warm and cozy fabric for winter days.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
    id: 9,
    src: '/photo/캡처8.PNG',
    name: '아스틱 페인팅 맨투맨',
    alt: 'Item 9',
    clothestype:'상의',
    price: '28,000',
    color: ['#EBE9E6'],
    update: '2024/08/07',
    likes: 300,
    size: {
      type: '상의',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ],
    },
    fabric: 'Linen 100%',
    materialDetails: {
      신축성: '없음',
      비침: '약간 있음',
      두께감: '얇음',
      계절감: '여름',
    },
    introduce: 'Lightweight and breathable for hot weather.',
    children: [],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
    id: 10,
    src: '/photo/캡처9.PNG',
    name: '미드 센츄리 나염 후드티',
    alt: 'Item 10',
    clothestype:'상의',
    price: '34,000',
    color: ['#F0EEED', '#75725A'],
    update: '2024/08/09',
    likes: 120,
    size: {
      type: '상의',
      dimensions: [
        { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
        { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
        { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
        { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
        { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
        { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
      ],
    },
    fabric: 'Cotton 100%',
    materialDetails: {
      신축성: '보통',
      비침: '없음',
      두께감: '얇음',
      계절감: '봄',
    },
    introduce: `툭 떨어지는 오버핏한 실루엣과 프린팅이 매력적인 후드티

                전면부 중앙에 빈티지한 나염 프린팅이
                깔끔하게 포인트를 주는 유니크한 디자인

                기모 안감없는 두툼한 코튼 원단으로
                무너지지 않는 오버핏 실루엣 연출

                루즈한 어깨선, 넉넉한 후드와 짱짱한 시보리 등
                디테일에도 충실한 제품`,
    children: [

      { id: 10.1, src: '/detailphoto/캡처.jpg', alt: 'Detail 10-1'},
      { id: 10.2, src: '/detailphoto/캡처1.jpg', alt: 'Detail 10-2'},
      { id: 10.3, src: '/detailphoto/캡처2.jpg', alt: 'Detail 10-3'},
      { id: 10.4, src: '/detailphoto/캡처3.jpg', alt: 'Detail 10-4'},
      { id: 10.5, src: '/detailphoto/캡처4.jpg', alt: 'Detail 10-5'},
      { id: 10.6, src: '/detailphoto/캡처5.jpg', alt: 'Detail 10-6'},
      { id: 10.7, src: '/detailphoto/캡처6.jpg', alt: 'Detail 10-7'},
    ],
    sub: [
      { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
      { id: 2, src: '/subphoto/상의.png', alt: '상의' },
      { id: 3, src: '/subphoto/하의.png', alt: '하의' },
      { id: 4, src: '/subphoto/전체.png', alt: '전체' },
    ],
  },
  {
  id: 11,
  src: '/photo/캡처10.PNG',
  name: '후드 더플 코트',
  alt: 'Item 11',
  clothestype:'아우터',
  price: '48,500',
  color: ['#423C24'],
  update: '2024/08/16',
  likes: 250,
  size: {
    type: '아우터',
    dimensions: [
      { size: 'S', 총기장: '65cm', 어깨: '40cm', 가슴: '46cm', 소매: '58cm' },
      { size: 'M', 총기장: '67cm', 어깨: '42cm', 가슴: '48cm', 소매: '60cm' },
      { size: 'L', 총기장: '69cm', 어깨: '44cm', 가슴: '50cm', 소매: '62cm' },
      { size: 'XL', 총기장: '71cm', 어깨: '46cm', 가슴: '52cm', 소매: '64cm' },
      { size: '2XL', 총기장: '73cm', 어깨: '48cm', 가슴: '54cm', 소매: '66cm' },
      { size: '3XL', 총기장: '75cm', 어깨: '50cm', 가슴: '56cm', 소매: '68cm' },
    ]
  },
  fabric: 'Polyester 80%, Cotton 20%',
  materialDetails: {
    신축성: '약간',
    비침: '없음',
    두께감: '중간',
    계절감: '봄'
  },
  introduce: 'Comfortable and durable pants for daily wear.',
  children: [],
  sub: [
    { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
    { id: 2, src: '/subphoto/하의.png', alt: '하의' },
  ]
},
{
  id: 12,
  src: '/photo/캡처11.PNG',
  name: '쉐도우 라인 기모 스웻 팬츠',
  alt: 'Item 12',
  clothestype:'하의',
  price: '64,000',
  color: ['#8F919D'],
  update: '2024/08/18',
  likes: 300,
  size: {
    type: '하의',
    dimensions: [
      { size: 'S', 총기장: '100cm', 허리: '72cm', 밑위: '30cm', 허벅지: '58cm', 밑단: '18cm' },
      { size: 'M', 총기장: '102cm', 허리: '76cm', 밑위: '31cm', 허벅지: '60cm', 밑단: '19cm' },
      { size: 'L', 총기장: '104cm', 허리: '80cm', 밑위: '32cm', 허벅지: '62cm', 밑단: '20cm' },
    ]
  },
  fabric: 'Wool 50%, Polyester 50%',
  materialDetails: {
    신축성: '없음',
    비침: '없음',
    두께감: '두꺼움',
    계절감: '겨울'
  },
  introduce: 'Stay warm and stylish with this high-quality outerwear.',
  children: [],
  sub: [
    { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
    { id: 2, src: '/subphoto/아우터.png', alt: '아우터' },
  ]
},
{
  id: 13,
  src: '/photo/캡처12.PNG',
  name: '레트로 포켓 레더 크로스백',
  alt: 'Item 13',
  clothestype:'악세사리',
  price: '29,000',
  color: ['#C27539'],
  update: '2024/08/19',
  likes: 120,
  size: {
    type: '악세사리',
    dimensions: [
      { size: 'S', 총기장: '100cm', 허리: '72cm', 밑위: '30cm', 허벅지: '58cm', 밑단: '18cm' },
      { size: 'M', 총기장: '102cm', 허리: '76cm', 밑위: '31cm', 허벅지: '60cm', 밑단: '19cm' },
      { size: 'L', 총기장: '104cm', 허리: '80cm', 밑위: '32cm', 허벅지: '62cm', 밑단: '20cm' },
    ]
  },
  fabric: 'Plastic, Metal',
  materialDetails: {
    신축성: '없음',
    비침: '없음',
    두께감: '얇음',
    계절감: '사계절'
  },
  introduce: 'A trendy accessory to complement any outfit.',
  children: [],
  sub: [
    { id: 1, src: '/subphoto/배경만.png', alt: '배경' },
    { id: 2, src: '/subphoto/악세사리.png', alt: '악세사리' },
  ]
}
];

export default items;
