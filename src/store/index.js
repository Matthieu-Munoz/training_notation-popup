/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';

import reducer from 'src/reducers';
import debugMiddleWare from 'src/middlewares/debug';
import submitReviewMiddleWare from 'src/middlewares/submitReview';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(debugMiddleWare, submitReviewMiddleWare)),
);

export default store;
