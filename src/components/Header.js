import React from 'react';
import { AppBar, Box, Typography, Container } from '@mui/material';
const Header = () => {
  return (
    <div>
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position='static'>
            <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
              Phonebook
            </Typography>
          </AppBar>
        </Box>
      </Container>
    </div>
  );
};

export default Header;
