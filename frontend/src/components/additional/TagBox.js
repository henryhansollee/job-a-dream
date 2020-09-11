import React from './react';
import styled from './styled-components';
import palette from '../../lib/styles/palette';

const TagBoxBlock = styled.div``;

const TagForm = styled.from``;

const Tag = styled.div``;

const TagListBlock = styled.div``;

const TagItem = React.memo(({ tag }) => <Tag>#{tag}</Tag>);

const TagList = React.memo(({ tags }) => (
  <TagListBlock>
    {tags.map(tag => (
      <TagItem key={tag} tag={tag} />
    ))}
  </TagListBlock>
));

const TagBox = () => {
  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm>
        <input placeholder="태그를 입력하세요" />
        <button type="submit">추가</button>
      </TagForm>
      <TagList tags={['태그1', '태그2', '태그3']} />
    </TagBoxBlock>
  );
};

export default TagBox;