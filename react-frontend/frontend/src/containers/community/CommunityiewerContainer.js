import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readCommunity, unloadCommunity } from '../../modules/community';
import CommunityViewer from '../../components/community/CommunityViewer';
import CommunityActionButtons from '../../components/community/CommunityActionButtons';
import { setOriginalCommunity } from '../../modules/communityCreate';
import { removeCommunity } from '../../lib/api/communitys';

const CommunityiewerContainer = ({ match, history }) => {
  // 처음 마운트될 때 포스트 읽기 API 요청
  const { communityId } = match.params;
  const dispatch = useDispatch();
  const { community, error, loading, user } = useSelector(
    ({ community, loading, user }) => ({
      community: community.community,
      error: community.error,
      loading: loading['community/READ_COMMUNITY'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readCommunity(communityId));
    // 언마운트될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadCommunity());
    };
  }, [dispatch, communityId]);

  const onEdit = () => {
    dispatch(setOriginalCommunity(community));
    history.push('/write');
  };

  const onRemove = async () => {
    try {
      await removeCommunity(communityId);
      history.push('/'); // 홈으로 이동
    } catch (e) {
      console.log(e);
    }
  };

  const ownCommunity = (user && user._id) === (community && community.user._id);

  return (
    <CommunityViewer
      community={community}
      loading={loading}
      error={error}
      actionButtons={
        ownCommunity && <CommunityActionButtons onEdit={onEdit} onRemove={onRemove} />
      }
    />
  );
};

export default withRouter(CommunityiewerContainer);
