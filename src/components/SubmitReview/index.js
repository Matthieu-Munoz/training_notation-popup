// == Import
import './styles.scss';
// Composant
import { useSelector, useDispatch } from 'react-redux';
import { AiFillStar } from 'react-icons/ai';
import ReactTooltip from 'react-tooltip';
import classNames from 'classnames';
import Ratings from '../Ratings';
import Comment from '../Comment';

import { submitReview, toggleError } from '../../actions';

// == Composant
function SubmitReview() {
  const commentIsOpen = useSelector((state) => state.comment.isOpen);
  const rate = useSelector((state) => state.rate);
  const errorState = useSelector((state) => state.error);
  const buttonClass = classNames('review__submit', { 'review__submit--error': (errorState) });
  const toolTip = classNames('', { 'Merci de séléctionner une note': (errorState) });
  const dispatch = useDispatch();

  function handleSubmit() {
    if (rate !== 0) {
      return dispatch(submitReview());
    }
    return dispatch(toggleError(true));
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
      <ReactTooltip place="right" effect="solid" type="error" />
      <button className={buttonClass} data-tip={toolTip} type="button" onClick={() => handleSubmit()}>Envoyer</button>
    </>
  );
}

// == Export
export default SubmitReview;
