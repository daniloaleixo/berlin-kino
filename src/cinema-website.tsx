import { Filter, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { DateHeader } from './components/DateHeader';
import { MainTitle } from './components/MainTitle';
import { MovieList } from './components/MovieList';
import { Navigation } from './components/Navigation';
import { SearchComponent } from './components/Search';
import useMovies from './hooks/useMovies';

const tabs = ['TODAY', 'TOMORROW', 'DAY AFTER TOMORROW', 'DATE'];

function CinemaWebsite() {
  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // State variables for managing the application state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [language, setLanguage] = useState<"de" | "en">("en"); // Default language
  const [selectedDate, setSelectedDate] = useState<string>(formatDate(new Date())); // Default to today
  const [showCinemaMenu, setShowCinemaMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Using our useMovies hook with the filter parameters
  const { movies, loading, error } = useMovies({
    language,
    date: selectedDate,
    query: searchQuery
  });

  // Function to handle date selection based on tab
  const handleTabSelection = (index: number) => {
    setSelectedTab(index);

    // Calculate date based on tab selection
    const today = new Date();

    switch (index) {
      case 0: // TODAY
        setSelectedDate(formatDate(today));
        break;
      case 1: // TOMORROW
        today.setDate(today.getDate() + 1);
        setSelectedDate(formatDate(today));
        break;
      case 2: // DAY AFTER TOMORROW
        today.setDate(today.getDate() + 2);
        setSelectedDate(formatDate(today));
        break;
      case 3: // DATE - Could open a date picker
        // Let user select date through a date picker
        // For now, we'll just leave it undefined
        setSelectedDate(undefined as any); // TODO
        break;
    }
  };

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "de" : "en");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          {/* TODO */}
          {/* <div className="flex justify-between items-center"> */}
            {/* <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} /> */}

            {/* Desktop Navigation */}
            {/* <Navigation /> */}

            {/* Mobile Menu Button */}
            {/* <button
              className="md:hidden text-red-400"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            > */}
              {/* {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}

          {/* Mobile Menu */}
          {showMobileMenu && (
            <div className="md:hidden mt-4 border-t border-gray-800 pt-4">
              <button className="block w-full border border-red-400 text-red-400 px-4 py-2 rounded mb-2">
                MY FILMS
              </button>
              <span
                className="text-sm cursor-pointer hover:text-red-400"
                onClick={toggleLanguage}
              >
                {language === "en" ? "EN" : "DE"}
              </span>
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
                onClick={() => handleTabSelection(index)}
                className={`px-6 py-3 border border-red-400 uppercase font-medium text-sm transition-colors ${selectedTab === index
                  ? 'bg-red-400 text-black'
                  : 'bg-transparent text-white hover:bg-red-400 hover:text-black'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Language Toggle and Cinema Filter */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:block border border-red-400 text-red-400 px-4 py-3 uppercase text-sm hover:bg-red-400 hover:text-black transition-colors"
            >
              {language.toUpperCase()}
            </button>

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
        </div>

        {/* Date Header */}
        <DateHeader currentDate={selectedDate} />

        {/* Movie Listings */}
        {loading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-400"></div>
          </div>
        ) : error ? (
          <div className="bg-red-900/20 border border-red-900 text-red-400 p-4 rounded">
            {error}
          </div>
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