import React from 'react';
import { Box, Input, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';

const SearchBar = () => {
  const {
    search_term,
    search_category,
    updateSearchTerm,
    updateSearchCategory,
  } = useGlobalContext();
  return (
    <Box d="flex" justifyContent="center" alignItems="center" mt={5}>
      <Input
        placeholder="Search..."
        value={search_term}
        size="lg"
        width="350px"
        onChange={(e) => updateSearchTerm(e.target.value)}
      />
      <Select
        variant="outline"
        size="lg"
        name="sort"
        id="sort"
        fontSize="lg"
        ml={2}
        width="150px"
        value={search_category}
        onChange={(e) => updateSearchCategory(e.target.value)}
      >
        <option value="pokemon">Pokémon</option>
        <option value="ability">Ability</option>
      </Select>
    </Box>
  );
};

export default SearchBar;
