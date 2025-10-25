import type { PokemonDetailsResource } from '~/api/resources/pokemon/types';
import { AppChip } from '~/core/components/chip';
import { AppProgressBar } from '~/core/components/progress-bar';
import { AppStackColumn, AppStackRow } from '~/core/components/stacks';
import { PokemonDetailsCardTags } from './tags';

//
//

interface PokemonDetailsCardProps {
  pokemon?: PokemonDetailsResource;
}

export const PokemonDetailsCard = ({ pokemon }: PokemonDetailsCardProps) => {
  const pokemonInfo = {
    id: pokemon?.id,
    image: pokemon?.sprites?.other?.['official-artwork']?.front_default,
    name: pokemon?.name,
    height: pokemon?.height,
    weight: pokemon?.weight,
    experience: pokemon?.base_experience,
    abilities: pokemon?.abilities,
    stats: pokemon?.stats,
    types: pokemon?.types,
  };

  return (
    <div className="bg-white min-w-[70%] overflow-hidden rounded-lg border border-neutral-100 shadow-sm">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white rounded-t-xl p-6 text-center">
        <p className="text-2xl font-bold capitalize">⚡ {pokemonInfo.name}</p>

        <p className="text-sm">#{pokemonInfo.id}</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 p-5">
        <AppStackColumn className="items-center gap-5">
          <img
            src={pokemonInfo.image}
            className="bg-neutral-100 rounded-full h-72 p-2"
            loading="lazy"
            alt="pokemon"
          />

          <PokemonDetailsCardTags types={pokemon?.types || []} />

          <AppStackRow className="justify-center">
            <AppStackColumn className="bg-neutral-100 p-2 rounded-lg text-center min-w-36 py-3 gap-1">
              <p className="text-xs text-neutral-500">Height</p>
              <p className="font-bold text-lg">{pokemonInfo.height}m</p>
            </AppStackColumn>

            <AppStackColumn className="bg-neutral-100 p-2 rounded-lg text-center min-w-36 py-3 gap-1">
              <p className="text-xs text-neutral-500">Weight</p>
              <p className="font-bold text-lg">{pokemonInfo.weight} Kg</p>
            </AppStackColumn>
          </AppStackRow>
        </AppStackColumn>

        <AppStackColumn className="gap-4 mt-4 md:mt-0">
          <AppStackColumn>
            <p className="text-xl font-bold">Base state</p>

            <AppStackColumn className="gap-1.5">
              {pokemonInfo?.stats?.map((statItem, index) => (
                <AppProgressBar
                  key={`stats-${index}`}
                  label={statItem.stat.name}
                  value={statItem.base_stat}
                  percentage={statItem.base_stat}
                />
              ))}
            </AppStackColumn>
          </AppStackColumn>

          <AppStackColumn>
            <p className="text-xl font-bold">Abilities</p>

            <AppStackRow className="flex-wrap">
              {pokemonInfo.abilities?.map((ability, index) => (
                <div key={`ability-${index}`}>
                  {ability.is_hidden ? (
                    <p className="text-neutral-400 text-xs">(Hidden)</p>
                  ) : (
                    <AppChip label={ability.ability?.name} />
                  )}
                </div>
              ))}
            </AppStackRow>
          </AppStackColumn>

          <AppStackColumn>
            <p className="text-xl font-bold">Base experience</p>
            <p className="text-2xl text-purple-600 font-bold">{pokemonInfo.experience}XP</p>
          </AppStackColumn>
        </AppStackColumn>
      </div>
    </div>
  );
};
