import { AppSpinner } from '~/core/components/spinner';
import { AppStackRow } from '~/core/components/stacks';
import { PokemonCard } from './card';
import { useInfiniteQueryPokemonList } from '~/services/pokemon';
import { AppInfiniteScroll } from '~/core/components/infinite-scroll';
import { AppButton } from '~/core/components/button';
import { useState, useEffect } from 'react';

//
//

const WINDOW_SCROLL_HIGHT = 300;

export const PokemonInfiniteList = () => {
  const { data, fetchNextPage, isFetchingNextPage } = useInfiniteQueryPokemonList();
  const [showBackToTop, setShowBackToTop] = useState(false);

  const allPokemon = data?.pages.flatMap(page => page.results) ?? [];

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > WINDOW_SCROLL_HIGHT);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppInfiniteScroll
        loading={isFetchingNextPage}
        fetchNextPage={fetchNextPage}
        skeleton={
          <AppStackRow className="justify-center items-center gap-3 py-8">
            <AppSpinner />
            <p className="text-neutral-500 text-sm">Loading more pokemon.....</p>
          </AppStackRow>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allPokemon.map((pokemon, index) => (
            <PokemonCard pokemon={pokemon} key={`${pokemon.name}-${index}`} />
          ))}
        </div>
      </AppInfiniteScroll>

      {showBackToTop && (
        <AppButton
          variant="primary"
          className="fixed bottom-6 right-6 z-50 min-w-10 min-h-10 rounded-full shadow-lg"
          onClick={scrollToTop}
        >
          ↑
        </AppButton>
      )}
    </>
  );
};
