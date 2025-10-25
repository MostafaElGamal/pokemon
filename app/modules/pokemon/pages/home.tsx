import { AppButton } from '~/core/components/button';
import { AppStackColumn, AppStackRow } from '~/core/components/stacks';
import { useState } from 'react';
import { PokemonHomePaginatedList } from '../components/home/paginated-list';
import { PokemonInfiniteList } from '../components/home/infinite-list';
import { PokemonPaginationTypeEnum } from '../types/pokemon.types';
import { cn } from '~/core/helpers/cn';

//
//

export function meta() {
  return [{ title: 'Pokédex' }, { name: 'description', content: 'Welcome to pokédex collection!' }];
}

export default function PokemonHomePage() {
  const [paginationType, setPaginationType] = useState<PokemonPaginationTypeEnum>(
    PokemonPaginationTypeEnum.normal,
  );

  const handleUpdatePaginationType = (type: PokemonPaginationTypeEnum) => {
    setPaginationType(type);
  };

  const inNormalPagination = paginationType === PokemonPaginationTypeEnum.normal;

  return (
    <div
      className={cn(
        {
          ['bg-emerald-50']: inNormalPagination,
          ['bg-amber-50']: !inNormalPagination,
        },
        'py-5',
      )}
    >
      <div className="container">
        <AppStackColumn className="items-center gap-5">
          <AppStackColumn className="text-center">
            <p className="text-3xl font-bold">⚡ Pokédex</p>

            <p className="text-neutral-500">Discover and explore Pokemon with infinite scroll</p>
          </AppStackColumn>

          <AppStackRow>
            <AppButton
              variant={paginationType === PokemonPaginationTypeEnum.normal ? 'primary' : 'default'}
              onClick={() => handleUpdatePaginationType(PokemonPaginationTypeEnum.normal)}
            >
              Page control
            </AppButton>

            <AppButton
              variant={paginationType === PokemonPaginationTypeEnum.scroll ? 'primary' : 'default'}
              onClick={() => handleUpdatePaginationType(PokemonPaginationTypeEnum.scroll)}
            >
              infinite scroll
            </AppButton>
          </AppStackRow>

          {paginationType === PokemonPaginationTypeEnum.normal ? (
            <PokemonHomePaginatedList />
          ) : (
            <PokemonInfiniteList />
          )}
        </AppStackColumn>
      </div>
    </div>
  );
}
