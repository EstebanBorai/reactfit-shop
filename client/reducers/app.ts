import { SIGN_IN, SIGN_UP, ME, REQUEST as AUTH_REQUEST } from 'actions/auth';

const reducer = (state = {
  logged: null,
  token: '',
  loading: false
}, action) => {
  switch(action.type) {
    case AUTH_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN:
    case SIGN_UP:
    case ME:
      return { ...state, logged: action.logged, loading: false };
    default:
      return state;
  }
}

export default reducer;
