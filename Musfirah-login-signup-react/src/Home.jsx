import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div style={{
      backgroundImage: 'url(https://your-image-url-here.jpg)', 
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: '100vh', 
    }}>
      <br /><br />
      <Container maxWidth="md" mt={5} style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: 20 }}>
        <Box mt={5} textAlign="center">
          <Typography variant="h3" gutterBottom style={{ color: 'white' }}>
            Welcome
          </Typography>
          <Typography style={{ color: 'white' }} variant="h6" paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ducimus deserunt tempore dolor iure odit amet laborum dolores deleniti quibusdam?
          </Typography>
          <Box mt={4}>
            <Button
              style={{ backgroundColor: 'black', border: '1px solid white' }}
              variant="contained"
              component={Link}
              to="/login"
              sx={{ mr: 2 }}
            >
              Login
            </Button>
            <Button
              style={{ backgroundColor: 'black', border: '1px solid white' }}
              variant="contained"
              component={Link}
              to="/signup"
            >
              Signup
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
