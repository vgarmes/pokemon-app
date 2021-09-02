import React from 'react';
import { useFetchPokeData } from '../hooks/useFetchPokemons';
import { SimpleGrid } from '@chakra-ui/react';
import { Error, PokemonCard, PageButtons } from '../components';
import { useGlobalContext } from '../context/global_context';

const Home = () => {
  const { page_size, page_index } = useGlobalContext();

  const { data, error, isValidating } = useFetchPokeData('/pokemon', {
    limit: page_size,
    offset: page_size * page_index,
  });
  if (error) {
    return <Error />;
  }
  return (
    <>
      <PageButtons isLoading={isValidating} isLastPage={data && !data.next} />
      <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
        {data &&
          data.results.map((pokemon, index) => (
            <PokemonCard key={index} {...pokemon} />
          ))}
      </SimpleGrid>
    </>
  );
};

export default Home;
