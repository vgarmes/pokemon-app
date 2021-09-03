import React from 'react';
import { Box, Input, Select } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { useGlobalContext } from '../context/global_context';

const SearchBar = () => {
  const { search_term, search_category } = useGlobalContext();
  return (
    <Box d="flex" justifyContent="center" alignItems="center">
      <Input placeholder="Search..." size="lg" width="350px" />
      <Select
        variant="outline"
        size="lg"
        name="sort"
        id="sort"
        fontSize="lg"
        ml={2}
        width="150px"
        value={search_category}
      >
        <option value="pokemon">Pokémon</option>
        <option value="ability">Ability</option>
      </Select>
    </Box>
  );
};

export default SearchBar;
