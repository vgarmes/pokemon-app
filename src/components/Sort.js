import React, { useState } from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';

const Sort = () => {
  const { sort, updateSort } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault}>
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
          <option value="name-a" data-sort="name" data-order="desc">
            name (a-z)
          </option>
          <option value="name-z" data-sort="name" data-order="asc">
            name (z-a)
          </option>
        </Select>
      </FormControl>
    </form>
  );
};

export default Sort;
