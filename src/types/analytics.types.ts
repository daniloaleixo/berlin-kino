export interface AnalyticsProps {
  pageTitle?: string;
  pagePath?: string;
  cityName?: string;
  customDimensions?: Record<string, string>;
}

export interface MovieClickEvent {
  movieId: string;
  movieTitle: string;
  cinema: string;
  city: string;
  language: string;
}

export interface FilterUsageEvent {
  filterType: 'neighborhood' | 'date' | 'language';
  filterValue: string;
  city: string;
  language: string;
}

export interface PageViewEvent {
  pageTitle: string;
  pagePath: string;
  cityName?: string;
  language: string;
  customDimensions?: Record<string, string>;
}

export interface CinemaClickEvent {
  cinemaName: string;
  cinemaWebsite: string;
  movieTitle: string;
  city: string;
  language: string;
}

export interface LanguageChangeEvent {
  fromLanguage: string;
  toLanguage: string;
  city: string;
}

export interface DateSelectionEvent {
  selectedDate: string;
  city: string;
  language: string;
}

// GTM and GA4 global types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export {}; 