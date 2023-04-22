import axios from 'axios';

export const getAxios = async (url) => {
  return await axios.get(url).then(res => res.data);
} 