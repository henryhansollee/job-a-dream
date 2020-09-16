import React, { useEffect } from './react';
import CreateActionButtons from '../../components/interviewCreate/CreateActionButtons';
import { useSelector, useDispatch } from './react-redux';
import { withRouter } from './react-router-dom';
import { createInterview, updateInterview } from '../../modules/interviewCreate';

const CreateActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, interview, interviewError, originalInterviewId } = useSelector(
    ({ interviewCreate }) => ({
      title: interviewCreate.title,
      body: interviewCreate.body,
      tags: interviewCreate.tags,
      interview: interviewCreate.interview,
      interviewError: interviewCreate.interviewError,
      originalInterviewId: write.originalInterviewId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalInterviewId) {
      dispatch(updateInterview({ title, body, tags, id: originalInterviewId }));
      return;
    }
    dispatch(
      createInterview({
        title,
        body,
        tags,
      }),
    );
  };

  // 취소
  const onCancel = () => {
    history.goBack();
  };

  // 성공 혹은 실패시 할 작업
  useEffect(() => {
    if (interview) {
      const { _id, user } = interview;
      history.push(`/@${user.username}/${_id}`);
    }
    if (interviewError) {
      console.log(interviewError);
    }
  }, [history, interview, interviewError]);
  return (
    <CreateActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalInterviewId}
    />
  );
};

export default withRouter(CreateActionButtonsContainer);
