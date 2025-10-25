import { NavLink } from 'react-router';
import { AppStackColumn } from '~/core/components/stacks';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { AppSkeleton } from '~/core/components/skeleton';

//
//

interface PokemonCardProps {
  loading?: boolean;
}

export const PokemonCard = ({ loading }: PokemonCardProps) => {
  const pokemonId = 'dummyId';

  if (loading) return <PokemonCardLoader />;

  return (
    <NavLink to={`/${pokemonId}`} viewTransition>
      <AppStackColumn className="w-full bg-white border border-neutral-100 rounded-lg p-5 shadow-sm items-center transition-transform duration-200 hover:-translate-y-1">
        <LazyLoadImage
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          className="bg-neutral-100 rounded-lg min-h-72 object-contain"
          alt="pokemon"
          effect="opacity"
        />

        <div className="text-center">
          <p className="font-semibold">Pokemon name</p>
          <p className="text-neutral-400 text-sm">#123</p>
        </div>
      </AppStackColumn>
    </NavLink>
  );
};

const PokemonCardLoader = () => {
  return (
    <AppStackColumn className="bg-white border border-neutral-100 rounded-lg p-5 shadow-sm w-76">
      <AppSkeleton className="w-full h-60 mb-2" />
      <AppSkeleton className="h-2 w-[80%]" />
      <AppSkeleton className="h-2 w-[40%]" />
    </AppStackColumn>
  );
};
