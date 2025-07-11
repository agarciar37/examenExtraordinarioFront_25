import { FunctionComponent } from "preact";
import { Character } from "../types.ts";

interface Props {
  character?: Character | null;
}

const CharacterDetail: FunctionComponent<Props> = ({ character }) => {
  if (!character) {
    return <p>Cargando...</p>;
  }
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
