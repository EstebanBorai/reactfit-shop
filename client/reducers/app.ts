import { SIGN_IN, SIGN_UP } from 'actions/auth';

const reducer = (state = {
  logged: null,
  token: ''
}, action) => {
  switch(action.type) {
    case SIGN_IN:
    case SIGN_UP:
      return { ...state, logged: action.logged };
    default:
      return state;
  }
}

export default reducer;
