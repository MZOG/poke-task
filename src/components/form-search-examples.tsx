import Link from "next/link";

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
  return (
    <div className="mb-5">
      <p className="text-sm text-gray-500">examples:</p>
      <ul className="w-full flex gap-3">
        {examples.map((pokemon, index) => {
          return (
            <Link
              key={index}
              className="hover:underline underline-offset-2 capitalize text-sm"
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
