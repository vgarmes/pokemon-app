import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';
const PageButtons = ({ isLoading, isLastPage = false }) => {
  const { page_index, increasePage, decreasePage } = useGlobalContext();
  return (
    <ButtonGroup spacing={2} colorScheme="blue">
      {page_index !== 0 && (
        <Button
          isDisabled={isLoading}
          variant="outline"
          width="80px"
          onClick={decreasePage}
        >
          Previous
        </Button>
      )}

      {!isLastPage && (
        <Button
          isDisabled={isLoading}
          variant="solid"
          width="80px"
          onClick={increasePage}
        >
          Next
        </Button>
      )}
    </ButtonGroup>
  );
};

export default PageButtons;
