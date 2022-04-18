// == Import
import { useSelector, useDispatch } from 'react-redux';
import TextareaAutosize from 'react-autosize-textarea';
import './styles.scss';
import { inputComment } from '../../actions';

// == Composant
function Comment() {
  const commentValue = useSelector((state) => state.comment.value);
  const dispatch = useDispatch();

  return (
    <div className="review__comment">
      <TextareaAutosize
        placeholder="Ecrire un message ici..."
        className="review__comment__input"
        style={{ minHeight: 50, maxHeight: 100 }}
        value={commentValue}
        onChange={(evt) => dispatch(inputComment(evt.currentTarget.value))}
      />
    </div>
  );
}

// == Export
export default Comment;
