import React from './react';
import { useDispatch, useSelector } from './react-redux';
import TagBox from '../../components/communityCreate/TagBox';
import { changeField } from '../../modules/communityCreate';

const TagBoxContainer = () => {
  const dispatch = useDispatch();
  const tags = useSelector(state => state.communityCreate.tags);

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
