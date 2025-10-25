import { createInfiniteQuery, createSuspenseQuery } from 'react-query-kit';
import { PokemonResources } from '~/api/resources';
import type * as PokemonTypes from '~/api/resources/pokemon/types';
import { DEFAULT_POKEMON_LIMIT } from '~/modules/pokemon/types/pokemon.types';

//
//

const key = 'pokemon';

export const useQuerySuspensePokemonList = createSuspenseQuery<
  PokemonTypes.PokemonResourceListResponse,
  PokemonTypes.PokemonResourceQuery
>({
  queryKey: [key, 'paginated'],
  fetcher: PokemonResources.get,
});

export const useQuerySuspensePokemonDetails = createSuspenseQuery<
  PokemonTypes.PokemonDetailsResource,
  PokemonTypes.PokemonDetailsResourceQuery
>({
  queryKey: [key, 'details'],
  fetcher: PokemonResources.details,
});

export const useInfiniteQueryPokemonList = createInfiniteQuery<
  PokemonTypes.PokemonResourceListResponse,
  number
>({
  queryKey: [key, 'infinite'],
  initialPageParam: 0,
  fetcher: (_, queryArgs) =>
    PokemonResources.get({
      offset: queryArgs.pageParam,
      limit: DEFAULT_POKEMON_LIMIT,
    }),
  getNextPageParam: (lastPage, _allPages, lastPageParam: number) => {
    const nextOffset = lastPageParam + DEFAULT_POKEMON_LIMIT;

    if (nextOffset >= (lastPage.count ?? 0)) return undefined;

    return nextOffset;
  },
});
