import React from 'react';
import { useFetch } from '../hooks/useFetchPokemons';
import { SimpleGrid } from '@chakra-ui/react';
import { Error, Loading, PokemonCard, Sort } from '../components';
import { useGlobalContext } from '../context/global_context';
import { POKE_LIMIT } from '../utils/constants';

const Home = () => {
  const { page_size, page_index } = useGlobalContext();
  const { data, error } = useFetch('/pokemon', {
    limit: page_size,
    offset: page_size * page_index,
  });

  if (error) {
    return <Error />;
  }

  return (
    <>
      <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
        {data &&
          data.results.map((pokemon) => (
            <PokemonCard key={pokemon.id} {...pokemon} />
          ))}
      </SimpleGrid>
    </>
  );
};
/*
 <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
{data &&
          data.results.map((pokemon, index) => (
            <PokemonCard key={index} {...pokemon} />
          ))}
          </SimpleGrid>
          */

export default Home;
