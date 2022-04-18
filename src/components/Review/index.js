// == Import
import './styles.scss';
// Composant
import { useSelector, useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import Ratings from '../Ratings';
import Comment from '../Comment';
import { submitReview } from '../../actions';

// SVG
import Succes from '../Succes';

// == Composant
function Review() {
  const commentIsOpen = useSelector((state) => state.comment.isOpen);
  const rate = useSelector((state) => state.rate);
  const rewiewSent = useSelector((state) => state.rewiewSent);
  const dispatch = useDispatch();
  function handleSubmit() {
    if (rate !== 0) {
      dispatch(submitReview());
    }
  }
  return (
    <div className="review">
      <div className="review--content">
        {rewiewSent
          ? <Succes />
          : (
            <>
              <header className="review__header">
                <AiFillStar className="review__header__icon" />
              </header>
              <div className="review__content">
                <h2 className="review__content__title">Qu'en avez-vous pensé ?</h2>
                <p className="review__content__text">Vous pouvez donner votre avis sur ce que vous venez de voir. Tous les commentaires comptent pour m'aider à m'améliorer !</p>
              </div>
              <Ratings />
              {commentIsOpen && <Comment />}
              <button className="review__submit" type="button" onClick={() => handleSubmit()}>Envoyer</button>
            </>
          )}
      </div>
    </div>
  );
}

// == Export
export default Review;
