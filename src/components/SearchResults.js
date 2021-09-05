import React from 'react';
import { useFetch, useFetchUrl } from '../hooks/useFetchPokemons';
import { useGlobalContext } from '../context/global_context';
import { searchFilter } from '../utils';
import { PokemonCard } from './';
import { SimpleGrid } from '@chakra-ui/react';

const SearchResults = () => {
  const { search_term, search_category } = useGlobalContext();
  const { data, error, isValidating } = useFetch(`/${search_category}`, {
    limit: 2000,
  });

  return (
    <SimpleGrid my={[2, null, 6]} columns={[1, 2, 3]} spacing="4">
      {data &&
        searchFilter(data.results, { name: search_term }).map((result, index) =>
          search_category === 'ability' ? (
            <CategoryWrapper key={index} {...result} />
          ) : (
            <PokemonCard key={index} {...result} />
          )
        )}
    </SimpleGrid>
  );
};

const CategoryWrapper = ({ url }) => {
  const { data, error } = useFetchUrl(url);
  return (
    <>
      {data &&
        data.pokemon.map(({ pokemon }, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
    </>
  );
};

export default SearchResults;
