import React from 'react';
import { ButtonGroup, Button } from '@chakra-ui/react';
import { useGlobalContext } from '../context/global_context';
const PageButtons = ({ isLoading, isLastPage = false }) => {
  const { page_index, increasePage, decreasePage, restartPage } =
    useGlobalContext();
  return (
    <ButtonGroup spacing={2}>
      {page_index !== 0 && (
        <Button
          isDisabled={isLoading}
          variant="solid"
          width="80px"
          colorScheme="red"
          onClick={restartPage}
        >
          Start
        </Button>
      )}
      {page_index !== 0 && (
        <Button
          isDisabled={isLoading}
          variant="outline"
          colorScheme="blue"
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
          colorScheme="blue"
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
