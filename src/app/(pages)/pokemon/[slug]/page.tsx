import Container from "@/components/container";
import PokemonPage from "@/components/pokemon-page";
import Search from "@/components/search-form";

interface PokemonProps {
  name: string;
}

async function getPokemon(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_POKEMON_API}/${slug}`
    );

    const pokemon: PokemonProps = await response.json();
    return pokemon;
  } catch (error) {
    console.log(error);
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pokemon = await getPokemon(slug);

  if (pokemon) {
    return {
      title: pokemon.name,
    };
  } else {
    return {
      title: "Sorry, not found.",
    };
  }
}

export default async function Page() {

  return (
    <Container>
      <Search />
      <PokemonPage />
    </Container>
  );
}
