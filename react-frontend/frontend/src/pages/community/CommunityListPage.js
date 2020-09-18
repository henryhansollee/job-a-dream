import React from 'react';
import HeaderContainer from '../../containers/common/HeaderContainer';
import CommunityListContainer from '../../containers/communitys/CommunityListContainer';
import PaginationContainer from '../../containers/communitys/PaginationContainer';

const CommunityListPage = () => {
  return (
    <>
      <HeaderContainer />
      <CommunityListContainer />
      <PaginationContainer />
    </>
  );
};

export default CommunityListPage;
