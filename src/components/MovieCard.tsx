
import { Bookmark } from 'lucide-react';
import { Movie } from '../types/movies.types';

export const MovieCard = ({ movie }: {
  movie: Movie;
}) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-4 hover:border-red-400 hover:-translate-y-1 transition-all duration-300">
    <div className="flex items-center">
      <div className="text-4xl font-light text-red-400 min-w-[120px] mr-8">
        {movie.time}
      </div>
      
      <div className="flex-grow">
        <h3 className="text-2xl font-normal mb-2 text-white">
          {movie.title}
        </h3>
        
        <div className="flex items-center gap-4 mb-2">
          <span className="text-red-400 text-sm uppercase tracking-wider">
            {movie.cinema}
          </span>
          <span className="text-gray-400 text-sm">
            {movie.language}
          </span>
        </div>
        
        <button className="text-red-400 text-sm uppercase hover:underline p-0 bg-transparent border-0">
          {movie.type}
        </button>
      </div>
      
      <button className="text-gray-400 hover:text-red-400 p-2">
        <Bookmark size={20} />
      </button>
    </div>
  </div>
);