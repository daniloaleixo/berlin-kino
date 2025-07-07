import { useTranslation } from "react-i18next";
import { getCityConfig } from "../utils/cityConfig";

interface MainTitleProps {
  city?: string;
}

export const MainTitle = ({ city }: MainTitleProps) => {
  const { i18n } = useTranslation();
  const cityConfig = getCityConfig(city || 'berlin');
  const lang = i18n.language.startsWith('de') ? 'de' : 'en';

  return (
    <div className="text-center py-16">
      <p className="text-gray-400 text-sm uppercase tracking-[3px] mb-6">
        {cityConfig.titles[lang]}
      </p>

      <div className="text-8xl md:text-9xl font-light italic">
        <div className="text-white font-serif">{cityConfig.displayNames[lang]}</div>
        <div className="text-red-400 font-serif -mt-4">Kino</div>
      </div>
    </div>
  )
}