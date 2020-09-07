import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/user/LoginPage';
import SignupPage from './pages/user/SignupPage';

const App = () => {
  return (
    <>
      <Route component={LoginPage} path="/login" />
      <Route component={SignupPage} path="/signup" />
    </>
  );
};

export default App;