import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Button from '../common/Button';
import palette from '../../lib/styles/palette';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Link } from 'react-router-dom';

const CommunityListBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const CreateCommunityButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;

const CommunityItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 2rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-top: 2rem;
  }
`;

const CommunityItem = ({ community }) => {
  const { publishedDate, user, tags, title, body, _id } = community;
  return (
    <CommunityItemBlock>
      <h2>
        <Link to={`/@${user.username}/${_id}`}>{title}</Link>
      </h2>
      <SubInfo
        username={user.username}
        publishedDate={new Date(publishedDate)}
      />
      <Tags tags={tags} />
      <p>{body}</p>
    </CommunityItemBlock>
  );
};

const CommunityList = ({ communitys, loading, error, showWriteButton }) => {
  // 에러 발생 시
  if (error) {
    return <CommunityListBlock>에러가 발생했습니다.</CommunityListBlock>;
  }

  return (
    <CommunityListBlock>
      <CreateCommunityButtonWrapper>
        {showWriteButton && (
          <Button cyan to="/write">
            새 글 작성하기
          </Button>
        )}
      </CreateCommunityButtonWrapper>
      {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}
      {!loading && communitys && (
        <div>
          {communitys.map(community => (
            <CommunityItem community={community} key={community._id} />
          ))}
        </div>
      )}
    </CommunityListBlock>
  );
};

export default CommunityList;
