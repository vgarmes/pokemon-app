import useSWR from 'swr';
import { pokeApiBase } from '../utils/constants';

const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return await response.json();
};

function getPokeUrl(path, options) {
  const searchParams = new URLSearchParams();
  for (const property in options) {
    searchParams.append(property, options[property]);
  }

  return `${pokeApiBase}${path}?${searchParams.toString()}`;
}

export function useFetch(path, options) {
  const endpointUrl = getPokeUrl(path, options);
  return useSWR(path ? endpointUrl : null, fetcher);
}

export function useFetchUrl(url) {
  return useSWR(url, fetcher);
}
