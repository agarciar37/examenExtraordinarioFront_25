import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

interface Props {
  character: Character;
}

const CharacterCard: FunctionComponent<Props> = ({ character }) => (
  <div class="character-card">
    <a href={`/character/${character.id}`}>
      <h1>{character.name}</h1>
      <img src={character.image} alt={character.name} />
    </a>
  </div>
);

export default CharacterCard;
