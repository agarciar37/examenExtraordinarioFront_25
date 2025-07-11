import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "./SearchBar.tsx";

interface Props {
  characters: Character[];
  nextPage: string | null;
  prevPage: string | null;
  searchQuery: string;
}

const CharactersContainer: FunctionComponent<Props> = ({
  characters,
  nextPage,
  prevPage,
  searchQuery,
}) => {
  const getPageNumber = (url: string | null) => {
    if (!url) return null;
    const parsed = new URL(url);
    return parsed.searchParams.get("page");
  };

  return (
    <div class="container">
        <h1 class="title">Rick and Morty Characters</h1>
        <SearchBar initialValue={searchQuery} />
        <div class="characters">
            {characters.length === 0 ? <p>No se encontraron personajes</p> : (
            characters.map((c) => <CharacterCard key={c.id} character={c} />)
            )}
        </div>
        <div class="pagination">
            {prevPage && (
            <a
                class="button"
                href={`/?page=${getPageNumber(prevPage)}&name=${searchQuery}`}
            >
                ← Anterior
            </a>
            )}
            {nextPage && (
            <a
                class="button"
                href={`/?page=${getPageNumber(nextPage)}&name=${searchQuery}`}
            >
                Siguiente →
            </a>
            )}
        </div>
        </div>
    );
};

export default CharactersContainer;
