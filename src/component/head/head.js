import '../head/head.css';
import { useNavigate } from 'react-router-dom'; // React Router의 useNavigate 훅 가져오기

const Head = () => {
  const navigate = useNavigate(); // 페이지 이동을 위한 useNavigate 훅 초기화

  return (
    <div style={{display:'flex', marginLeft:'5.5%', marginRight:'5.5%'}}>
      <img src='/logo33.png' alt='로고' className='head-img'  onClick={() => navigate('/')}/>
      <div className='head-layout'>
        <div className="head">
          <div className="logo" onClick={() => navigate('/')}>
            Mnemon
          </div>
          <div className="login">
            {/* 로그인 버튼에 onClick 이벤트 추가 */}
            <div
              style={{ marginRight: '30px', cursor: 'pointer' }}
              onClick={() => navigate('/login')} // /login 페이지로 이동
            >
              Login
            </div>
            <div
              style={{ paddingLeft: '10px', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => navigate('/join')} // 회원가입 페이지로 이동
            >
              Join
            </div>
          </div>
        </div>

        {/* 네비게이터 섹션 */}
        <div className="top-section">
          <div
            style={{ marginLeft: '100px', cursor: 'pointer' }}
            onClick={() => navigate('/')} // /all 페이지로 이동
          >
            All
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/outer')} // /outer 페이지로 이동
          >
            Outer
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/top')} // /top 페이지로 이동
          >
            Top
          </div>
          <div
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/bottom')} // /bottom 페이지로 이동
          >
            Bottom
          </div>
          <div
            style={{ marginRight: '100px', cursor: 'pointer' }}
            onClick={() => navigate('/acc')} // /acc 페이지로 이동
          >
            Acc
          </div>
        </div>

      </div>
    </div>
  );
};

export default Head;
