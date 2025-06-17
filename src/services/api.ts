import axios from 'axios';
import { APIQuery } from '../hooks/useMovies';

const API_URL = 'https://93794xw5v6.execute-api.us-east-1.amazonaws.com/dev/cinemas/search'; // Replace with the actual API endpoint

export const fetchMovies = async (params: APIQuery) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        language: params.language,
        date: params.date,
        query: params.query
      }
    });
    return response.data; // Assuming the API returns the movie data in the response body
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error for handling in the calling function
  }
};