import React from 'react';
import { useFetch } from '../hooks/useFetchPokemons';
import { SimpleGrid, Box, Spinner } from '@chakra-ui/react';
import {
  Error,
  PokemonCard,
  PageSizeSelector,
  PageButtons,
} from '../components';
import { useGlobalContext } from '../context/global_context';

const PokemonList = () => {
  const { page_size, page_index } = useGlobalContext();
  const { data, error, isValidating } = useFetch('/pokemon', {
    limit: page_size,
    offset: page_size * page_index,
  });

  if (error) {
    return <Error />;
  }

  return (
    <>
      <Box d="flex" alignItems="center" justifyContent="space-between" mt={2}>
        <PageSizeSelector />
        <PageButtons isLoading={isValidating} isLastPage={data && !data.next} />
      </Box>

      <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
        {isValidating && (
          <Box
            d="flex"
            justifyContent="center"
            alignItems="center"
            height="100vh"
          >
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Box>
        )}
        {data &&
          data.results.map((pokemon, index) => (
            <PokemonCard key={index} {...pokemon} />
          ))}
      </SimpleGrid>
      <Box d="flex" justifyContent="flex-end" mb="5">
        <PageButtons isLoading={isValidating} isLastPage={data && !data.next} />
      </Box>
    </>
  );
};

export default PokemonList;
