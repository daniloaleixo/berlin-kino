import { Movie } from "../types/movies.types";
import { MovieCard } from "./MovieCard";

interface IProps {
  movies: Movie[];
}
export const MovieList: React.FC<IProps> = ({ movies }: IProps) => (
  <div className="pb-16">
    {movies.map((movie) => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
)