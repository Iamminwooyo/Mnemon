import '../body/body.css';
import Detailmain from '../../page/detailmain/detailmain';
import Side from '../side/side';

const Detailbody = () => {
  return (
      <div className="content">
        <Side />
        <Detailmain />
      </div>
  );
}

export default Detailbody;
