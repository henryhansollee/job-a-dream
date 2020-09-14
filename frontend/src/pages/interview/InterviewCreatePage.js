import React from 'react';
import Responsive from '../../components/common/Responsive';
import EditorContainer from '../../containers/interview/EditorContainer';
import TagBoxContainer from '../../containers/interview/TagBoxContainer';
import InterviewCreateButtonsContainer from '../../containers/interview/InterviewCreateButtonsContainer';

const InterviewCreatePage = () => {
  return (
    <Responsive>
      <EditorContainer />
      <TagBoxContainer />
      <InterviewCreateButtonsContainer />
    </Responsive>
  );
};

export default InterviewCreatePage;