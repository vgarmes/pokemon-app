import useSWR from 'swr';

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

  const pokeApiBase = 'https://pokeapi.co/api/v2';
  return `${pokeApiBase}${path}?${searchParams.toString()}`;
}

export function useFetch(path, options) {
  const endpointUrl = getPokeUrl(path, options);
  return useSWR(path ? endpointUrl : null, fetcher);
}

export function useFetchUrl(url) {
  return useSWR(url, fetcher);
}
