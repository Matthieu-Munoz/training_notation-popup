import {
  SELECT_RATING,
  TOGGLE_COMMENT,
  INPUT_COMMENT,
  SWITCH_SUCCES,
  GO_BACK,
} from '../actions';

const initialState = {
  rewiewSent: false,
  rate: 0,
  comment: {
    isOpen: false,
    value: '',
  },
};

function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SELECT_RATING:
      return {
        ...state,
        rate: action.value,
      };
    case TOGGLE_COMMENT:
      return {
        ...state,
        comment: {
          ...state.comment,
          isOpen: !state.comment.isOpen,
        },
      };
    case INPUT_COMMENT:
      return {
        ...state,
        comment: {
          ...state.comment,
          value: action.value,
        },
      };
    case SWITCH_SUCCES:
      return {
        ...state,
        rewiewSent: true,
      };
    case GO_BACK:
      return {
        ...state,
        rewiewSent: false,
        rate: 0,
        comment: {
          ...state.comment,
          isOpen: false,
          value: '',
        },
      };
    default:
      return state;
  }
}

export default reducer;
