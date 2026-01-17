import { useState } from "react";
import { Movie } from "../types/movies.types";
import { MovieCard } from "./MovieCard";
import { MovieCardExpanded } from "./MovieCardExpanded";

interface IProps {
  movies: Movie[];
  cityName?: string;
}

export const MovieList: React.FC<IProps> = ({ movies, cityName }: IProps) => {
  const [expandedMovieId, setExpandedMovieId] = useState<number | null>(null);

  const handleMovieClick = (movieId: number) => {
    // If this movie is already expanded, collapse it
    if (expandedMovieId === movieId) {
      setExpandedMovieId(null);
    } else {
      // Otherwise expand this movie (and collapse any previously expanded one)
      setExpandedMovieId(movieId);
    }
  };

  return (
    <ul className="pb-16 list-none" aria-label="Movie listings">
      {movies.map((movie) => (
        <li key={movie.id}>
          <MovieCard 
            movie={movie} 
            isExpanded={expandedMovieId === movie.id}
            onClick={() => handleMovieClick(movie.id)}
            cityName={cityName}
          />
          {expandedMovieId === movie.id && (
            <MovieCardExpanded movie={movie} />
          )}
        </li>
      ))}
    </ul>
  );
};