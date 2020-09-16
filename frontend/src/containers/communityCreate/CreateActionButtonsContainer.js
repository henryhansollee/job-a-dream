import React, { useEffect } from './react';
import CreateActionButtons from '../../components/createCommunity/CreateActionButtons';
import { useSelector, useDispatch } from './react-redux';
import { withRouter } from './react-router-dom';
import { createCommunity, updateCommunity } from '../../modules/communityCreate';

const CreateActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const { title, body, tags, community, communityError, originalCommunityId } = useSelector(
    ({ communityCreate }) => ({
      title: communityCreate.title,
      body: communityCreate.body,
      tags: communityCreate.tags,
      community: communityCreate.community,
      communityError: communityCreate.communityError,
      originalCommunityId: communityCreate.originalCommunityId,
    }),
  );

  // 포스트 등록
  const onPublish = () => {
    if (originalCommunityId) {
      dispatch(updateCommunity({ title, body, tags, id: originalCommunityId }));
      return;
    }
    dispatch(
      createCommunity({
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
    if (community) {
      const { _id, user } = community;
      history.push(`/@${user.username}/${_id}`);
    }
    if (communityError) {
      console.log(communityError);
    }
  }, [history, community, communityError]);
  return (
    <CreateActionButtons
      onPublish={onPublish}
      onCancel={onCancel}
      isEdit={!!originalCommunityId}
    />
  );
};

export default withRouter(CreateActionButtonsContainer);
