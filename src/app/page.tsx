import Container from "@/components/container";
import Search from "@/components/search-form";

export default function Home() {
  return (
    <Container>
      <Search />

      <div className="flex flex-col gap-5 items-center justify-center border p-5 rounded-xl">
        <p>Type to search for pokemon or click on example.</p>
      </div>
    </Container>
  );
}
