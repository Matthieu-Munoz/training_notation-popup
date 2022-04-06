// == Import
import './styles.scss';

// == Composant
function Ratings() {
  return (
    <div className="review__ratings">
      <button type="button" className="review__ratings__btn">1</button>
      <button type="button" className="review__ratings__btn">2</button>
      <button type="button" className="review__ratings__btn">3</button>
      <button type="button" className="review__ratings__btn">4</button>
      <button type="button" className="review__ratings__btn">5</button>
      <button type="button" className="review__ratings__btn review__ratings__btn--comment">C</button>
    </div>
  );
}

// == Export
export default Ratings;
