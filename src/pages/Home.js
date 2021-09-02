import React from 'react';
import { useFetchOptions } from '../hooks/useFetchPokemons';
import { SimpleGrid } from '@chakra-ui/react';
import { Error, Loading, PokemonCard, PageButtons } from '../components';
import { useGlobalContext } from '../context/global_context';
import { POKE_LIMIT } from '../utils/constants';

const Home = () => {
  const { pokemons, pokemons_loading, pokemons_error } = useGlobalContext();

  if (pokemons_loading) {
    return <Loading />;
  }
  if (pokemons_error) {
    return <Error />;
  }

  const display_pokemons = pokemons.slice(0, 19);
  return (
    <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
      {display_pokemons.length !== 0 &&
        display_pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} {...pokemon} />
        ))}
    </SimpleGrid>
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
