export const SELECT_RATING = 'SELECT_RATING';
export const selectRating = (value) => ({
  type: SELECT_RATING,
  value,
});

export const TOGGLE_COMMENT = 'TOGGLE_COMMENT';
export const toggleComment = () => ({
  type: TOGGLE_COMMENT,
});

export const INPUT_COMMENT = 'INPUT_COMMENT';
export const inputComment = (value) => ({
  type: INPUT_COMMENT,
  value,
});

export const SUBMIT_REVIEW = 'SUBMIT_REVIEW';
export const submitReview = () => ({
  type: SUBMIT_REVIEW,
});

export const SWITCH_SUCCES = 'SWITCH_SUCCES';
export const switchSucces = () => ({
  type: SWITCH_SUCCES,
});

export const GO_BACK = 'GO_BACK';
export const goBack = () => ({
  type: GO_BACK,
});
