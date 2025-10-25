import { AppChip } from '~/core/components/chip';
import { AppProgressBar } from '~/core/components/progress-bar';
import { AppStackColumn, AppStackRow } from '~/core/components/stacks';

//
//

export const PokemonDetailsCard = () => {
  return (
    <div className="bg-white min-w-[70%] overflow-hidden rounded-lg border border-neutral-100 shadow-sm">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white rounded-t-xl p-6 text-center">
        <p className="text-2xl font-bold capitalize">⚡ PokeName</p>

        <p className="text-sm">#123213</p>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2 p-5">
        <AppStackColumn className="items-center gap-5">
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
            className="bg-neutral-100 rounded-full h-72 p-2"
            loading="lazy"
            alt="pokemon"
          />

          <AppStackRow className="justify-center">
            <AppStackColumn className="bg-neutral-100 p-2 rounded-lg text-center min-w-36 py-3 gap-1">
              <p className="text-xs text-neutral-500">Height</p>
              <p className="font-bold text-lg">12m</p>
            </AppStackColumn>

            <AppStackColumn className="bg-neutral-100 p-2 rounded-lg text-center min-w-36 py-3 gap-1">
              <p className="text-xs text-neutral-500">Weight</p>
              <p className="font-bold text-lg">12 Kg</p>
            </AppStackColumn>
          </AppStackRow>
        </AppStackColumn>

        <AppStackColumn className="gap-4 mt-4 md:mt-0">
          <AppStackColumn>
            <p className="text-xl font-bold">Base state</p>

            <AppStackColumn className="gap-1.5">
              <AppProgressBar label="HP" value={21} percentage={50} />
            </AppStackColumn>
          </AppStackColumn>

          <AppStackColumn>
            <p className="text-xl font-bold">Abilities</p>

            <AppStackRow className="flex-wrap">
              <p className="text-neutral-400 text-xs">(Hidden)</p>
              <AppChip label="Label" />
            </AppStackRow>
          </AppStackColumn>

          <AppStackColumn>
            <p className="text-xl font-bold">Base experience</p>
            <p className="text-2xl text-purple-600 font-bold">23XP</p>
          </AppStackColumn>
        </AppStackColumn>
      </div>
    </div>
  );
};
