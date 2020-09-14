import React, { useEffect } from 'react';
import InterviewCreateButtons from '../../components/interview/InterviewCreateButtons';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { icreatePost } from '../../modules/interview/InterviewCreate';

const InterviewCreateButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, ipost, ipostError } = useSelector(({ icreate }) => ({
    title: icreate.title,
    body: icreate.body,
    tags: icreate.tags,
    ipost: icreate.ipost,
    ipostError: icreate.ipostError,
  }));
  const onPublish = () => {
    dispatch(
      icreatePost({
        title,
        body,
        tags,
      }),
    );
  };
  const onCancel = () => {
    history.goBack();
  };
  useEffect(() => {
    if (ipost) {
      const { _id, user } = ipost;
      history.push(`/@${user.username}/${_id}`);
    }
    if (ipostError) {
      console.log(ipostError);
    }
  }, [history, ipost, ipostError]);
  return <InterviewCreateButtons onPublish={onPublish} onCancel={onCancel} />;
};

export default withRouter(InterviewCreateButtonsContainer);