// Updated DateHeader component example
export const DateHeader = ({ currentDate }: { currentDate?: string }) => {
  const displayDate = currentDate 
    ? new Date(currentDate).toLocaleDateString('en-US', { 
        weekday: 'long',
        month: 'long', 
        day: 'numeric' 
      })
    : 'Select a date';
    
  return (
    <div className="bg-red-400 text-black py-4 px-6 mb-8 text-center">
      <h2 className="text-xl font-medium uppercase tracking-wide">{displayDate}</h2>
    </div>
  );
};