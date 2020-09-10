import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/base/HomePage';
import SignupPage from './pages/auth/SignupPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignupPage} path="/signup" />
    </>
  );
};

export default App;