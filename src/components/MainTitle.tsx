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
    <div className="text-center py-8 lg:py-16 px-4">
      <p className="text-gray-400 text-xs lg:text-sm uppercase tracking-[2px] lg:tracking-[3px] mb-4 lg:mb-6">
        {cityConfig.titles[lang]}
      </p>

      <div className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-light italic">
        <div className="text-white font-serif leading-tight">{cityConfig.displayNames[lang]}</div>
        <div className="text-red-400 font-serif -mt-2 lg:-mt-4 leading-tight">Kino</div>
      </div>
    </div>
  )
}