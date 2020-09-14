import React from 'react';
import TagBox from '../../components/interview/TagBox';
import Responsive from '../../components/common/Responsive';
import InterviewCreateButtons from '../../components/interview/InterviewCreateButtons';
import EditorContainer from '../../containers/interview/EditorContainer';

const InterviewCreatePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBox />
      <InterviewCreateButtons />
    </Responsive>
  );
};

export default InterviewCreatePage;