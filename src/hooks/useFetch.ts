import useSWR from 'swr';
import { swrFetcher } from '../utils/swr-fetcher';

/**
 * @description A wrapper over `useSWR` with some default options.
 * @param path
 * @returns
 */
export const useFetch = <Response extends object>(
  paths: string[],
): {
  data?: Response;
  error: any;
} => {
  const { data, error } = useSWR<Response>(paths, swrFetcher, {
    suspense: true,
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
    refreshWhenOffline: false,
    refreshWhenHidden: false,
    refreshInterval: 0,
  });

  return { data, error };
};
