import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import { operations } from '../types/.generated/cinemas-api.types';
import { Movie } from '../types/movies.types';

export type APIQuery = operations['AppController_getFlightPrices']['parameters']['query']; 

const useMovies = (params: APIQuery) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setLoading(true);

        const data = await getMovies(params);
        setMovies(data);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  },  [params.language, params.date, params.query]);

  return { movies, loading, error };
};

export default useMovies;