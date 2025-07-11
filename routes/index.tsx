import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import axios from "axios";
import { Character } from "../types.ts";
import CharactersContainer from "../islands/CharactersContainer.tsx";

interface Data {
  characters: Character[];
  nextPage: string | null;
  prevPage: string | null;
  searchQuery: string;
}

export const handler: Handlers = {
  GET: async (req: Request, ctx: FreshContext<unknown, Data>) => {
    const url = new URL(req.url);
    const page = url.searchParams.get("page") ?? "1";
    const name = url.searchParams.get("name") ?? "";
    const apiUrl = `https://rickandmortyapi.com/api/character?page=${page}&name=${name}`;

    try {
      const response = await axios.get(apiUrl);
      const characters = response.data.results.map((char: any) => ({
        id: char.id,
        name: char.name,
        status: char.status,
        species: char.species,
        gender: char.gender,
        origin: char.origin,
        location: char.location,
        image: char.image,
      })) as Character[];

      return ctx.render({
        characters,
        nextPage: response.data.info.next,
        prevPage: response.data.info.prev,
        searchQuery: name,
      });
    } catch {
      return ctx.render({
        characters: [],
        nextPage: null,
        prevPage: null,
        searchQuery: name,
      });
    }
  },
};

export default (props: PageProps<Data>) => (
  <CharactersContainer {...props.data} />
);
