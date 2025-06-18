import axios from 'axios';
import { APIQuery } from '../hooks/useMovies';

const API_URL = 'https://93794xw5v6.execute-api.us-east-1.amazonaws.com/dev/cinemas/search';

export const fetchMovies = async (params: APIQuery) => {
  try {
    // First create a base params object without neighborhoods
    const queryParams: any = {
      language: params.language,
      date: params.date,
      query: params.query,
    };
    
    // Initialize URL with base parameters
    let url = `${API_URL}?`;
    
    // Add each parameter to the URL
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined && value !== null) {
        url += `${key}=${encodeURIComponent(value as string)}&`;
      }
    }
    
    // Add neighborhoods separately
    if (params.neighborhood && params.neighborhood.length > 0) {
      params.neighborhood.forEach(n => {
        url += `neighborhood=${encodeURIComponent(n)}&`;
      });
    }
    
    // Remove trailing ampersand if exists
    url = url.endsWith('&') ? url.slice(0, -1) : url;
    
    // Make the request with the manually constructed URL
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};