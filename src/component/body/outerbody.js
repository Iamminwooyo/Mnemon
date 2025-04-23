import '../body/body.css';
import Outermain from '../../page/outer/outermain';
import Side from '../side/side';

const Outerbody = () => {
  return (
      <div className="content">
        <Side />
        <Outermain />
      </div>
  );
}

export default Outerbody;
