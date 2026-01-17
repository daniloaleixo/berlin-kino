import { useTranslation } from 'react-i18next';
import { CityConfig } from '../utils/cityConfig';

interface CityIntroProps {
  cityConfig?: CityConfig;
}

export const CityIntro = ({ cityConfig }: CityIntroProps) => {
  const { i18n } = useTranslation();
  const lang = i18n.language.startsWith('de') ? 'de' : 'en';
  
  // Get city display name
  const cityDisplayName = cityConfig?.displayNames[lang] || cityConfig?.displayName || 'Berlin';
  
  // Placeholder text - user will provide actual content later
  // For now, we'll use a generic structure
  const introText = {
    en: `Discover the vibrant indie cinema scene in ${cityDisplayName}. Explore curated movie listings, showtimes, and special screenings at the best independent cinemas across the city.`,
    de: `Entdecken Sie die lebendige Indie-Kino-Szene in ${cityDisplayName}. Erkunden Sie kuratierte Filmlisten, Spielzeiten und Sonderaufführungen in den besten unabhängigen Kinos der Stadt.`
  };
  
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 lg:py-12 mb-8 lg:mb-12">
      <h1 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6 text-white">
        {lang === 'de' 
          ? `Indie-Kino in ${cityDisplayName}`
          : `Indie Cinema in ${cityDisplayName}`
        }
      </h1>
      <p className="text-base lg:text-lg text-gray-300 leading-relaxed max-w-3xl">
        {introText[lang]}
      </p>
    </section>
  );
};

