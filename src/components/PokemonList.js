import React from 'react';
import { useFetch } from '../hooks/useFetchPokemons';
import { SimpleGrid, Box } from '@chakra-ui/react';
import {
  Error,
  PokemonCard,
  PageSizeSelector,
  PageButtons,
  SearchBar,
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
      <Box d="flex" alignItems="center" justifyContent="space-between">
        <PageSizeSelector />
        <PageButtons isLoading={isValidating} isLastPage={data && !data.next} />
      </Box>

      <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
        {data &&
          data.results.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
      </SimpleGrid>
      <Box d="flex" justifyContent="flex-end">
        <PageButtons isLoading={false} isLastPage={data && !data.next} />
      </Box>
    </>
  );
};

export default PokemonList;
