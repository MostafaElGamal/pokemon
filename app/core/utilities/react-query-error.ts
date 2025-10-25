import type { HTTPError } from 'ky';
import toast from 'react-hot-toast';

//
//

export const globalErrorHandler = async (error: Error) => {
  if (error instanceof Error) {
    const httpError = error as HTTPError;
    try {
      const response = await httpError.response.clone().json();
      if (response?.errors) {
        Object.values(response.errors).forEach(value => {
          toast.error(String(value));
        });
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error('Error in error handler:', e);
    }
  }
};
