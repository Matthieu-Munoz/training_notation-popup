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
      <header>
        <img src={starIcon} alt="star icon" />
      </header>
      <div>
        <h2>Qu'en avez-vous pensé ?</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ea quis enim rem laudantium quia quos maiores reprehenderit eius commodi?</p>
      </div>
      <Ratings />
      <button type="submit">Envoyer</button>
    </div>
  );
}

// == Export
export default Review;
