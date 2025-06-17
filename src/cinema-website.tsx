import { Filter, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { DateHeader } from './components/DateHeader';
import { MainTitle } from './components/MainTitle';
import { MovieList } from './components/MovieList';
import { Navigation } from './components/Navigation';
import { SearchComponent } from './components/Search';
import { getMovies } from './services/movieService';
import { Movie } from './types/movies.types';
import { test } from './test';

const tabs = ['TODAY', 'TOMORROW', 'DAY AFTER TOMORROW', 'DATE'];

function CinemaWebsite() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [showCinemaMenu, setShowCinemaMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        // const movieData = await getMovies();
        const movieData = test; // Using test data for now
        setMovies(movieData);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    loadMovies();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Desktop Navigation */}
            <Navigation />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-red-400"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 border-t border-gray-800 pt-4">
              <button className="block w-full border border-red-400 text-red-400 px-4 py-2 rounded mb-2">
                MY FILMS
              </button>
              <span className="text-sm">DE / EN</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Title Section */}
      <MainTitle />

      {/* Navigation Tabs and Filters */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(index)}
                className={`px-6 py-3 border border-red-400 uppercase font-medium text-sm transition-colors ${selectedTab === index
                    ? 'bg-red-400 text-black'
                    : 'bg-transparent text-white hover:bg-red-400 hover:text-black'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Cinema Filter */}
          <div className="relative">
            <button
              onClick={() => setShowCinemaMenu(!showCinemaMenu)}
              className="flex items-center gap-2 border border-red-400 text-red-400 px-4 py-3 uppercase text-sm hover:bg-red-400 hover:text-black transition-colors"
            >
              ALL OPEN AIR CINEMAS
              <Filter size={16} />
            </button>

            {showCinemaMenu && (
              <div className="absolute right-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 min-w-[300px]">
                <div className="p-2">
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded">
                    Freiluftkino Hasenheide
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded">
                    Strandbad Wendenschloss
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-gray-800 rounded">
                    Central Freiluftkino Mitte
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Date Header */}
        <DateHeader />


        {/* Movie Listings */}
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error}</div>
        ) : (
          <MovieList movies={movies} />
        )}

      </div>

      {/* Click outside to close menu */}
      {showCinemaMenu && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowCinemaMenu(false)}
        />
      )}
    </div>
  );
}

export default CinemaWebsite;