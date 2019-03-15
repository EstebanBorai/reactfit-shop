import { SIGN_UP } from 'actions/user';

const reducer = (users = null, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...users,  }
  }
}
