import * as authAPI from 'api/auth';

const AUTH = 'AUTH';

export const REQUEST = `${AUTH}/REQUEST`;
export const FAIL = `${AUTH}/FAIL`;

export const SIGN_IN = `${AUTH}/SIGN_IN`;
export const signIn = credentials => async dispatch => {
  dispatch({ type: REQUEST });
  try {
    const logged = await authAPI.signIn(credentials);
    dispatch({ type: SIGN_IN, logged });
  } catch (error) {
    dispatch({ type: FAIL, error });
  }
};

export const SIGN_UP = `${AUTH}/SIGN_UP`;
export const signUp = user => async dispatch => {
  dispatch({ type: REQUEST });
  try {
    const logged = await authAPI.signUp(user);
    dispatch({ type: SIGN_UP, logged });
  } catch (error) {
    dispatch({ type: FAIL, error });
  }
};

export const ME = `${AUTH}/ME`;
export const me = () => async dispatch => {
  dispatch({ type: REQUEST });
  try {
    const me = await authAPI.me();
    dispatch({ type: ME, logged: me });
  } catch (error) {
    dispatch({ type: FAIL, error });
  }
}
