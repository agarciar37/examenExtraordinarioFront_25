import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";

interface Props {
    characters: Character[]
}

const CharactersContainer: FunctionComponent<Props> = (props) => {
    const {characters} = props;
    return(
        <div class="characters">
            {characters.map((c) => 
                <CharacterCard key={c.id} character={c}/>
            )}
        </div>
    )
}

export default CharactersContainer;