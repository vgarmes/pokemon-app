import React from 'react';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box mx={[2, null, 6]}>{children}</Box>
    </div>
  );
};

export default Layout;
