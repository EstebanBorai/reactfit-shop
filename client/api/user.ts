import axios from 'axios';
import ICredentials from 'types/ICredentials';

const URI = API_URL.concat('/user');

export const signUp = async (user) => {
  return await fetch(URI.concat('/signup/'), {
    method: 'POST',
    body: user
  });
};

export const logIn = async (credentials: ICredentials) => {
  return await fetch(URI.concat('/login/'), {
    method: 'POST',
    headers: {
      'Authorization': btoa(`Basic ${credentials.username}:${credentials.password}`)
    }
  }).then(response => response.json());
};
