import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import SearchTypeSelector from "./SearchTypeSelector";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("title");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query, searchType);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl mx-auto">
      <div className="w-full">
        <Input 
          type="text" 
          placeholder={
            searchType === 'author' ? "e.g., J.K. Rowling" :
            searchType === 'subject' ? "e.g., Fantasy" :
            "e.g., The Lord of the Rings"
          }
          required 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
      </div>
      <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
        <SearchTypeSelector 
          searchType={searchType} 
          onSearchTypeChange={setSearchType} 
        />
        <Button type="submit" className="w-full sm:w-auto">Search</Button>
      </div>
    </form>
  );
}