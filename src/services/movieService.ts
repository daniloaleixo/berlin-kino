import { fetchMovies } from './api';
import { Movie } from '../types/movies.types';

export const getMovies = async (): Promise<Movie[]> => {
  try {
    const movies = await fetchMovies();
    // Additional processing or transformation of movie data can be done here if needed
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error for further handling
  }
};