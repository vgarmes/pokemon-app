import React from 'react';
import Navbar from './Navbar';
import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Box px={[2, null, 6]} maxWidth="1920px" mx="auto">
        {children}
      </Box>
    </div>
  );
};

export default Layout;
