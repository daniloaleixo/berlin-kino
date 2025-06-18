import { useState, useRef, useEffect } from 'react';
import { Calendar, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface DatePickerProps {
  isOpen: boolean;
  onClose: () => void;
  onDateSelect: (date: string) => void;
  currentDate?: string;
}

export const DatePicker = ({ isOpen, onClose, onDateSelect, currentDate }: DatePickerProps) => {
  const { t, i18n } = useTranslation();
  const [selectedDate, setSelectedDate] = useState(currentDate || '');
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handleConfirm = () => {
    if (selectedDate) {
      onDateSelect(selectedDate);
      onClose();
    }
  };

  const handleCancel = () => {
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div 
        ref={modalRef}
        className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full max-w-md mx-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-medium text-white flex items-center">
            <Calendar className="w-5 h-5 mr-2 text-red-400" />
            {i18n.language === 'de' ? 'Datum auswählen' : 'Select Date'}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="date-input" className="block text-sm font-medium text-gray-300 mb-2">
            {i18n.language === 'de' ? 'Datum' : 'Date'}
          </label>
          <input
            id="date-input"
            type="date"
            value={selectedDate}
            onChange={handleDateChange}
            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-transparent"
            min={new Date().toISOString().split('T')[0]} // Don't allow past dates
          />
        </div>

        <div className="flex gap-3">
          <button
            onClick={handleCancel}
            className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors"
          >
            {i18n.language === 'de' ? 'Abbrechen' : 'Cancel'}
          </button>
          <button
            onClick={handleConfirm}
            disabled={!selectedDate}
            className="flex-1 px-4 py-2 bg-red-400 text-black font-medium rounded-lg hover:bg-red-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {i18n.language === 'de' ? 'Bestätigen' : 'Confirm'}
          </button>
        </div>
      </div>
    </div>
  );
}; 