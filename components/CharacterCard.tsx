import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";

interface Props {
    character: Character
}

const CharacterCard: FunctionComponent<Props> = (props) => {
    const {character} = props;
    return (
        <div class="character-card">
            <a href={`/character/${character.id}`}>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name}/>
            </a>
        </div>
    )
}

export default CharacterCard