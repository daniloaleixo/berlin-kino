import { Search } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';


interface SearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export const SearchComponent: React.FC<SearchProps> = ({ searchQuery, setSearchQuery }: SearchProps) => {
  const { t, i18n } = useTranslation();

  return (
    < div className="relative" >
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-red-400" size={20} />
      <input
        type="text"
        placeholder={ t('header.search') }
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="bg-transparent border border-red-400 rounded px-10 py-2 text-white placeholder-gray-400 text-sm uppercase tracking-wide focus:outline-none focus:border-red-400"
      />
    </div >
  )
}