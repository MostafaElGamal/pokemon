import { AppStackColumn, AppStackRow } from '~/core/components/stacks';
import { PokemonDetailsCard } from '../components/details/card';
import { AppButton } from '~/core/components/button';
import type { Route } from '.react-router/types/app/+types/root';

//
//

export default function PokemonDetailsPage({ params }: Route.ComponentProps) {
  const { id } = params;

  return (
    <div className=" bg-pink-50">
      <div className="container block m-auto py-10 h-auto md:h-screen">
        <AppStackRow>
          <AppButton to="/" className="gap-2 mb-4">
            <span>←</span>
            <span>Back to list {id}</span>
          </AppButton>
        </AppStackRow>

        <AppStackColumn className="items-center">
          <PokemonDetailsCard />
        </AppStackColumn>
      </div>
    </div>
  );
}
