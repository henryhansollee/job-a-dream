import React from 'react';
import Responsive from '../../components/common/Responsive';
import EditorContainer from '../containers/create/EditorContainer';
import TagBoxContainer from '../containers/create/TagBoxContainer';
import CreateActionButtonsContainer from '../containers/create/CreateActionButtonsContainer';
import { Helmet } from 'react-helmet-async';

const CommunityCreatePage = () => {
  return (
    <Responsive>
      <Helmet>
        <title>글 작성하기 - 잡아드림</title>
      </Helmet>

      <EditorContainer />
      <TagBoxContainer />
      <CreateActionButtonsContainer />
    </Responsive>
  );
};

export default CommunityCreatePage;
