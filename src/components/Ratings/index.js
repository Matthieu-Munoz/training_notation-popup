// == Import
import './styles.scss';
import commentIcon from './comment-icon.svg';

// == Composant
function Ratings() {
  return (
    <div className="review__ratings">
      <button type="button" className="review__ratings__btn">1</button>
      <button type="button" className="review__ratings__btn">2</button>
      <button type="button" className="review__ratings__btn">3</button>
      <button type="button" className="review__ratings__btn">4</button>
      <button type="button" className="review__ratings__btn">5</button>
      <button type="button" className="review__ratings__btn review__ratings__btn--comment"><img className="review__ratings__btn--comment__icon" src={commentIcon} alt="comment icon" /></button>
    </div>
  );
}

// == Export
export default Ratings;
