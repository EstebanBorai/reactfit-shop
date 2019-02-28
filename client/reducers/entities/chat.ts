import { GET_USER_CONVERSATIONS } from 'actions/chat';

const reducer = (state = {
  conversations: null
}, action) => {
  switch(action.type) {
    case GET_USER_CONVERSATIONS:
      return { ...state, conversations: action.conversations };
    default:
      return state;
  }
}

export default reducer;
