import React from 'react';
import { useFetch, useFetchUrl } from '../hooks/useFetchPokemons';
import { useGlobalContext } from '../context/global_context';
import { searchFilter } from '../utils';
import { PokemonCard, Error } from './';
import { SimpleGrid, Box, Text } from '@chakra-ui/react';

const SearchResults = () => {
  const { search_term, search_category } = useGlobalContext();
  const { data, error } = useFetch(`/${search_category}`, {
    limit: 2000,
  });

  let results = [];
  if (data) {
    results = searchFilter(data.results, { name: search_term });
  }

  if (results.length === 0) {
    return (
      <Box mt="25vh">
        <Text textAlign="center" fontSize="3xl">
          No results found
        </Text>
      </Box>
    );
  }

  if (search_category === 'ability') {
    return (
      <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
        {error && <Error />}
        {data &&
          results.map((result, index) => (
            <CategoryWrapper key={index} {...result} />
          ))}
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
      {error && <Error />}
      {data &&
        results.map((result, index) => <PokemonCard key={index} {...result} />)}
    </SimpleGrid>
  );
};

const CategoryWrapper = ({ url }) => {
  const { data, error } = useFetchUrl(url);
  return (
    <>
      {error && <Error />}
      {data &&
        data.pokemon.map(({ pokemon }, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
    </>
  );
};

export default SearchResults;
