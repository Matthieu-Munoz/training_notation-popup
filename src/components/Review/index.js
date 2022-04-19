// Style
import './styles.scss';

// == Composant
function Review() {
  return (
    <div className="review">
      <div className="review--content">
        <header className="review__header">
          <div className="review__header__icon" />
        </header>
        <div className="review__content">
          <h2 className="review__content__title">Qu'en avez-vous pensé ?</h2>
          <p className="review__content__text">Vous pouvez donner votre avis sur ce que vous venez de voir. Tous
            les commentaires comptent pour m'aider à m'améliorer !
          </p>
        </div>
        <div className="review__ratings">
          <button type="button" className="review__ratings__btn">1</button>
          <button type="button" className="review__ratings__btn">2</button>
          <button type="button" className="review__ratings__btn review__ratings__btn--selected">3</button>
          <button type="button" className="review__ratings__btn">4</button>
          <button type="button" className="review__ratings__btn">5</button>
          <button type="button" className="review__ratings__btn review__ratings__btn--comment">C</button>
        </div>

        <button className="review__submit" type="button">Envoyer</button>
      </div>
    </div>
  );
}

// == Export
export default Review;
