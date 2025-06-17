import { Bookmark, ChevronDown, ChevronUp } from 'lucide-react';
import { Movie } from '../types/movies.types';

interface MovieCardProps {
  movie: Movie;
  isExpanded: boolean;
  onClick: () => void;
}

export const MovieCard = ({ movie, isExpanded, onClick }: MovieCardProps) => (
  <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-0 hover:border-red-400 transition-all duration-300">
    <div 
      className="flex items-center cursor-pointer" 
      onClick={onClick}
    >
      <div className="text-4xl font-light text-red-400 min-w-[120px] mr-8">
        {movie.time}
      </div>

      <div className="flex-grow">
        <h3 className="text-2xl text-left font-normal mb-2 text-white">
          {movie.title}
        </h3>

        <div className="flex items-center gap-4 mb-2">
          <span className="text-red-400 text-sm uppercase tracking-wider">
            {movie.cinema?.name}
          </span>
          <span className="text-gray-400 text-sm">
            {movie.language}
          </span>
          <a 
            href={movie.cinema?.website} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-red-400 text-sm uppercase hover:underline p-0 bg-transparent border-0 cursor-pointer"
            onClick={(e) => e.stopPropagation()} // Prevent triggering parent onClick
          >
            Film Info & Tickets
          </a>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button 
          className="text-gray-400 hover:text-red-400 p-2"
          onClick={(e) => {
            e.stopPropagation(); // Prevent card expansion
            // Bookmark functionality would go here
          }}
        >
          <Bookmark size={20} />
        </button>
        
        {isExpanded ? 
          <ChevronUp size={20} className="text-red-400" /> : 
          <ChevronDown size={20} className="text-red-400" />
        }
      </div>
    </div>
  </div>
);