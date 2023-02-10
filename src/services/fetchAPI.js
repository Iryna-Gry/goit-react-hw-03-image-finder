import axios from 'axios';

const fetchAPI = async params => {
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const PIXABAY_API_KEY = '32067791-add368f6651f99cb5649ce22d';
  const response = await axios.get(`?key=${PIXABAY_API_KEY}`, {
    params: params,
  });
  if (response.status !== 200 || response.data.totalHits === 0) {
    throw new Error(response);
  }
  return response;
};

export default fetchAPI;
