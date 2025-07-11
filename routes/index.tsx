import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios"
import { Character } from "../types.ts";
import CharactersContainer from "../islands/CharactersContainer.tsx";

interface Data {
    characters: Character[]
}

export const handler: Handlers= {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const url = "https://rickandmortyapi.com/api/character"
        try {
            const response = await axios.get(url)
            const characters = response.data.results.map((char: any) => ({
                id: char.id,
                name: char.name,
                status: char.status,
                species: char.species,
                gender: char.gender,
                origin: char.origin.name,
                location: char.location.name,
                image: char.image
            })) as Character[];
            return ctx.render({characters})
        } catch (e) {
            return new Response("Error fetching data")
        }
    }
}

export default (props: PageProps<Data>) => (
    <CharactersContainer characters={props.data.characters}/>
)