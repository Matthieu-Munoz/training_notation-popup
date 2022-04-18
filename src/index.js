// == Import : npm
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Review from './components/Review';

// == Import : local

import store from './store';

render(
  <Provider store={store}>
    <Review />
  </Provider>,
  document.getElementById('root'),
);
