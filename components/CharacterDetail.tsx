import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

interface Props {
  character: Character;
}

const CharacterDetail: FunctionComponent<Props> = ({ character }) => {
  return (
    <div class="character-detail">
      <a class="back-link" href="/">← Volver</a>
      <img src={character.image} alt={character.name} />
      <div class="character-info">
        <ul>
          <li><strong>Nombre:</strong> {character.name}</li>
          <li><strong>Status:</strong> {character.status}</li>
          <li><strong>Species:</strong> {character.species}</li>
          <li><strong>Gender:</strong> {character.gender}</li>
          <li><strong>Origin:</strong> {character.origin.name}</li>
          <li><strong>Location:</strong> {character.location.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterDetail;
