import { SUBMIT_REVIEW, switchSucces } from '../actions';

const submitReviewMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_REVIEW: {
      const state = store.getState();
      const { isOpen, value } = state.comment;
      const rating = state.rate;
      console.log(`L'utilisateur a laissé une note de ${rating} sur 5.`);
      if (isOpen && value !== '') {
        console.log('Le commentaire suivant a aussi été soumis :');
        console.log(value);
      }
      store.dispatch(switchSucces());
      break;
    }
    default:
      next(action);
  }
};

export default submitReviewMiddleWare;
