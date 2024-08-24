import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './configuration/firebase';
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";


function Login() {
  const [email, setEmail] = useState("");  
  const [password, setPassword] = useState("");  
  const handleLogin=()=>{
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log('loggedin',userCredential )
  })
  .catch((error) => {
    console.log(error.message)
  });
  }

  const handleGoogleLogin=()=>{

const provider = new GoogleAuthProvider();
signInWithPopup(auth, provider)
  .then((result) => {
    console.log('loggedin with google',result)
  }).catch((error) => {
    console.log(error.message)

  });
  }
  return (
    <Container maxWidth="sm" sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', p: 3, borderRadius: 2 }}>
      <Box mt={5}>
        <Typography variant="h4" gutterBottom align="center" sx={{ color: 'white' }}>
          Login
        </Typography>
        <form>
          <TextField 
            fullWidth 
            label="Email" 
            margin="normal" 
            variant="outlined" 
            InputLabelProps={{ style: { color: 'white' } }} 
            InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'white' }} 
            onChange={(e)=>{setEmail(e.target.value)}}

          />
          <TextField 
            fullWidth 
            label="Password" 
            type="password" 
            margin="normal" 
            variant="outlined" 
            InputLabelProps={{ style: { color: 'white' } }} 
            InputProps={{ style: { color: 'white', borderColor: 'white' } }} 
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)', borderColor: 'white' }} 
            onChange={(e)=>{setPassword(e.target.value)}}

          />
          <Button 
            fullWidth 
            variant="contained" 
            color="error" 
            sx={{ mt: 2, bgcolor: 'black', borderColor: 'white' }} 
            onClick={handleLogin}
          >
            Login
          </Button><br />
          <Button 
            fullWidth 
            variant="contained" 
            color="error" 
            sx={{ mt: 2, bgcolor: 'black', borderColor: 'white' }} 
            onClick={handleGoogleLogin}
          >
            Login With Google
          </Button><br />
          <Button 
            fullWidth 
            variant="contained" 
            color="error" 
            sx={{ mt: 2, bgcolor: 'black', borderColor: 'white' }} 
            // onClick={handleGithubLogin}
            >
             Login With Github
          </Button>
          <Box mt={2}>
            <Typography variant="body2" align="center" sx={{ color: 'white' }}>
              Don't have an account? <Link to="/signup" style={{ color: '#90caf9' }}>Signup</Link>
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default Login;
