import { HTTPError } from 'ky';

//
//

export const errorInterceptor = async (error: HTTPError) => {
  if (error.response.status === 401) {
    window.location.href = '/';
  }

  return error;
};
