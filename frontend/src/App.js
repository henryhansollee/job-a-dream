import React from 'react';
import { Route } from 'react-router-dom';

// home
import HomePage from './pages/HomePage';

// signup
import SignupPage from './pages/auth/SignupPage';

// interview
import InterviewListPage from './pages/interview/InterviewListPage';
import InterviewCreatePage from './pages/interview/InterviewCreatePage';
import InterviewDetailPage from './pages/interview/InterviewDetailPage';

// community
import CommunityListPage from './pages/community/CommunityListPage';
import CommunityCreatePage from './pages/community/CommunityCreatePage';
import CommunityDetailPage from './pages/community/CommunityDetailPage';

// Helmet
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      {/* helmet */}
      <Helmet>
        <title>잡아드림</title>
      </Helmet>

      {/* home */}
      <Route component={HomePage} path="/" exact />

      {/* signup */}
      <Route component={SignupPage} path="/signup" />

      {/* interview */}
      <Route component={InterviewListPage} path="/ilist" />
      <Route component={InterviewCreatePage} path="/icreate" />
      <Route component={InterviewDetailPage} path="/idetail/@:username/:interviewId" />
      
      {/* community */}
      <Route component={CommunityListPage} path="cilist" />
      <Route component={CommunityCreatePage} path="/ccreate" />
      <Route component={CommunityDetailPage} path="/cdetail/@:username/:communityId" />
    </>
  );
};

export default App;