import React from 'react';
import Responsive from '../../components/common/Responsive';
import EditorContainer from '../../containers/interviewCreate/EditorContainer';
import TagBoxContainer from '../../containers/interviewCreate/TagBoxContainer';
import CreateActionButtonsContainer from '../../containers/interviewCreate/CreateActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const InterviewCreatePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>인터뷰 시작하기 - 잡아드림</title>
      </Helmet>

      <EditorContainer />
      <TagBoxContainer />
      <CreateActionButtonsContainer />
    </Responsive>
  );
};

export default InterviewCreatePage;
