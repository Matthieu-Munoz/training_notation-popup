// == Import
import { useSelector } from 'react-redux';
// Composant
import Succes from '../Succes';
import SubmitReview from '../SubmitReview';
// Style
import './styles.scss';

// == Composant
function Review() {
  const rewiewSent = useSelector((state) => state.rewiewSent);
  return (
    <div className="review">
      <div className="review--content">
        {rewiewSent
          ? <Succes />
          : <SubmitReview />}
      </div>
    </div>
  );
}

// == Export
export default Review;
