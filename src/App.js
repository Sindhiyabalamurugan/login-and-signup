import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LogIn />} />
      </Routes>
    </Router>
  );
};

export default App;