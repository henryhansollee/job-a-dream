import React from 'react';
import Responsive from '../../components/common/Responsive';
import InterviewCreateButtons from '../../components/interview/InterviewCreateButtons';
import EditorContainer from '../../containers/interview/EditorContainer';
import TagBoxContainer from '../../containers/interview/TagBoxContainer';

const InterviewCreatePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <InterviewCreateButtons />
    </Responsive>
  );
};

export default InterviewCreatePage;