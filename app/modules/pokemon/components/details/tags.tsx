import type { PokemonType } from '~/api/resources/pokemon/types';
import { AppChip } from '~/core/components/chip';
import { AppStackRow } from '~/core/components/stacks';

//
//

const pokemonTypeColors = {
  normal: 'bg-zinc-400 border-zinc-600',
  fire: 'bg-rose-500 border-rose-600 text-white',
  water: 'bg-blue-500 border-blue-600',
  electric: 'bg-yellow-400 border-yellow-600',
  grass: 'bg-green-500 border-green-600',
  ice: 'bg-cyan-200 border-cyan-400',
  fighting: 'bg-red-700 border-red-900',
  poison: 'bg-purple-600 border-purple-800',
  ground: 'bg-amber-500 border-amber-600',
  flying: 'bg-indigo-300 border-indigo-500',
  psychic: 'bg-pink-500 border-pink-600',
  bug: 'bg-lime-500 border-lime-300',
  rock: 'bg-amber-700 border-amber-900',
  ghost: 'bg-purple-800 border-purple-900',
  dragon: 'bg-indigo-700 border-indigo-900',
  dark: 'bg-gray-800 border-gray-900',
  steel: 'bg-slate-400 border-slate-600',
  fairy: 'bg-pink-300 border-pink-500',
};

interface PokemonDetailsCardTagsProps {
  types: PokemonType[];
}

export const PokemonDetailsCardTags = ({ types }: PokemonDetailsCardTagsProps) => {
  return (
    <AppStackRow>
      {types.map(type => (
        <AppChip
          label={type.type.name}
          className={type.type?.name ? pokemonTypeColors[type.type?.name] : ''}
        />
      ))}
    </AppStackRow>
  );
};
