import React, { useEffect, useCallback } from 'react';
import Editor from '../../components/interview/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/interview/InterviewCreate';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ icreate }) => ({
    title: icreate.title,
    body: icreate. body,
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;