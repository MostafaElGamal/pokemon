import { dehydrate, QueryClient } from '@tanstack/react-query';
import { globalErrorHandler } from '~/core/utilities/react-query-error';

//
//

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 180_000, // 3 minutes
      retry: 0, // retries handled by Ky
    },
    mutations: {
      onError: globalErrorHandler,
    },
  },
});

export const dehydratedState = dehydrate(queryClient);
