interface Props {
  initialValue: string;
}

const SearchBar = ({ initialValue }: Props) => {
  return (
    <form method="GET" action="/" class="search-form">
      <input
        type="text"
        name="name"
        class="search-input"
        placeholder="Buscar personaje..."
        value={initialValue}
      />
      <button type="submit" class="button">Buscar</button>
    </form>
  );
};

export default SearchBar;
