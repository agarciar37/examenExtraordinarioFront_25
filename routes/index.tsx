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
            const response = await axios.get<Character[]>(url)
            return ctx.render({characters: response.data})
        } catch (e) {
            return new Response("Error fetching data")
        }
    }
}

export default (props: PageProps<Data>) => (
    <CharactersContainer characters={props.data.characters}/>
)