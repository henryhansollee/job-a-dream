import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import InterviewListContainer from '../../containers/interviews/InterviewListContainer';
import PaginationContainer from '../../containers/interviews/PaginationContainer';

const InterviewListPage = () => {
  return (
    <>
      <HeaderContainer />
      <InterviewListContainer />
      <PaginationContainer />
    </>
  );
};

export default InterviewListPage;
