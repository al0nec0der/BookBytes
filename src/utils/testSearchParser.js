// Test cases for the search parser

import { parseSearchQuery, buildOpenLibraryQuery } from './searchParser';

// Test cases
const testCases = [
  {
    input: 'fantasy AND dragons',
    description: 'Simple AND query'
  },
  {
    input: 'mystery OR thriller',
    description: 'Simple OR query'
  },
  {
    input: 'fiction NOT romance',
    description: 'Simple NOT query'
  },
  {
    input: '"The Lord of the Rings"',
    description: 'Exact phrase query'
  },
  {
    input: '(fantasy OR sci-fi) AND (adventure OR mystery)',
    description: 'Complex grouped query'
  },
  {
    input: 'librar*',
    description: 'Wildcard query'
  },
  {
    input: '"science fiction" AND authors NOT romance',
    description: 'Mixed operators query'
  }
];

console.log('Search Parser Test Results:');
console.log('==========================');

testCases.forEach((testCase, index) => {
  console.log(`\n${index + 1}. ${testCase.description}`);
  console.log(`Input: ${testCase.input}`);
  
  const parsed = parseSearchQuery(testCase.input);
  console.log('Parsed:', parsed);
  
  const queryString = buildOpenLibraryQuery(parsed);
  console.log('Open Library Query:', queryString);
});