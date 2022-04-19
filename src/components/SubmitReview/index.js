// == Import
import './styles.scss';
// Composant
import { useSelector, useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import Ratings from '../Ratings';
import Comment from '../Comment';
import { submitReview } from '../../actions';

// == Composant
function SubmitReview() {
  const commentIsOpen = useSelector((state) => state.comment.isOpen);
  const rate = useSelector((state) => state.rate);
  const dispatch = useDispatch();
  function handleSubmit() {
    if (rate !== 0) {
      dispatch(submitReview());
    }
  }
  return (
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
  );
}

// == Export
export default SubmitReview;
