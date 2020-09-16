import React, { useEffect, useCallback } from 'react'
import Editor from '../../components/createCommunity/Editor';
import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/communityCreate';

const EditorContainer = () => {
  const dispatch = useDispatch();
  const { title, body } = useSelector(({ communityCreate }) => ({
    title: communityCreate.title,
    body: communityCreate.body,
  }));
  const onChangeField = useCallback(payload => dispatch(changeField(payload)), [
    dispatch,
  ]);
  // 언마운트될 때 초기화
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]);
  return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
