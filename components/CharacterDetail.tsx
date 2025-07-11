import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";

interface Props {
    character: Character
}

const CharacterDetail: FunctionComponent<Props> = (props) => {
    const {character} = props
    return (
        <div class="character-detail">
            <p href={"/"}>Volver</p>
            <img src={character.image} alt={character.name}/>
            <p>{character.name}</p>
            <p>Status: {character.status}</p>
            <p>Species: {character.species}</p>
            <p>Gender: {character.gender}</p>
            <p>Origin: {character.origin}</p>
            <p>Location: {character.location}</p>
        </div>
    )
}

export default CharacterDetail;