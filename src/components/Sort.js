import React, { useState } from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';

const Sort = () => {
  const [sortValue, setSortValue] = useState();
  const handleChange = (e) => {
    const value = e.target.value;
    setSortValue(value);
  };
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
          value={sortValue}
          onChange={handleChange}
        >
          <option value="name-a" data-sort="" data-order="">
            name (a-z)
          </option>
          <option value="name-z">name (z-a)</option>
        </Select>
      </FormControl>
    </form>
  );
};

export default Sort;
