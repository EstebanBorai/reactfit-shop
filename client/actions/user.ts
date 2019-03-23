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

export const LOG_IN = `${USER}/LOG_IN`;
export const logIn = credentials => async dispatch => {
  dispatch({ type: REQUEST });
  try {
    const user = await api.logIn(credentials);
    dispatch({ type: LOG_IN, user });
  } catch(error) {
    dispatch({ type: FAIL, error });
  }
}
