import { useTranslation } from "react-i18next";

export const MainTitle = () => {
  const { t, i18n } = useTranslation(); // Use the hook
  return (
    <div className="text-center py-16">
      <p className="text-gray-400 text-sm uppercase tracking-[3px] mb-6">
        {t('title')}
      </p>

      <div className="text-8xl md:text-9xl font-light italic">
        <div className="text-white font-serif">Berlin</div>
        <div className="text-red-400 font-serif -mt-4">Kino</div>
      </div>
    </div>
  )
}