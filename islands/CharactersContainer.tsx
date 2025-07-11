import { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "./SearchBar.tsx";
import axios from "axios";

const CharactersContainer: FunctionComponent = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchCharacters = (p: number, name: string) => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${p}&name=${name}`)
      .then((res) => {
        const data = res.data;
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
        setHasNext(Boolean(data.info.next));
        setHasPrev(Boolean(data.info.prev));
      })
      .catch(() => {
        setCharacters([]);
        setHasNext(false);
        setHasPrev(false);
      });
  };

  useEffect(() => {
    fetchCharacters(page, searchQuery);
  }, [page, searchQuery]);

  const handleSearch = (query: string) => {
    setPage(1);
    setSearchQuery(query);
  };

  return (
    <div class="container">
        <h1 class="title">Rick and Morty Characters</h1>
        <SearchBar initialValue={searchQuery} onSearch={handleSearch} />
        <div class="characters">
            {characters.length === 0 ? <p>No se encontraron personajes</p> : (
            characters.map((c) => <CharacterCard key={c.id} character={c} />)
            )}
        </div>
        <div class="pagination">
            {hasPrev && (
            <button class="button" onClick={() => setPage(page - 1)}>
                ← Anterior
            </button>
            )}
            {hasNext && (
            <button class="button" onClick={() => setPage(page + 1)}>
                Siguiente →
            
            </button>
            )}
        </div>
        </div>
    );
};

export default CharactersContainer;