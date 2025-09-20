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
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <Input 
        type="text" 
        placeholder="e.g., The Lord of the Rings" 
        required 
        value={query} 
        onChange={(e) => setQuery(e.target.value)} 
      />
      <Button type="submit">Search</Button>
    </form>
  );
}