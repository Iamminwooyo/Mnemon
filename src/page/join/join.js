import { useNavigate, useLocation } from 'react-router-dom';
import '../join/join.css';
import { Select } from 'antd';
import { data_location } from '../../data/location/location';

const { Option, OptGroup } = Select;

const groupLocationsByRegion = (locations) => {
    const grouped = {};

    locations.forEach((location) => {
        const [region] = location.split(' ');
        if (!grouped[region]) {
            grouped[region] = [];
        }
        grouped[region].push(location);
    });

    return grouped;
};

const JoinPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const groupedLocations = groupLocationsByRegion(data_location);

    const handleAddressChange = (value) => {
        console.log(`Selected Address: ${value}`);
    };

    return (
        <div className="graybackground">
            <div className="join-background">
                <div className="join-video">
                    <video autoPlay loop muted className="video-frame">
                        <source src="/Login video.mp4" type="video/mp4" />
                    </video>
                    <div className="video-overlay">
                        <h1 className="overlay-text" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                            Mnemon
                        </h1>
                        <div
                            className={`hover-button login-hover ${
                                location.pathname === '/login' ? 'active' : ''
                            }`}
                            onClick={() => navigate('/login')}
                        >
                            Login
                        </div>
                        <div
                            className={`hover-button join-hover ${
                                location.pathname === '/join' ? 'active' : ''
                            }`}
                            onClick={() => navigate('/join')}
                        >
                            Join
                        </div>
                    </div>
                </div>
                <div className="join-form-container">
                    <div className="join-header">
                            <button className='minimize'>-</button>
                            <button className='close' style={{ marginRight: '10px' }}>x</button>
                    </div>
                    <h1 className="join-title">Join</h1>
                    <form className="join-form">
                        <input type="text" placeholder="ID" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <input type="password" placeholder="Confirm Password" className="input-field" />
                        <div className="input-row">
                            <input type="text" placeholder="Name" className="input-field half" />
                            <input type="text" placeholder="Phone Number" className="input-field half" />
                        </div>
                        <input type="email" placeholder="Email" className="input-field" />
                        <Select
                            showSearch
                            placeholder="Select Address"
                            optionFilterProp="children"
                            onChange={handleAddressChange}
                        >
                            {Object.keys(groupedLocations).map((region) => (
                                <OptGroup key={region} label={region}>
                                    {groupedLocations[region].map((location, index) => (
                                        <Option key={index} value={location}>
                                            {location}
                                        </Option>
                                    ))}
                                </OptGroup>
                            ))}
                        </Select>
                        <input type="text" placeholder="Detailed Address" className="input-field" />
                        <button type="submit" className="join-button">회원가입</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default JoinPage;
