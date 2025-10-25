import { AppStackColumn, AppStackRow } from '~/core/components/stacks';
import { PokemonDetailsCard } from '../components/details/card';
import { AppButton } from '~/core/components/button';
import type { Route } from '.react-router/types/app/+types/root';
import { useQuerySuspensePokemonDetails } from '~/services/pokemon';
import { validateParamsNumber } from '~/core/validation/number-validation';

//
//

export default function PokemonDetailsPage({ params }: Route.ComponentProps) {
  const { id } = params;

  const pokemonId = validateParamsNumber(id);

  const pokemonDetailsQuery = useQuerySuspensePokemonDetails({
    variables: {
      id: pokemonId,
    },
  });

  return (
    <div className=" bg-pink-50">
      <div className="container block m-auto py-10 h-auto md:h-screen">
        <AppStackRow>
          <AppButton to="/" className="gap-2 mb-4">
            <span>←</span>
            <span>Back to list</span>
          </AppButton>
        </AppStackRow>

        <AppStackColumn className="items-center">
          <PokemonDetailsCard pokemon={pokemonDetailsQuery.data} />
        </AppStackColumn>
      </div>
    </div>
  );
}
