// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { BiCommentAdd } from 'react-icons/bi';
import { selectRating, toggleComment } from '../../actions';
// == Composant
function Ratings() {
  const rates = [1, 2, 3, 4, 5];
  const selectedRate = useSelector((state) => state.rate);
  const commentIsOpen = useSelector((state) => state.comment.isOpen);
  const commentClass = classNames('review__ratings__btn', 'review__ratings__btn--comment', { 'review__ratings__btn--selected': (commentIsOpen) });
  const dispatch = useDispatch();

  return (
    <div className="review__ratings">
      {
        rates.map((rate) => {
          const rateClass = classNames('review__ratings__btn', { 'review__ratings__btn--selected': (selectedRate === rate) });
          return <button type="button" onClick={() => dispatch(selectRating(rate))} key={`rate=${rate}`} className={rateClass}>{rate}</button>;
        })
      }
      <button type="button" onClick={() => dispatch(toggleComment())} className={commentClass}><BiCommentAdd /></button>
    </div>
  );
}

// == Export
export default Ratings;
