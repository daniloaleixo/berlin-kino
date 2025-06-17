import { fetchMovies } from './api';
import { Movie } from '../types/movies.types';
import { APIQuery } from '../hooks/useMovies';

export const getMovies = async (params: APIQuery): Promise<Movie[]> => {
  try {
    const movies = await fetchMovies(params);
    // Additional processing or transformation of movie data can be done here if needed
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error for further handling
  }
};