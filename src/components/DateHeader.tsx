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
    <div className="bg-red-400 text-black py-4 px-6 mb-8 text-center">
      <h2 className="text-xl font-medium uppercase tracking-wide">{displayDate}</h2>
    </div>
  );
};