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