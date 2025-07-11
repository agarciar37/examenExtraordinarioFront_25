import { Character } from "../types.ts";
import CharacterDetail from "../components/CharacterDetail.tsx";
import { useState, useEffect } from "preact/hooks/src/index.js";
import { FunctionComponent } from "preact/src/index.js";

interface Props {
  id: string;
}

const CharacterDetailIsland: FunctionComponent<Props> = ({ id }) => {
  const [character, setCharacter] = useState<Character | null>(null);

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch(() => {});
  }, [id]);

  if (!character) {
    return <p>Cargando...</p>;
  }

  return <CharacterDetail character={character} />;
};

export default CharacterDetailIsland;