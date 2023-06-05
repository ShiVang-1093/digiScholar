import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes> 
    </Router>
  );
};

export default App;

  