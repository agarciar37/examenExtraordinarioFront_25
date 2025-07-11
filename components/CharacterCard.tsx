import { FunctionComponent } from "preact/src/index.d.ts";
import { Character } from "../types.ts";

interface Props {
    character: Character
}

const CharacterCard: FunctionComponent<Props> = (props) => {
    const {character} = props;
    return (
        <div class="character-card">
            <h1>
                <p>{character.name}</p>
                <img src={character.image} alt={character.name}/>
            </h1>
        </div>
    )
}

export default CharacterCard