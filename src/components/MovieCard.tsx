import { Bookmark, ChevronDown, ChevronUp } from 'lucide-react';
import { Movie } from '../types/movies.types';
import { useTranslation } from 'react-i18next';

interface MovieCardProps {
  movie: Movie;
  isExpanded: boolean;
  onClick: () => void;
}

export const MovieCard = ({ movie, isExpanded, onClick }: MovieCardProps) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 lg:p-6 mb-0 hover:border-red-400 transition-all duration-300">
      <div
        className="flex items-start lg:items-center cursor-pointer"
        onClick={onClick}
      >
        <div className="text-2xl lg:text-4xl font-light text-red-400 min-w-[80px] lg:min-w-[120px] mr-4 lg:mr-8 flex-shrink-0">
          {movie.time}
        </div>

        <div className="flex-grow min-w-0">
          <h3 className="text-lg lg:text-2xl text-left font-normal mb-2 text-white leading-tight">
            {movie.title}
          </h3>

          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mb-2">
            <span className="text-red-400 text-xs lg:text-sm uppercase tracking-wider">
              {movie.cinema?.name}
            </span>
            <span className="text-gray-400 text-xs lg:text-sm">
              {movie.language}
            </span>
            <a
              href={movie.cinema?.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-xs lg:text-sm uppercase hover:underline p-0 bg-transparent border-0 cursor-pointer"
              onClick={(e) => e.stopPropagation()} // Prevent triggering parent onClick
            >
              {t('movieCard.filmInfoTickets')}
            </a>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            className="text-gray-400 hover:text-red-400 p-1 lg:p-2"
            onClick={(e) => {
              e.stopPropagation(); // Prevent card expansion
              // Bookmark functionality would go here
            }}
          >
            <Bookmark size={16} className="lg:w-5 lg:h-5" />
          </button>

          {isExpanded ?
            <ChevronUp size={16} className="text-red-400 lg:w-5 lg:h-5" /> :
            <ChevronDown size={16} className="text-red-400 lg:w-5 lg:h-5" />
          }
        </div>
      </div>
    </div>
  )
}