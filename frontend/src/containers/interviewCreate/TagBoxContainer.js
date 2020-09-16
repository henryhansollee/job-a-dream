import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TagBox from '../../components/createInterview/TagBox';
import { changeField } from '../../modules/interviewCreate';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.interviewCreate.tags);

  const onChangeTags = nextTags => {
    dispatch(
      changeField({
        key: 'tags',
        value: nextTags,
      }),
    );
  };

  return <TagBox onChangeTags={onChangeTags} tags={tags} />;
};

export default TagBoxContainer;
