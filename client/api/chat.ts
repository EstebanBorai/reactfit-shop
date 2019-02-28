import axios from 'axios';

const URI = API_URL.concat('/chat');

export const getUserConversations = async userId => {
  try {
    const response = await axios.get(URI.concat(`/user/${userId}`));
    return response.data;
  } catch (error) {
    throw error;
  }
}
