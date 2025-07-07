export interface CityConfig {
  name: "berlin" | "frankfurt" | "munich";
  displayName: string;
  displayNames: {
    en: string;
    de: string;
  };
  path: string;
  titles: {
    en: string;
    de: string;
  };
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
    displayNames: {
      en: 'Berlin',
      de: 'Berlin',
    },
    path: '/berlin',
    titles: {
      en: 'Berlin Cinema Guide',
      de: 'Kino Guide Berlin',
    },
    seo: {
      title: "Berlin Cinema Guide – Schedules & Listings for All Cinemas",
      description: "Discover all cinema schedules in Berlin. Browse movie times, locations, and special screenings across Berlin's best cinemas in one place.",
      url: "https://berlinkino.aereozen.com",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Berlin Cinema Guide",
        "url": "https://berlinkino.aereozen.com",
        "description": "A comprehensive catalog of cinema schedules and listings for all cinemas in Berlin.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://berlinkino.aereozen.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    neighborhoods: ['Mitte', 'Kreuzberg', 'Friedrichshain', "Prenzlauer Berg", "Neukölln", "Charlottenburg"]
  },
  frankfurt: {
    name: 'frankfurt',
    displayName: 'Frankfurt',
    displayNames: {
      en: 'Frankfurt',
      de: 'Frankfurt',
    },
    path: '/frankfurt',
    titles: {
      en: 'Frankfurt Cinema Guide',
      de: 'Kino Guide Frankfurt',
    },
    seo: {
      title: "Frankfurt Cinema Guide – Schedules & Listings for All Cinemas",
      description: "Discover all cinema schedules in Frankfurt. Browse movie times, locations, and special screenings across Frankfurt's best cinemas in one place.",
      url: "https://frankfurt-kino.aereozen.com",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Frankfurt Cinema Guide",
        "url": "https://frankfurt-kino.aereozen.com",
        "description": "A comprehensive catalog of cinema schedules and listings for all cinemas in Frankfurt.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://frankfurt-kino.aereozen.com/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    },
    neighborhoods: ['Innenstadt', 'Sachsenhausen', 'Bornheim']
  },
  munich: {
    name: 'munich',
    displayName: 'Munich',
    displayNames: {
      en: 'Munich',
      de: 'München',
    },
    path: '/munich',
    titles: {
      en: 'Munich Cinema Guide',
      de: 'Kino Guide München',
    },
    seo: {
      title: "Munich Cinema Guide – Schedules & Listings for All Cinemas",
      description: "Discover all cinema schedules in Munich. Browse movie times, locations, and special screenings across Munich's best cinemas in one place.",
      url: "https://munich-kino.aereozen.com",
      structuredData: {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Munich Cinema Guide",
        "url": "https://munich-kino.aereozen.com",
        "description": "A comprehensive catalog of cinema schedules and listings for all cinemas in Munich.",
        "inLanguage": "en",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://munich-kino.aereozen.com/?q={search_term_string}",
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