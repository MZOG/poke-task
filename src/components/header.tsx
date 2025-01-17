import Link from "next/link";
import Container from "./container";

export default function Header() {
  return (
    <header className="py-5 border-b">
      <Container>
        <Link href="/">home</Link>
      </Container>
    </header>
  );
}
