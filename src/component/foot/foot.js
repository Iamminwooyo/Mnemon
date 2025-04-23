import '../foot/foot.css';

const Foot = () => {
  return (
    <div className='foot2'>
      <div style={{flex:'1', marginLeft:'80px'}}>
        회사정보
        <br />
        (주) Mnemon
        <br />
        사업자등록번호 : 123-45-67890 | 대표 : 조민우
        <br />
        주소 : 경기도 용인시 처인구 용인대학로 134
        <br />
        이메일 : zomin9546@gamil.com
      </div>

      <div className='vertical'/>

      <div className='footer3'>
        고객센터
        <br />
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <div style={{ display: 'flex', alignItems: 'center'}}>
            <img
              src='/phone.png'
              alt='전화'
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            <span>010-2364-9546</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src='/kakao.png'
              alt='카카오톡'
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            <span>zomin0731</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src='/insta.png'
              alt='인스타그램'
              style={{ width: '20px', height: '20px', marginRight: '5px' }}
            />
            <span>m_iiin_u</span>
          </div>
        </div>
        Monday - Friday: AM 11:00 ~ PM 17:00
        <br />
        Saturday - Sunday / (Holiday): OFF
        <br />
        <br />
        국민은행 012345 - 01 - 987654 조민우(므네몬)
        <br />
      </div>
    </div>
  );
};

export default Foot;
