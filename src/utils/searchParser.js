/**
 * Parse a search query string with Boolean operators and advanced syntax
 * @param {string} query - The raw search query string
 * @returns {Object} Parsed query components
 */
export function parseSearchQuery(query) {
  if (!query || typeof query !== 'string') {
    return { terms: [], phrases: [], excludes: [], groups: [], wildcards: [] };
  }

  // Normalize whitespace
  query = query.trim();
  
  // Extract quoted phrases first
  const phrases = [];
  const phraseRegex = /"([^"]*)"/g;
  let match;
  while ((match = phraseRegex.exec(query)) !== null) {
    if (match[1].trim()) {
      phrases.push(match[1].trim());
    }
  }
  
  // Remove quoted phrases from query for further processing
  let processedQuery = query.replace(phraseRegex, '');
  
  // Extract terms with NOT operator
  const excludes = [];
  const notRegex = /\bNOT\s+([^\s]+)/gi;
  processedQuery = processedQuery.replace(notRegex, (match, term) => {
    if (term.trim()) {
      excludes.push(term.trim());
    }
    return '';
  });
  
  // Extract terms with wildcards
  const wildcards = [];
  const wildcardRegex = /(\w+\*)/g;
  let wildcardMatch;
  while ((wildcardMatch = wildcardRegex.exec(processedQuery)) !== null) {
    if (wildcardMatch[1].trim()) {
      wildcards.push(wildcardMatch[1].trim());
    }
  }
  
  // Extract groups in parentheses
  const groups = [];
  const groupRegex = /\(([^)]+)\)/g;
  let groupMatch;
  while ((groupMatch = groupRegex.exec(processedQuery)) !== null) {
    if (groupMatch[1].trim()) {
      // Parse group content for AND/OR operators
      const groupContent = groupMatch[1].trim();
      const groupTerms = groupContent.split(/\s+(AND|OR)\s+/i);
      groups.push({
        terms: groupTerms.filter(term => term && !/^(AND|OR)$/i.test(term)).map(term => term.trim()),
        operator: groupTerms.find(op => /^(AND|OR)$/i.test(op)) || 'AND'
      });
    }
  }
  
  // Remove groups from query for final term extraction
  processedQuery = processedQuery.replace(groupRegex, '');
  
  // Extract remaining individual terms (AND is implicit)
  const terms = processedQuery
    .split(/\s+/)
    .filter(term => term && !/^(AND|OR)$/i.test(term))
    .map(term => term.trim())
    .filter(term => term.length > 0);
  
  return {
    terms,
    phrases,
    excludes,
    groups,
    wildcards
  };
}

/**
 * Convert parsed query components to Open Library API query string
 * @param {Object} parsedQuery - Parsed query components
 * @param {string} searchType - Type of search (title, author, subject)
 * @returns {string} Formatted query string for Open Library API
 */
export function buildOpenLibraryQuery(parsedQuery, searchType) {
  const queryParts = [];
  
  // Add individual terms (implicit AND)
  if (parsedQuery.terms.length > 0) {
    queryParts.push(parsedQuery.terms.join(' '));
  }
  
  // Add phrases
  if (parsedQuery.phrases.length > 0) {
    parsedQuery.phrases.forEach(phrase => {
      queryParts.push(`"${phrase}"`);
    });
  }
  
  // Add groups with proper operators
  if (parsedQuery.groups.length > 0) {
    parsedQuery.groups.forEach(group => {
      if (group.terms.length > 0) {
        const groupQuery = group.terms.join(` ${group.operator.toLowerCase()} `);
        queryParts.push(`(${groupQuery})`);
      }
    });
  }
  
  // Add wildcards
  if (parsedQuery.wildcards.length > 0) {
    queryParts.push(...parsedQuery.wildcards);
  }
  
  // Join all parts with spaces (implicit AND between groups)
  let queryString = queryParts.join(' ');
  
  // Add excludes at the end
  if (parsedQuery.excludes.length > 0) {
    parsedQuery.excludes.forEach(exclude => {
      queryString += ` -${exclude}`;
    });
  }
  
  return queryString;
}

/**
 * Format search tips for user guidance
 * @returns {Array} Array of search tip objects
 */
export function getSearchTips() {
  return [
    {
      title: "Boolean Operators",
      examples: [
        "fantasy AND dragons - Find books with both terms",
        "mystery OR thriller - Find books with either term",
        "fiction NOT romance - Exclude romance books"
      ]
    },
    {
      title: "Exact Phrases",
      examples: [
        '"The Lord of the Rings" - Match the exact phrase',
        '"science fiction" AND authors - Find authors of sci-fi'
      ]
    },
    {
      title: "Grouping Terms",
      examples: [
        "(fantasy OR sci-fi) AND (adventure OR mystery)",
        "(shakespeare NOT hamlet) AND plays"
      ]
    },
    {
      title: "Wildcards",
      examples: [
        "librar* - Match library, librarian, libraries",
        "child* - Match child, children, childhood"
      ]
    }
  ];
}

/**
 * Get simple Boolean operator examples for quick reference
 * @returns {Array} Array of simple examples
 */
export function getBooleanExamples() {
  return [
    "Dragons AND Magic",
    "Tolkien OR Lewis", 
    '"Harry Potter"',
    "Cat NOT Dog",
    "child*"
  ];
}