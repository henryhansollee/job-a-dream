import React from 'react';
import styled from 'styled-components';
// import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const AuthTemplateBlock = styled.div``;

const AuthTemplateBox = styled.div``;

const AuthTemplate = ({ children }) => {
  return (
    <AuthTemplateBlock>
      <AuthTemplateBox>
        <div>
          <Link to="/">홈</Link>
        </div>
        {children}
      </AuthTemplateBox>
    </AuthTemplateBlock>
  );
};

export default AuthTemplate;