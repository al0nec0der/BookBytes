import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) onSearch(query);
  };
  
  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-2xl mx-auto">
      <div className="w-full">
        <Input 
          type="text" 
          placeholder="e.g., The Lord of the Rings" 
          required 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
        />
      </div>
      <div className="w-full sm:w-auto">
        <Button type="submit" className="w-full sm:w-auto">Search</Button>
      </div>
    </form>
  );
}