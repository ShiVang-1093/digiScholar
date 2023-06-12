import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import ScholarshipMain from './ScholarshipMain';
import SignupPage from './SignupPage';
// import Navbar from './components/navbar';

const App = () => {
  return (
    <Router>
      {/* <Navbar/> */}
        <Routes>
          <Route path="/sch" element={<ScholarshipMain/>}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignupPage/>} />
        </Routes> 
    </Router>
  );
};

export default App;

  