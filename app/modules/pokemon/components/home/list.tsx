import { PokemonCard } from './card';

//
//

interface PokemonHomeListProps {
  pokedex?: Record<string, string>[];
  loading?: boolean;
}

export const PokemonHomeList = ({ pokedex = [], loading }: PokemonHomeListProps) => {
  const grid = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

  const items = pokedex.length ? pokedex : Array.from({ length: 12 });

  return (
    <div className={grid}>
      {items.map((_, index) => (
        <PokemonCard key={`pokemon-${index}`} loading={loading} />
      ))}
    </div>
  );
};
