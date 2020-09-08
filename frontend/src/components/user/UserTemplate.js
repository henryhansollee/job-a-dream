import React from 'react';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const UserTemplateBlock = styled.div``;

const UserTemplateBox = styled.div``;

const UserTemplate = ({ children }) => {
  return (
    <UserTemplateBlock>
      <UserTemplateBox>
        <div>
          <Link to="/">홈</Link>
        </div>
        {children}
      </UserTemplateBox>
    </UserTemplateBlock>
  );
};

export default UserTemplate;