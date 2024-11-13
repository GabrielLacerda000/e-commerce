import type { UseFetchOptions } from "#app";

const baseUrl = process.env.API_BASE_URL || 'http://localhost:3333/api';

export function useApi<T>(path: string, options: UseFetchOptions<T> = {}) {

  return useFetch(`${baseUrl}/${path}`, {
    ...options,
  })
}
