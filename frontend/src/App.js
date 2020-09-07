import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/base/HomePage';
import AboutPage from './pages/base/AboutPage';
import LoginPage from './pages/user/LoginPage';
import SignupPage from './pages/user/SignupPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={AboutPage} path="/about" />
      <Route component={LoginPage} path="/login" />
      <Route component={SignupPage} path="/signup" />
    </>
  );
};

export default App;