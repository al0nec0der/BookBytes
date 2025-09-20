import { useState } from 'react';
import { getSearchTips, getBooleanExamples } from "../../utils/searchParser";

export default function SearchTips() {
  const [isOpen, setIsOpen] = useState(false);
  const tips = getSearchTips();
  const booleanExamples = getBooleanExamples();

  return (
    <div className="mt-4 w-full max-w-4xl mx-auto">
      {/* Quick Boolean Examples - Always visible */}
      <div className="mb-4 p-4 bg-gradient-to-r from-gray-900 to-black rounded-xl border border-gray-800 shadow-lg">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-gray-400 text-sm font-medium">Examples:</span>
          {booleanExamples.map((example, index) => (
            <code key={index} className="px-2 py-1 bg-gray-800 text-blue-300 rounded text-xs font-mono">
              {example}
            </code>
          ))}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-blue-400 text-sm font-medium transition-colors duration-200 ml-auto flex items-center"
          >
            {isOpen ? 'Hide Details' : 'Show All Tips'}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Detailed Search Tips - Toggleable */}
      {isOpen && (
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-5 border border-gray-800 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tips.map((tip, index) => (
              <div key={index} className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
                <h4 className="font-semibold text-white mb-3 flex items-center">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 w-2 h-2 rounded-full mr-2"></span>
                  {tip.title}
                </h4>
                <ul className="space-y-2">
                  {tip.examples.map((example, exIndex) => (
                    <li key={exIndex} className="text-sm text-gray-300">
                      <div className="flex">
                        <code className="bg-gray-800 px-2 py-1 rounded text-xs mr-2 whitespace-nowrap">ex</code>
                        <span className="font-mono text-xs">{example}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-gray-900/80 rounded-lg border border-gray-800">
            <p className="text-xs text-gray-400 flex items-start">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2 flex-shrink-0 mt-0.5 text-blue-400" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Tip: Combine operators for powerful searches. Example: "science fiction" AND (authors OR writers) NOT romance</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}