// == Import
import { useSelector } from 'react-redux';
// Composant
import Succes from '../Succes';
import Review from '../Review';
// Style
import './styles.scss';

// == Composant
function App() {
  const rewiewSent = useSelector((state) => state.rewiewSent);
  return (
    <div className="review">
      <div className="review--content">
        {rewiewSent
          ? <Succes />
          : <Review />}
      </div>
    </div>
  );
}

// == Export
export default App;
