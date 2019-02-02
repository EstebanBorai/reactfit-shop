import { FAIL, REQUEST, SIGN_IN, SIGN_UP } from 'actions/auth';

const reducer = (state = {
  loading: false,
  error: null
}, action) => {
  switch(action.type) {
    case REQUEST:
      return { ...state, loading: true, error: null };
    case FAIL:
      return { ...state, loading: false, error: action.error };
    case SIGN_IN:
    case SIGN_UP:
      return { ...state, loading: false, error: null };
    default:
      return state;
  }
}

export default reducer;
