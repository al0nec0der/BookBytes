import { useState } from 'react';

export default function SearchTypeSelector({ searchType, onSearchTypeChange }) {
  const options = [
    { value: 'title', label: 'Title' },
    { value: 'author', label: 'Author' },
    { value: 'subject', label: 'Subject' }
  ];

  return (
    <div className="flex rounded-lg bg-gray-900 border border-gray-700 overflow-hidden">
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
            searchType === option.value
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-800'
          }`}
          onClick={() => onSearchTypeChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}