export interface CityConfig {
  name: string;
  displayName: string;
  path: string;
  seo: {
    title: string;
    description: string;
    url: string;
    structuredData: any;
  };
  neighborhoods: string[];
}

export const cityConfigs: Record<string, CityConfig> = {
  berlin: {
    name: 'berlin',
    displayName: 'Berlin',
    path: '/berlin',
    seo: {
      title: "Berlin Cinema Guide – Schedules & Listings for All Cinemas",
      description: "Discover all cinema schedules in Berlin. Browse movie times, locations, and special screenings across Berlin's best cinemas in one place.",
      url: "https://berlin.kino-berlin.com",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Berlin Cinema Guide",
        "url": "https://berlin.kino-berlin.com",
        "description": "A comprehensive catalog of cinema schedules and listings for all cinemas in Berlin.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://berlin.kino-berlin.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    neighborhoods: ['Mitte', 'Kreuzberg', 'Friedrichshain']
  },
  frankfurt: {
    name: 'frankfurt',
    displayName: 'Frankfurt',
    path: '/frankfurt',
    seo: {
      title: "Frankfurt Cinema Guide – Schedules & Listings for All Cinemas",
      description: "Discover all cinema schedules in Frankfurt. Browse movie times, locations, and special screenings across Frankfurt's best cinemas in one place.",
      url: "https://frankfurt.kino-berlin.com",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Frankfurt Cinema Guide",
        "url": "https://frankfurt.kino-berlin.com",
        "description": "A comprehensive catalog of cinema schedules and listings for all cinemas in Frankfurt.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://frankfurt.kino-berlin.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    neighborhoods: ['Innenstadt', 'Sachsenhausen', 'Bornheim']
  },
  munich: {
    name: 'munich',
    displayName: 'Munich',
    path: '/munich',
    seo: {
      title: "Munich Cinema Guide – Schedules & Listings for All Cinemas",
      description: "Discover all cinema schedules in Munich. Browse movie times, locations, and special screenings across Munich's best cinemas in one place.",
      url: "https://munich.kino-berlin.com",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Munich Cinema Guide",
        "url": "https://munich.kino-berlin.com",
        "description": "A comprehensive catalog of cinema schedules and listings for all cinemas in Munich.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://munich.kino-berlin.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    neighborhoods: ['Altstadt', 'Schwabing', 'Maxvorstadt']
  }
};

export const getCityConfig = (cityName: string): CityConfig => {
  return cityConfigs[cityName] || cityConfigs.berlin;
};

export const getAllCities = (): CityConfig[] => {
  return Object.values(cityConfigs);
}; 