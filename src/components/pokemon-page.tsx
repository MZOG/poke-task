"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type PokemonData = {
  name: string;
  sprites: {
    other: { dream_world: { front_default: string } };
  };
};

export default function PokemonPage() {
  const { slug } = useParams() as { slug: string };
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;

    const fetchPokemon = async () => {
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_POKEMON_API}/${slug}`
        );
        if (!response.ok) {
          throw new Error("Pokemon not found");
        }
        const data = await response.json();
        setPokemon(data);
      } catch (error: unknown) {
        setError(true);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [slug]);

  if (loading)
    return (
      <div className="flex flex-col gap-5 items-center justify-center border p-5 rounded-xl">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col gap-5 items-center justify-center border p-5 rounded-xl">
        <p>Error: Pokémon not found.</p>
      </div>
    );

  const pokemonName = pokemon?.name || "";
  const pokemonImage = pokemon?.sprites.other.dream_world.front_default || "";

  return (
    <div>
      {pokemon && (
        <div className="flex flex-col gap-5 items-center justify-center border p-5 rounded-xl">
          <h1 className="text-xl capitalize">{pokemonName}</h1>
          <div className="relative w-36 h-36">
            <Image src={pokemonImage} alt={pokemonName} fill />
          </div>
        </div>
      )}
    </div>
  );
}
