import { useEffect, useState } from 'react';
import { getMovies } from '../services/movieService';
import { operations, components } from '../types/.generated/cinemas-api.types';
import { Movie } from '../types/movies.types';

export type APIQuery = operations['AppController_getFlightPrices']['parameters']['query'];
export type Neighborhood = components["schemas"]["Neighborhood"];

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
  },  [params.language, params.date, params.query,  
    // Check if neighborhoods array exists and stringify for comparison
    params.neighborhood ? JSON.stringify(params.neighborhood) : null,
    params.city // Add city to dependency array
  ]);

  return { movies, loading, error };
};

export default useMovies;