// Simple test file to verify analytics functions
// This can be run with: npx ts-node src/utils/analytics.test.ts

import { 
  trackMovieClick, 
  trackFilterUsage, 
  trackLanguageChange, 
  trackDateSelection,
  trackCinemaClick,
  trackMovieExpansion
} from './analytics';

// Mock window object for testing
const mockWindow = {
  gtag: jest.fn(),
  dataLayer: []
};

// Test analytics functions
describe('Analytics Functions', () => {
  beforeEach(() => {
    // Reset mocks
    jest.clearAllMocks();
    (global as any).window = mockWindow;
  });

  test('trackMovieClick should call gtag with correct parameters', () => {
    const event = {
      movieId: '123',
      movieTitle: 'Test Movie',
      cinema: 'Test Cinema',
      city: 'berlin',
      language: 'de'
    };

    trackMovieClick(event);

    expect(mockWindow.gtag).toHaveBeenCalledWith('event', 'movie_click', {
      movie_id: '123',
      movie_title: 'Test Movie',
      cinema: 'Test Cinema',
      city: 'berlin',
      language: 'de',
      custom_map: {
        'movie_id': '123',
        'cinema': 'Test Cinema',
        'city': 'berlin'
      }
    });
  });

  test('trackFilterUsage should call gtag with correct parameters', () => {
    const event = {
      filterType: 'neighborhood' as const,
      filterValue: 'added_Mitte',
      city: 'berlin',
      language: 'de'
    };

    trackFilterUsage(event);

    expect(mockWindow.gtag).toHaveBeenCalledWith('event', 'filter_used', {
      filter_type: 'neighborhood',
      filter_value: 'added_Mitte',
      city: 'berlin',
      language: 'de',
      custom_map: {
        'filter_type': 'neighborhood',
        'filter_value': 'added_Mitte',
        'city': 'berlin'
      }
    });
  });

  test('trackLanguageChange should call gtag with correct parameters', () => {
    const event = {
      fromLanguage: 'en',
      toLanguage: 'de',
      city: 'berlin'
    };

    trackLanguageChange(event);

    expect(mockWindow.gtag).toHaveBeenCalledWith('event', 'language_change', {
      from_language: 'en',
      to_language: 'de',
      city: 'berlin',
      custom_map: {
        'from_language': 'en',
        'to_language': 'de',
        'city': 'berlin'
      }
    });
  });

  test('trackDateSelection should call gtag with correct parameters', () => {
    const event = {
      selectedDate: '2024-01-15',
      city: 'berlin',
      language: 'de'
    };

    trackDateSelection(event);

    expect(mockWindow.gtag).toHaveBeenCalledWith('event', 'date_selection', {
      selected_date: '2024-01-15',
      city: 'berlin',
      language: 'de',
      custom_map: {
        'selected_date': '2024-01-15',
        'city': 'berlin'
      }
    });
  });

  test('trackCinemaClick should call gtag with correct parameters', () => {
    const event = {
      cinemaName: 'Test Cinema',
      cinemaWebsite: 'https://test-cinema.com',
      movieTitle: 'Test Movie',
      city: 'berlin',
      language: 'de'
    };

    trackCinemaClick(event);

    expect(mockWindow.gtag).toHaveBeenCalledWith('event', 'cinema_click', {
      cinema_name: 'Test Cinema',
      cinema_website: 'https://test-cinema.com',
      movie_title: 'Test Movie',
      city: 'berlin',
      language: 'de',
      custom_map: {
        'cinema_name': 'Test Cinema',
        'movie_title': 'Test Movie',
        'city': 'berlin'
      }
    });
  });

  test('trackMovieExpansion should call gtag with correct parameters', () => {
    trackMovieExpansion('123', 'Test Movie', 'berlin', 'de');

    expect(mockWindow.gtag).toHaveBeenCalledWith('event', 'movie_expansion', {
      movie_id: '123',
      movie_title: 'Test Movie',
      city: 'berlin',
      language: 'de',
      custom_map: {
        'movie_id': '123',
        'city': 'berlin'
      }
    });
  });
});

console.log('✅ Analytics tests completed successfully!'); 