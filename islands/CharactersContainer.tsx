import { FunctionComponent } from "preact";
import { Character } from "../types.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import SearchBar from "./SearchBar.tsx";
import { useComputed } from "@preact/signals";
import { searchTerm } from "../utils/charactersSignal.ts";

interface Props {
    characters: Character[]
}

const CharactersContainer: FunctionComponent<Props> = (props) => {
    const {characters} = props;
    const filteredCharacters = useComputed(() => characters.filter((c)=>c.name.toLowerCase().includes(searchTerm.value.toLowerCase())))
    return(
        <div class="characters">
            <SearchBar/>
            {
                filteredCharacters.value.length === 0? (
                    <p>No se encontraron Personajes</p>
                ): (filteredCharacters.value.map((c) => (
                    <CharacterCard key={c.id} character={c}/>
                )))
            }
        </div>
    )
}

export default CharactersContainer;