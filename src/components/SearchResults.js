import React from 'react';
import { useFetch, useFetchUrl } from '../hooks/useFetchPokemons';
import { useGlobalContext } from '../context/global_context';
import { searchFilter } from '../utils';
import { PokemonCard } from './';
import { SimpleGrid } from '@chakra-ui/react';

const SearchResults = () => {
  const { search_term, search_category, page_size, page_index } =
    useGlobalContext();
  const { data, error, isValidating } = useFetch(`/${search_category}`, {
    limit: 2000,
  });

  let results = [];
  if (data) {
    results = searchFilter(data.results, { name: search_term });
  }

  if (results.length === 0) {
    return <div>No results found</div>;
  }

  if (search_category === 'ability') {
    return (
      <SimpleGrid my={[2, null, 6]} columns={[1, 2, 3]} spacing="4">
        {data &&
          results.map((result, index) => (
            <CategoryWrapper key={index} {...result} />
          ))}
      </SimpleGrid>
    );
  }

  return (
    <SimpleGrid my={[2, null, 6]} columns={[1, 2, 3]} spacing="4">
      {data &&
        results.map((result, index) => <PokemonCard key={index} {...result} />)}
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
