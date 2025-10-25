import type { PokemonResourceItem } from '~/api/resources/pokemon/types';
import { PokemonCard } from './card';
import { DEFAULT_POKEMON_LIMIT } from '../../types/pokemon.types';

//
//

interface PokemonHomeListProps {
  pokedex?: PokemonResourceItem[];
  loading?: boolean;
}

export const PokemonHomeList = ({ pokedex = [], loading }: PokemonHomeListProps) => {
  const grid = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';

  if (loading) {
    return (
      <div className={grid}>
        {Array.from({ length: DEFAULT_POKEMON_LIMIT }).map((_, index) => (
          <PokemonCard key={`loader-${index}`} loading />
        ))}
      </div>
    );
  }

  return (
    <>
      <div className={grid}>
        {pokedex.map((pokemon, index) => (
          <PokemonCard pokemon={pokemon} key={`${pokemon.name}-${index}`} />
        ))}
      </div>
    </>
  );
};
