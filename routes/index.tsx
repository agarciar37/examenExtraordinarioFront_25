import { PageProps } from "$fresh/server.ts";
import CharactersContainer from "../islands/CharactersContainer.tsx";

export default function Home(_props: PageProps) {
  return <CharactersContainer />;
}