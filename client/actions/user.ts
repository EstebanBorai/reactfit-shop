import * as api from 'api/user';

const USER = 'USER';

export const REQUEST = `${USER}/REQUEST`;
export const FAIL = `${USER}/FAIL`;

export const SIGN_UP = `${USER}/SIGN_UP`;
export const signUp = user => async dispatch => {
  dispatch({ type: REQUEST });
  try {
    const newUser = await api.signUp(user);
    dispatch({ type: SIGN_UP, user: newUser });
  } catch(error) {
    dispatch({ type: FAIL, error });
  }
};
