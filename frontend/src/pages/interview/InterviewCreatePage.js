import React from 'react';
import Editor from '../../components/interview/Editor';
import TagBox from '../../components/interview/TagBox';
import Responsive from '../../components/common/Responsive';
import InterviewCreateButtons from '../../components/interview/InterviewCreateButtons';

const InterviewCreatePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
      <InterviewCreateButtons />
    </Responsive>
  );
};

export default InterviewCreatePage;