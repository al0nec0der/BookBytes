import Button from '../ui/Button';
import Input from '../ui/Input';

export default function SearchBar() {
  return (
    <form className="flex items-center gap-2">
      <Input type="text" placeholder="e.g., The Lord of the Rings" required />
      <Button type="submit">Search</Button>
    </form>
  );
}