import { AppPagination } from '~/core/components/pagination';
import { useQuerySuspensePokemonList } from '~/services/pokemon';
import { usePagination } from '~/core/hooks/use-pagination';
import { DEFAULT_POKEMON_LIMIT } from '../../types/pokemon.types';
import { PokemonHomeList } from './list';

//
//

interface PokemonHomePaginatedListProps {
  offset: number;
  onPageChange: (offset: number) => void;
}

export const PokemonHomePaginatedList = ({
  offset,
  onPageChange,
}: PokemonHomePaginatedListProps) => {
  const { getCurrentPage, getNextPage } = usePagination(DEFAULT_POKEMON_LIMIT);
  const pokemonListQuery = useQuerySuspensePokemonList({
    variables: { offset, limit: DEFAULT_POKEMON_LIMIT },
  });

  const total = pokemonListQuery.data?.count ?? 0;
  const list = pokemonListQuery.data?.results ?? [];

  const handlePageChange = (page: number) => {
    const nextPage = getNextPage(page);

    onPageChange(nextPage);
  };

  const currentPage = getCurrentPage(offset);

  return (
    <>
      <PokemonHomeList pokedex={list} />

      <AppPagination
        page={currentPage}
        perPage={DEFAULT_POKEMON_LIMIT}
        total={total}
        onChange={handlePageChange}
      />
    </>
  );
};
