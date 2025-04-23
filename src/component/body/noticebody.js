import '../body/body.css';
import Noticemain from '../../page/notice/noticemain';
import Side from '../side/side';

const Noticebody = () => {
  return (
      <div className="content">
        <Side />
        <Noticemain />
      </div>
  );
}

export default Noticebody;
