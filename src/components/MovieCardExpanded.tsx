import { ExternalLink } from 'lucide-react';
import { Movie } from "../types/movies.types";

export const MovieCardExpanded = ({ movie }: {
  movie: Movie;
}) => (
  <div className="pt-6 animate-fadeIn mb-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Movie details */}
      <div>
        {movie.directors && movie.directors.length > 0 && (
          <p className="mb-2">
            <span className="text-gray-400">Director:</span> <span className="text-white">
              {movie.directors.map(director => director.name).join(', ')}
            </span>
          </p>
        )}
        {movie.actors && movie.actors.length > 0 && (
          <p className="mb-2">
            <span className="text-gray-400">Cast:</span> <span className="text-white">
              {movie.actors.map(actor => actor.name).join(', ')}
            </span>
          </p>
        )}
        {movie.duration && (
          <p className="mb-2">
            <span className="text-gray-400">Duration:</span> <span className="text-white">{movie.duration} min</span>
          </p>
        )}
        {movie.genres && movie.genres.length > 0 && (
          <p className="mb-2">
            <span className="text-gray-400">Genre:</span> <span className="text-white">
              {movie.genres.map(genre => genre.name).join(', ')}
            </span>
          </p>
        )}
        {movie.description && (
          <div className="mt-4">
            <h4 className="text-red-400 uppercase text-sm mb-2">Synopsis</h4>
            <p className="text-white text-justify text-sm leading-relaxed">{movie.description}</p>
          </div>
        )}

        {/* Trailer link (only if available) */}
        {movie.hasTrailer && movie.trailers && movie.trailers.length > 0 && (
          <div className="mt-4">
            <a
              href={movie.trailers[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-red-400 hover:text-red-300 gap-1"
            >
              <ExternalLink size={16} />
              <span>Watch Trailer</span>
            </a>
          </div>
        )}
      </div>

      {/* Movie Image */}
      {movie.largeImage && (
        <div className="flex justify-center">
          <img 
            src={movie.largeImage} 
            alt={movie.title} 
            className="max-h-[300px] rounded shadow-lg object-cover" 
          />
        </div>
      )}
    </div>
  </div>
);