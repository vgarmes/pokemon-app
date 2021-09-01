import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="6"
      bg="red.400"
      color="white"
    >
      <Text
        fontFamily="mono"
        letterSpacing="2px"
        fontWeight="bold"
        fontSize="lg"
      >
        POKEMON APP
      </Text>
    </Flex>
  );
};

export default Navbar;
