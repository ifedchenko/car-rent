import axios from 'axios';

const baseUrl = 'https://65b39409770d43aba47a096e.mockapi.io/';

const fetchPaginatedCars = async (endpoint, page, limit) => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
};

const fetchCars = async endpoint => {
  try {
    const response = await axios.get(`${baseUrl}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching data: ${error}`);
    throw error;
  }
};

export { fetchPaginatedCars, fetchCars };
