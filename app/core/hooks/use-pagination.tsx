import { useCallback } from 'react';

//
//

export const usePagination = (limit: number) => {
  const getCurrentPage = useCallback((offset: number) => Math.floor(offset / limit), []);

  const getNextPage = useCallback((page: number) => page * limit, []);

  return {
    getNextPage,
    getCurrentPage,
  };
};
