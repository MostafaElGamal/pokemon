import { api } from '../../client';
import type * as PokemonResourceTypes from './types';

//
//

const BASE_URL = 'pokemon';

export const PokemonResources = {
  async get(query: PokemonResourceTypes.PokemonResourceQuery) {
    return await api
      .get<PokemonResourceTypes.PokemonResourceListResponse>(BASE_URL, {
        searchParams: {
          ...query,
        },
      })
      .json();
  },

  async details(query: PokemonResourceTypes.PokemonDetailsResourceQuery) {
    return await api
      .get<PokemonResourceTypes.PokemonDetailsResource>(`${BASE_URL}/${query.id}`)
      .json();
  },
};
