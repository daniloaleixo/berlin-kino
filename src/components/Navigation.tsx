import { useTranslation } from "react-i18next";


export const Navigation = () => {
  const { t, i18n } = useTranslation();

  return (
  <div className="hidden md:flex items-center gap-4">
    <button className="border border-red-400 text-red-400 px-4 py-2 rounded hover:bg-red-400 hover:text-black transition-colors">
      {t('header.myFilms')}
    </button>
  </div>
)
}