import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';
const PageButtons = ({ isLoading, isLastPage = false }) => {
  const { page_index, nextPage, prevPage } = useGlobalContext();
  return (
    <ButtonGroup spacing={2} colorScheme="blue">
      {page_index !== 0 && (
        <Button
          isDisabled={isLoading}
          variant="outline"
          width="80px"
          onClick={prevPage}
        >
          Previous
        </Button>
      )}

      {!isLastPage && (
        <Button
          isDisabled={isLoading}
          variant="solid"
          width="80px"
          onClick={nextPage}
        >
          Next
        </Button>
      )}
    </ButtonGroup>
  );
};

export default PageButtons;
