import { env } from './env';

/**
 * @description Serve responses from fast-language server for `useSWR` hook.
 * @param paths
 * @returns
 */
export const swrFetcher = (...paths: string[]) => {
  return fetch(`${env.server.host}/${paths.join('/')}`).then((res) => {
    // in development mode, simulate a delay
    if (process.env.NODE_ENV === 'development') {
      return new Promise((resolve) => {
        setTimeout(() => {
          return resolve(res.json());
        }, 3000);
      });
    }

    /*------------*/

    return res.json();
  });
};
