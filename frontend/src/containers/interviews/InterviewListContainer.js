import React, { useEffect } from 'react';
import qs from 'qs';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import InterviewList from '../../components/interviews/InterviewList';
import { listInterviews } from '../../modules/interviews';

const InterviewListContainer = ({ location, match }) => {
  const dispatch = useDispatch();
  const { interviews, error, loading, user } = useSelector(
    ({ interviews, loading, user }) => ({
      interviews: interviews.interviews,
      error: interviews.error,
      loading: loading['interviews/LIST_INTERVIEWS'],
      user: user.user,
    }),
  );
  useEffect(() => {
    const { username } = match.params;
    const { tag, page } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    dispatch(listInterviews({ tag, username, page }));
  }, [dispatch, location.search, match.params]);

  return (
    <InterviewList
      loading={loading}
      error={error}
      interviews={interviews}
      showWriteButton={user}
    />
  );
};

export default withRouter(InterviewListContainer);
