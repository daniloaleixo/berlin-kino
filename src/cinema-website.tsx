import { Bookmark, Filter, Menu, Search, X } from 'lucide-react';
import { useState } from 'react';

// Mock data
const mockMovies = [
  {
    id: 1,
    time: '16:30',
    title: 'Schneewittchen',
    cinema: 'FREILUFTKINO HASENHEIDE',
    language: 'DEUTSCH',
    type: 'FILM INFO & TICKETS'
  },
  {
    id: 2,
    time: '18:30',
    title: 'Memory',
    cinema: 'STRANDBAD WENDENSCHLOSS',
    language: 'DF',
    type: 'FILM INFO & TICKETS'
  },
  {
    id: 3,
    time: '18:45',
    title: 'Was Marielle Weiß',
    cinema: 'FREILUFTKINO HASENHEIDE',
    language: 'DEUTSCH MIT ENGL. UT',
    type: 'FILM INFO & TICKETS'
  },
  {
    id: 4,
    time: '21:00',
    title: 'Hayao Miyazaki: Spirited Away',
    cinema: 'CENTRAL FREILUFTKINO MITTE',
    language: 'SUBTITLED OV ENGLISH',
    type: 'FILM INFO & TICKETS'
  }
];

const tabs = ['TODAY', 'TOMORROW', 'DAY AFTER TOMORROW', 'DATE'];

function CinemaWebsite() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [showCinemaMenu, setShowCinemaMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const MovieCard = ({ movie }: any) => (
    <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 mb-4 hover:border-yellow-500 hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-center">
        <div className="text-4xl font-light text-yellow-500 min-w-[120px] mr-8">
          {movie.time}
        </div>
        
        <div className="flex-grow">
          <h3 className="text-2xl font-normal mb-2 text-white">
            {movie.title}
          </h3>
          
          <div className="flex items-center gap-4 mb-2">
            <span className="text-yellow-500 text-sm uppercase tracking-wider">
              {movie.cinema}
            </span>
            <span className="text-gray-400 text-sm">
              {movie.language}
            </span>
          </div>
          
          <button className="text-yellow-500 text-sm uppercase hover:underline p-0 bg-transparent border-0">
            {movie.type}
          </button>
        </div>
        
        <button className="text-gray-400 hover:text-yellow-500 p-2">
          <Bookmark size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" size={20} />
              <input
                type="text"
                placeholder="SEARCH FILM/CINEMA"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border border-yellow-500 rounded px-10 py-2 text-white placeholder-gray-400 text-sm uppercase tracking-wide focus:outline-none focus:border-yellow-400"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4">
              <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded hover:bg-yellow-500 hover:text-black transition-colors">
                MY FILMS
              </button>
              <span className="text-sm">DE / EN</span>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-yellow-500"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 border-t border-gray-800 pt-4">
              <button className="block w-full border border-yellow-500 text-yellow-500 px-4 py-2 rounded mb-2">
                MY FILMS
              </button>
              <span className="text-sm">DE / EN</span>
            </div>
          )}
        </div>
      </header>

      {/* Main Title Section */}
      <div className="text-center py-16">
        <p className="text-gray-400 text-sm uppercase tracking-[3px] mb-6">
          THE PROGRAMME OF THE OPEN AIR CINEMAS IN BERLIN, BRANDENBURG AND BEYOND
        </p>
        
        <div className="text-8xl md:text-9xl font-light italic">
          <div className="text-white font-serif">OpenAir</div>
          <div className="text-yellow-500 font-serif -mt-4">Kino</div>
        </div>
      </div>

      {/* Navigation Tabs and Filters */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(index)}
                className={`px-6 py-3 border border-yellow-500 uppercase font-medium text-sm transition-colors ${
                  selectedTab === index
                    ? 'bg-yellow-500 text-black'
                    : 'bg-transparent text-white hover:bg-yellow-500 hover:text-black'
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
              className="flex items-center gap-2 border border-yellow-500 text-yellow-500 px-4 py-3 uppercase text-sm hover:bg-yellow-500 hover:text-black transition-colors"
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
        <div className="bg-yellow-500 text-black py-4 px-6 mb-8 text-center">
          <h2 className="text-xl font-medium uppercase tracking-wide">
            WEDNESDAY, JUNE 11, 2025
          </h2>
        </div>

        {/* Movie Listings */}
        <div className="pb-16">
          {mockMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
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