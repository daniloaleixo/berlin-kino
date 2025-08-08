import { 
  MovieClickEvent, 
  FilterUsageEvent, 
  PageViewEvent, 
  CinemaClickEvent,
  LanguageChangeEvent,
  DateSelectionEvent 
} from '../types/analytics.types';

// GTM and GA4 IDs
const GTM_ID = 'GTM-MXWFDWHX';
const GA4_ID = 'G-J2H4ZR7QVV';

// Initialize GTM
export const initializeGTM = () => {
  if (typeof window !== 'undefined') {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    
    // GTM script
    const gtmScript = document.createElement('script');
    gtmScript.async = true;
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    document.head.appendChild(gtmScript);

    // GTM noscript fallback
    const gtmNoscript = document.createElement('noscript');
    const gtmIframe = document.createElement('iframe');
    gtmIframe.src = `https://www.googletagmanager.com/ns.html?id=${GTM_ID}`;
    gtmIframe.height = '0';
    gtmIframe.width = '0';
    gtmIframe.style.display = 'none';
    gtmIframe.style.visibility = 'hidden';
    gtmNoscript.appendChild(gtmIframe);
    document.body.appendChild(gtmNoscript);

    // Initialize gtag
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA4_ID);
  }
};

// Track page view
export const trackPageView = (event: PageViewEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: event.pageTitle,
      page_path: event.pagePath,
      city_name: event.cityName,
      language: event.language,
      custom_map: {
        'city': event.cityName,
        'language': event.language,
        ...event.customDimensions
      }
    });
  }
};

// Track movie click
export const trackMovieClick = (event: MovieClickEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'movie_click', {
      movie_id: event.movieId,
      movie_title: event.movieTitle,
      cinema: event.cinema,
      city: event.city,
      language: event.language,
      custom_map: {
        'movie_id': event.movieId,
        'cinema': event.cinema,
        'city': event.city
      }
    });
  }
};

// Track filter usage
export const trackFilterUsage = (event: FilterUsageEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'filter_used', {
      filter_type: event.filterType,
      filter_value: event.filterValue,
      city: event.city,
      language: event.language,
      custom_map: {
        'filter_type': event.filterType,
        'filter_value': event.filterValue,
        'city': event.city
      }
    });
  }
};

// Track cinema website click
export const trackCinemaClick = (event: CinemaClickEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'cinema_click', {
      cinema_name: event.cinemaName,
      cinema_website: event.cinemaWebsite,
      movie_title: event.movieTitle,
      city: event.city,
      language: event.language,
      custom_map: {
        'cinema_name': event.cinemaName,
        'movie_title': event.movieTitle,
        'city': event.city
      }
    });
  }
};

// Track language change
export const trackLanguageChange = (event: LanguageChangeEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'language_change', {
      from_language: event.fromLanguage,
      to_language: event.toLanguage,
      city: event.city,
      custom_map: {
        'from_language': event.fromLanguage,
        'to_language': event.toLanguage,
        'city': event.city
      }
    });
  }
};

// Track date selection
export const trackDateSelection = (event: DateSelectionEvent) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'date_selection', {
      selected_date: event.selectedDate,
      city: event.city,
      language: event.language,
      custom_map: {
        'selected_date': event.selectedDate,
        'city': event.city
      }
    });
  }
};

// Track movie detail expansion
export const trackMovieExpansion = (movieId: string, movieTitle: string, city: string, language: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'movie_expansion', {
      movie_id: movieId,
      movie_title: movieTitle,
      city: city,
      language: language,
      custom_map: {
        'movie_id': movieId,
        'city': city
      }
    });
  }
};

// Enhanced ecommerce tracking for movie view
export const trackMovieView = (movieId: string, movieTitle: string, cinema: string, city: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'view_item', {
      currency: 'EUR',
      value: 0, // Free service
      items: [{
        item_id: movieId,
        item_name: movieTitle,
        item_category: 'movie',
        item_brand: cinema,
        item_category2: city
      }]
    });
  }
};

// Utility function to get current language
export const getCurrentLanguage = (): string => {
  if (typeof window !== 'undefined') {
    return document.documentElement.lang || 'en';
  }
  return 'en';
};

// Utility function to get current path
export const getCurrentPath = (): string => {
  if (typeof window !== 'undefined') {
    return window.location.pathname;
  }
  return '/';
}; 