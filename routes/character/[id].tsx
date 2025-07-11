import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../../types.ts";
import CharacterDetail from "../../components/CharacterDetail.tsx";

interface Data {
    character: Character;
}

export const handler: Handlers = {
    GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
        const {id} = ctx.params
        const url = `https://rickandmortyapi.com/api/character/${id}`
        try {
            const response = await axios.get<Character>(url)
            return ctx.render({character: response.data})
        } catch (e) {
            return new Response ("Error fetching data")
        }
    }
}

export default (props: PageProps<Data>) => {
    return <CharacterDetail character={props.data.character}/>
}