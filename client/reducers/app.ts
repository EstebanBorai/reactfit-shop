import { SIGN_IN, SIGN_UP, ME } from 'actions/auth';

const reducer = (state = {
  logged: null,
  token: ''
}, action) => {
  switch(action.type) {
    case SIGN_IN:
    case SIGN_UP:
    case ME:
      return { ...state, logged: action.logged };
    default:
      return state;
  }
}

export default reducer;
