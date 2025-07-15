import { useTranslation } from 'react-i18next';

// Updated DateHeader component with i18n support
export const DateHeader = ({ currentDate }: { currentDate?: string }) => {
  const { i18n } = useTranslation();
  
  // Choose locale based on the current language
  const locale = i18n.language === 'de' ? 'de-DE' : 'en-US';
  
  const displayDate = currentDate 
    ? new Date(currentDate).toLocaleDateString(locale, { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric' 
      })
    : i18n.language === 'de' ? 'Datum auswählen' : 'Select a date';
    
  return (
    <div className="bg-red-400 text-black py-3 lg:py-4 px-4 lg:px-6 mb-6 lg:mb-8 text-center">
      <h2 className="text-lg lg:text-xl font-medium uppercase tracking-wide leading-tight">{displayDate}</h2>
    </div>
  );
};