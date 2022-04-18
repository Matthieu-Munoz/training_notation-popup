// == Import
import './styles.scss';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineClose } from 'react-icons/ai';
import sentImg from 'src/assets/images/done-sent.svg';
import { goBack } from '../../actions';
// == Composant
function Succes() {
  const rate = useSelector((state) => state.rate);
  const dispatch = useDispatch();
  return (
    <>
      <AiOutlineClose className="review__succes__icon" onClick={() => dispatch(goBack())} />
      <img src={sentImg} alt="" className="review__succes__img" />
      <div className="review__succes__rate">Une note de {rate} sur 5 !</div>
      <h2 className="review__succes__title">Merci !</h2>
      <p className="review__succes__text">D'avoir pris le temps de donner une note. Si jamais vous voulez plus d'information, n'hésitez pas à me contacter !</p>
    </>
  );
}

// == Export
export default Succes;
