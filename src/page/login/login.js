import { useNavigate, useLocation } from 'react-router-dom'; // useLocation 가져오기
import '../login/login.css';

const LoginPage = () => {
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로 확인

    const handleLogoClick = () => {
        navigate('/');
    };

    const handleLoginHoverClick = () => {
        navigate('/login');
    };

    const handleJoinHoverClick = () => {
        navigate('/join');
    };

    return (
        <div className="graybackground">
            <div className="login-background">
                {/* 왼쪽: 비디오 배경 */}
                <div className="login-video">
                    {/* <div className='background-intro'></div> */}
                    <video autoPlay loop muted className="video-frame">
                        <source src="/Login video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <img src='/로그인배경.png' alt='로그인배경' className='login-img'></img> */}
                    {/* 비디오 위 텍스트 */}
                    <div className="video-overlay">
                        <h1 className="overlay-text" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                            Mnemon
                        </h1>

                        {/* 클릭 가능한 버튼들 */}
                        <div
                            className={`hover-button login-hover ${
                                location.pathname === '/login' ? 'active' : ''
                            }`}
                            onClick={handleLoginHoverClick}
                        >
                            Login
                        </div>
                        <div
                            className={`hover-button join-hover ${
                                location.pathname === '/join' ? 'active' : ''
                            }`}
                            onClick={handleJoinHoverClick}
                        >
                            Join
                        </div>
                    </div>
                </div>

                {/* 오른쪽: 로그인 폼 */}
                <div className="login-form-container">
                    <div className="login-header">
                        <button className='minimize'>-</button>
                        <button className='close' style={{marginRight:'10px'}}>x</button>
                    </div>
                    <h1 className="login-title">Login</h1>
                    <form className="login-form">
                        <input type="text" placeholder="ID" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <button type="submit" className="login-button">로그인</button>
                    </form>

                    <div className="login-links">
                        <a href="/find-id" className="link">아이디 찾기</a>
                        <a href="/find-password" className="link">비밀번호 찾기</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
