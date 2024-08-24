import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Login';
import Signup from './signup';
import Home from './Home';

function App() {
  return (
    <>
      <Navbar /><br />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
