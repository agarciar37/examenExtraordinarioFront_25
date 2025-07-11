import { useState } from "preact/hooks";

interface Props {
  initialValue: string;
  onSearch: (query: string) => void;
}

const SearchBar = ({ initialValue, onSearch }: Props) => {
  const [value, setValue] = useState(initialValue);

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form class="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        class="search-input"
        placeholder="Buscar personaje..."
        defaultValue={initialValue}
        value={value}
        onInput={(e) => setValue((e.target as HTMLInputElement).value)}
      />
      <button type="submit" class="button">Buscar</button>
    </form>
  );
};

export default SearchBar;