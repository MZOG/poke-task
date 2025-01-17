import Container from "@/components/container";
import Search from "@/components/search-form";

export default function PokemonDefault() {
  return (
    <Container>
      <Search />

      <div className="flex flex-col gap-5 items-center justify-center border p-5 rounded-xl">
        <p>Please select your Pokemon to display info.</p>
      </div>
    </Container>
  );
}
