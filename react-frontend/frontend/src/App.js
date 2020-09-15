import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/base/HomePage';
import SignupPage from './pages/auth/SignupPage';
import InterviewListPage from './pages/interview/InterviewListPage';
import InterviewCreatePage from './pages/interview/InterviewCreatePage';
import InterviewDetailPage from './pages/interview/InterviewDetailPage';

const App = () => {
  return (
    <>
      <Route component={HomePage} path="/" exact />
      <Route component={SignupPage} path="/signup" />
      <Route component={InterviewListPage} path="/ilist" />
      <Route component={InterviewCreatePage} path="/icreate" />
      <Route component={InterviewDetailPage} path="/idetail/@:username/:interviewId" />
    </>
  );
};

export default App;