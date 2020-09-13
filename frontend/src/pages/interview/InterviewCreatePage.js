import React from 'react';
import Editor from '../../components/interview/Editor';
import TagBox from '../../components/interview/TagBox';
import Responsive from '../../components/common/Responsive';

const InterviewCreatePage = () => {
  return (
    <Responsive>
      <Editor />
      <TagBox />
    </Responsive>
  );
};

export default InterviewCreatePage;