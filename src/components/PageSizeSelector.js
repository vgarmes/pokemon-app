import React from 'react';
import { FormControl, FormLabel, Select } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';

const PageSizeSelector = () => {
  const { page_size, updatePageSize } = useGlobalContext();

  return (
    <form onSubmit={(e) => e.preventDefault}>
      <FormControl display="flex" alignItems="center">
        <FormLabel
          htmlFor="page_size"
          flexShrink="0"
          p="0"
          m="0"
          mr={2}
          fontSize="md"
          display={['none', 'block']}
        >
          Results per page
        </FormLabel>
        <Select
          variant="outline"
          size="sm"
          name="sort"
          id="sort"
          fontSize="sm"
          value={page_size}
          onChange={(e) => updatePageSize(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="50">50</option>
        </Select>
      </FormControl>
    </form>
  );
};

export default PageSizeSelector;
