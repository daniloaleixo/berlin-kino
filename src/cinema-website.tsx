import { Filter, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import { DateHeader } from './components/DateHeader';
import { DatePicker } from './components/DatePicker';
import { InformationPage } from './components/InformationPage';
import { MainTitle } from './components/MainTitle';
import { MovieList } from './components/MovieList';
import { Navigation } from './components/Navigation';
import { SearchComponent } from './components/Search';
import useMovies, { Neighborhood } from './hooks/useMovies';

function CinemaWebsite() {
  const { t, i18n } = useTranslation(); // Use the hook

  // Helper function to format date as YYYY-MM-DD
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  // State variables for managing the application state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string>(formatDate(new Date())); // Default to today
  const [showNeighborhoodMenu, setShowNeighborhoodMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showInformationPage, setShowInformationPage] = useState(false);
  const [selectedNeighborhoods, setSelectedNeighborhoods] = useState<Neighborhood[]>(['Mitte']); // Default to "Mitte" neighborhood

  // Use i18n.language instead of a separate state
  const language = i18n.language as "de" | "en";

  // Using our useMovies hook with the filter parameters
  const { movies, loading, error } = useMovies({
    language,
    date: selectedDate,
    query: searchQuery,
    neighborhood: selectedNeighborhoods // Pass the array of neighborhoods
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
      case 3: // DATE - Open date picker
        setShowDatePicker(true);
        break;
    }
  };

  // Function to handle date selection from datepicker
  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setShowDatePicker(false);
  };

  // Function to close datepicker
  const handleCloseDatePicker = () => {
    setShowDatePicker(false);
    // If no date was selected, revert to today's tab
    if (!selectedDate) {
      setSelectedTab(0);
      setSelectedDate(formatDate(new Date()));
    }
  };

  // Function to toggle neighborhood selection
  const toggleNeighborhoodSelection = (neighborhood: Neighborhood) => {
    setSelectedNeighborhoods(prev => {
      // If it's already selected, remove it
      if (prev.includes(neighborhood)) {
        return prev.filter(item => item !== neighborhood);
      } 
      // If not selected, add it
      else {
        return [...prev, neighborhood];
      }
    });
  };

  // Function to clear all neighborhood selections
  const clearNeighborhoods = () => {
    setSelectedNeighborhoods([]);
    setShowNeighborhoodMenu(false);
  };

  // Function to toggle language
  const toggleLanguage = () => {
    i18n.changeLanguage(language === "en" ? "de" : "en");
  };

  // Function to show information page
  const handleShowInformation = () => {
    setShowInformationPage(true);
  };

  // Function to hide information page
  const handleHideInformation = () => {
    setShowInformationPage(false);
  };

  // Define tabs using translations
  const tabs = [
    t('tabs.today'),
    t('tabs.tomorrow'),
    t('tabs.dayAfterTomorrow'),
    t('tabs.date')
  ];

  // Define neighborhoods
  const neighborhoods: Neighborhood[] = [
    "Mitte",
    // "Prenzlauer Berg",
    "Kreuzberg",
    "Friedrichshain",
    // "Neukölln",
    // "Charlottenburg",
    // "Schöneberg"
  ];

  // Get a display text for the neighborhood filter button
  const getNeighborhoodDisplayText = () => {
    if (selectedNeighborhoods.length === 0) {
      return t('filters.allNeighborhoods');
    }
    if (selectedNeighborhoods.length === 1) {
      return selectedNeighborhoods[0];
    }
    return t('filters.multipleNeighborhoods', { count: selectedNeighborhoods.length });
  };

  // If information page is shown, render it instead of main content
  if (showInformationPage) {
    return <InformationPage onBack={handleHideInformation} />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      {/* <header className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <SearchComponent searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

            {/* Desktop Navigation */}
            {/* <Navigation /> */}

            {/* Mobile Menu Button */}
            {/* <button
              className="md:hidden text-red-400"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              {showMobileMenu ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div> */}

          {/* Mobile Menu */}
          {/*{showMobileMenu && (
            <div className="md:hidden mt-4 border-t border-gray-800 pt-4">
              <button className="block w-full border border-red-400 text-red-400 px-4 py-2 rounded mb-2">
                {t('header.myFilms')}
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
      </header> */}

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

          {/* Language Toggle and Neighborhood Filter */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:block border border-red-400 text-red-400 px-4 py-3 uppercase text-sm hover:bg-red-400 hover:text-black transition-colors"
            >
              {language.toUpperCase()}
            </button>

            {/* Neighborhood Filter */}
            <div className="relative">
              <button
                onClick={() => setShowNeighborhoodMenu(!showNeighborhoodMenu)}
                className="flex items-center gap-2 border border-red-400 text-red-400 px-4 py-3 uppercase text-sm hover:bg-red-400 hover:text-black transition-colors"
              >
                {getNeighborhoodDisplayText()}
                <Filter size={16} />
              </button>

              {showNeighborhoodMenu && (
                <div className="absolute right-0 top-full mt-2 bg-gray-900 border border-gray-700 rounded-lg shadow-xl z-10 min-w-[200px]">
                  <div className="p-2">
                    <button
                      className={`block w-full text-left px-4 py-2 rounded mb-2 ${
                        selectedNeighborhoods.length === 0 
                          ? 'bg-red-400 text-black' 
                          : 'hover:bg-gray-800 text-white'
                      }`}
                      onClick={clearNeighborhoods}
                    >
                      {t('filters.allNeighborhoods')}
                    </button>
                    
                    {neighborhoods.map(neighborhood => (
                      <button
                        key={neighborhood}
                        className={`block w-full text-left px-4 py-2 rounded flex items-center ${
                          selectedNeighborhoods.includes(neighborhood)
                            ? 'bg-gray-800 text-red-400'
                            : 'hover:bg-gray-800 text-white'
                        }`}
                        onClick={() => toggleNeighborhoodSelection(neighborhood)}
                      >
                        <span className="mr-2">
                          {selectedNeighborhoods.includes(neighborhood) ? '✓' : ''}
                        </span>
                        {neighborhood}
                      </button>
                    ))}
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
            {t('errors.fetchFailed')}
          </div>
        ) : (
          <MovieList movies={movies} />
        )}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Berlin Kino
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleShowInformation}
                className="text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                {t('information.title')}
              </button>
              <button
                onClick={toggleLanguage}
                className="text-gray-400 hover:text-red-400 transition-colors text-sm"
              >
                {language.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* DatePicker Modal */}
      <DatePicker
        isOpen={showDatePicker}
        onClose={handleCloseDatePicker}
        onDateSelect={handleDateSelect}
        currentDate={selectedDate}
      />

      {/* Click outside to close menu */}
      {showNeighborhoodMenu && (
        <div
          className="fixed inset-0 z-5"
          onClick={() => setShowNeighborhoodMenu(false)}
        />
      )}
    </div>
  );
}

export default CinemaWebsite;