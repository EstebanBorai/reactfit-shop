import { LOG_IN } from 'actions/user';

const reducer = (state = {
  logged: null
}, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, logged: action.user  };
    default:
      return state;
  }
}

export default reducer;
