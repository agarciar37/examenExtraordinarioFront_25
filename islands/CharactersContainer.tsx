import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "./SearchBar.tsx";

const CharactersContainer: FunctionComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [prevPage, setPrevPage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const url = new URL(window.location.href);
    const page = url.searchParams.get("page") ?? "1";
    const name = url.searchParams.get("name") ?? "";
    setSearchQuery(name);
    fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`)
      .then((res) => res.json())
      .then((data) => {
        const chars = data.results.map((char: any) => ({
          id: char.id,
          name: char.name,
          status: char.status,
          species: char.species,
          gender: char.gender,
          origin: char.origin,
          location: char.location,
          image: char.image,
        })) as Character[];
        setCharacters(chars);
        setNextPage(data.info.next);
        setPrevPage(data.info.prev);
      })
      .catch(() => {
        setCharacters([]);
        setNextPage(null);
        setPrevPage(null);
      });
  }, []);
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
