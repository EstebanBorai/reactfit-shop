import axios from 'axios';

const URI = API_URL.concat('user');

export const signUp = async (user) => {
  return await axios.post(URI, user);
};
