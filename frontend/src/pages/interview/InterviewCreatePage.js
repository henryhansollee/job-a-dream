import React from 'react';
import Editor from '../../components/additional/Editor';
import TagBox from '../../components/additional/TagBox';
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