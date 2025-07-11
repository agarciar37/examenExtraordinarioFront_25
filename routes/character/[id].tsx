import { PageProps } from "$fresh/server.ts";
import CharacterDetailIsland from "../../islands/CharacterDetail.tsx";

export default function CharacterPage(props: PageProps) {
  const { id } = props.params;
  return <CharacterDetailIsland id={id} />;
}