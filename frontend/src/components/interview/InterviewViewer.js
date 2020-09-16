import React from 'react';
import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import Responsive from '../common/Responsive';
import SubInfo from '../common/SubInfo';
import Tags from '../common/Tags';
import { Helmet } from 'react-helmet-async';

const InterviewViewerBlock = styled(Responsive)`
  margin-top: 4rem;
`;
const InterviewHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

const InterviewContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;

const InterviewViewer = ({ interview, error, loading, actionButtons, ownInterview }) => {
  // 에러 발생 시
  if (error) {
    if (error.response && error.response.status === 404) {
      return <InterviewViewerBlock>존재하지 않는 포스트입니다.</InterviewViewerBlock>;
    }
    return <InterviewViewerBlock>오류 발생!</InterviewViewerBlock>;
  }

  // 로딩중이거나, 아직 포스트 데이터가 없을 시
  if (loading || !interview) {
    return null;
  }

  const { title, body, user, publishedDate, tags } = interview;
  return (
    <InterviewViewerBlock>
      <Helmet>
        <title>{title} - 잡아드림</title>
      </Helmet>

      <InterviewHead>
        <h1>{title}</h1>
        <SubInfo
          username={user.username}
          publishedDate={publishedDate}
          hasMarginTop
        />
        <Tags tags={tags} />
      </InterviewHead>
      {actionButtons}
      <InterviewContent dangerouslySetInnerHTML={{ __html: body }} />
    </InterviewViewerBlock>
  );
};

export default InterviewViewer;
