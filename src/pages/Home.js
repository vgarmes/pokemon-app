import React from 'react';
import { useFetchPokeData } from '../hooks/useFetchPokemons';
import { SimpleGrid } from '@chakra-ui/react';
import { Error, PokemonCard } from '../components';

const PAGE_SIZE = 20;

const Home = () => {
  //const [pageIndex, setPageIndex] = useState(0);
  const pageIndex = 0;
  const { data, error } = useFetchPokeData('/pokemon', {
    limit: PAGE_SIZE,
    offset: PAGE_SIZE * pageIndex,
  });
  return (
    <SimpleGrid my={[2, null, 6]} minChildWidth="300px" spacing="4">
      {error && <Error />}
      {data &&
        data.results.map((pokemon, index) => (
          <PokemonCard key={index} {...pokemon} />
        ))}
    </SimpleGrid>
  );
};

export default Home;
