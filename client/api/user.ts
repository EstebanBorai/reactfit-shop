import axios from 'axios';
import ICredentials from 'types/ICredentials';
import BasicAuth from 'helpers/BasicAuth';

const URI = API_URL.concat('/user');

export const signUp = async (user) => {
  return await axios.post(URI.concat('/signup/'), user);
};

export const logIn = async (credentials: ICredentials) => {
  const token = new BasicAuth(credentials);

  return await axios.post(URI.concat('/login/'), {
    headers: {
      'Authorization': token.hide()
    },
  })
};
