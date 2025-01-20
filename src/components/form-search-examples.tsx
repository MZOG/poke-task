import Link from "next/link";
import { usePathname } from 'next/navigation'

const examples = [
  "charmander",
  "charizard",
  "squirtle",
  "pikachu",
  "machoke",
  "snorlax",
  "metapod",
  "blastoise",
  "weedle",
  "rattata",
];

export default function FormSearchExamples() {
  const pathname = usePathname();

  return (
    <div className="mb-5">
      <p className="text-sm text-gray-500">examples:</p>
      <ul className="w-full flex gap-3">
        {examples.map((pokemon, index) => {
          return (
            <Link
              key={index}
              className={`hover:underline underline-offset-2 capitalize text-sm ${pathname === `/pokemon/${pokemon}` && 'text-indigo-600'}`}
              href={`/pokemon/${pokemon}`}
            >
              {pokemon}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}
