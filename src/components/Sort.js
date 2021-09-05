import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';

const Sort = () => {
  const { sort, updateSort } = useGlobalContext();

  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel
        htmlFor="sort"
        flexShrink="0"
        p="0"
        mr={2}
        fontSize="sm"
        display={['none', 'block']}
      >
        Sort by
      </FormLabel>
      <Select
        variant="outline"
        size="sm"
        name="sort"
        id="sort"
        fontSize="sm"
        value={sort}
        onChange={(e) => updateSort(e.target.value)}
      >
        <option value="name-a">name (a-z)</option>
        <option value="name-z">name (z-a)</option>
        <option value="height-highest">height (highest)</option>
        <option value="height-lowest">height (lowest)</option>
        <option value="weight-highest">weight (highest)</option>
        <option value="weight-lowest">weight (lowest)</option>
      </Select>
    </FormControl>
  );
};

export default Sort;
