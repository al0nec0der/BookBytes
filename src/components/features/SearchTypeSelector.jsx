import { useState } from 'react';

export default function SearchTypeSelector({ searchType, onSearchTypeChange }) {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'subject', label: 'Subject' }
  ];

  return (
    <div className="flex rounded-lg bg-gray-900 border border-gray-800 overflow-hidden">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`px-4 py-3 text-sm font-medium transition-all duration-300 ${
            searchType === option.value
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
              : 'text-gray-300 hover:bg-gray-800 hover:text-white'
          }`}
          onClick={() => onSearchTypeChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}