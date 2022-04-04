import React from 'react';
import { CircularProgress, Container, Box } from '@mui/material';

const Spinner = () => (
  <Container
    sx={{
      display: ' flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh'
    }}
  >
    <Box>
      <CircularProgress />
    </Box>
  </Container>
);

export default Spinner;
