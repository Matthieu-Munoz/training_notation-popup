// == Import
import './styles.scss';
// Composant
import Ratings from '../Ratings';
import Comment from '../Comment';
// SVG
import starIcon from './star-icon.svg';

// == Composant
function Review() {
  return (
    <div className="review">
      <div className="review--content">
        <header className="review__header">
          <img className="review__header__icon" src={starIcon} alt="star icon" />
        </header>
        <div className="review__content">
          <h2 className="review__content__title">Qu'en avez-vous pensé ?</h2>
          <p className="review__content__text">Vous pouvez donner votre avis sur ce que vous venez de voir. Tous les commentaires comptent pour m'aider à m'améliorer !</p>
        </div>
        <Ratings />
      </div>
      <button className="review__submit" type="submit">Envoyer</button>
    </div>
  );
}

// == Export
export default Review;
