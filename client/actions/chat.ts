import * as chatAPI from 'api/chat';

const CHAT = 'CHAT';

export const REQUEST = `${CHAT}/REQUEST`;
export const FAIL = `${CHAT}/FAIL`;

export const GET_USER_CONVERSATIONS = `${CHAT}/GET_USER_CONVERSATIONS`;
export const getUserConversations = userId => async dispatch => {
  dispatch({ type: REQUEST });
  try {
    const conversations = await chatAPI.getUserConversations(userId);
    dispatch({ type: GET_USER_CONVERSATIONS, conversations });
  } catch (error) {
    dispatch({ type: FAIL, error });
  }
};
