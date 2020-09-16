import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readInterview, unloadInterview } from '../../modules/interview';
import InterviewViewer from '../../components/interview/InterviewViewer';
import InterviewActionButtons from '../../components/interview/InterviewActionButtons';
import { setOriginalInterview } from '../../modules/interviewCreate';
import { removeInterview } from '../../lib/api/interviews';

const InterviewViewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { interviewId } = match.params;
  const dispatch = useDispatch();
  const { interview, error, loading, user } = useSelector(
    ({ interview, loading, user }) => ({
      interview: interview.interview,
      error: interview.error,
      loading: loading['interview/READ_INTERVIEW'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readInterview(interviewId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadInterview());
    };
  }, [dispatch, interviewId]);

  const onEdit = () => {
    dispatch(setOriginalInterview(interview));
    history.push('/icreate');
  };

  const onRemove = async () => {
    try {
      await removeInterview(interviewId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  const ownInterview = (user && user._id) === (interview && interview.user._id);

  return (
    <InterviewViewer
      interview={interview}
      loading={loading}
      error={error}
      actionButtons={
        ownInterview && <InterviewActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(InterviewViewerContainer);
