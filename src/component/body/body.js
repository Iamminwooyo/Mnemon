import '../body/body.css';
import Main from '../../page/main/main';
import Side from '../side/side';

const Body = () => {
  return (
      <div className="content">
        <Side />
        <Main />
      </div>
  );
}

export default Body;
