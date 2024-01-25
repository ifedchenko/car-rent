import axios from 'axios';

const baseUrl = 'https://6553c49e5449cfda0f2f265b.mockapi.io/';

export const fetchCars = async (endpoint, page, limit) => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
};
