import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import CommunityList from '../../components/communitys/CommunityList';
import { listCommunitys } from '../../lib/api/communitys';

const CommunityListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { communitys, error, loading, user } = useSelector(
    ({ communitys, loading, user }) => ({
      communitys: communitys.communitys,
      error: communitys.error,
      loading: loading['communitys/LIST_COMMUNITYS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listCommunitys({ tag, username, page }));
  }, [dispatch, location.search, match.params]);

  return (
    <CommunityList
      loading={loading}
      error={error}
      communitys={communitys}
      showWriteButton={user}
    />
  );
};

export default withRouter(CommunityListContainer);
