import { Handlers, PageProps } from "$fresh/server.ts";
import CharacterDetail from "../../components/CharacterDetail.tsx";
import { Character } from "../../types.ts";
import axios from "axios";
export const handler: Handlers<Character | null> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;
    const url = `https://rickandmortyapi.com/api/character/${id}`
    const res = await axios.get(url)
    const character: Character = res.data;
    return ctx.render(character);
  },
};

export default function CharacterPage({ data }: PageProps<Character | null>) {
  if (!data) {
    return <p>Personaje no encontrado</p>;
  }
  return <CharacterDetail character={data} />;
}