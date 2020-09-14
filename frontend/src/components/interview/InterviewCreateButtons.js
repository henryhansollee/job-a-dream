import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const InterviewCreateButtonsBlock = styled.div``;

const StyledButton = styled(Button)``;

const InterviewCreateButtons = ({ onCancel, onPublish }) => {
  return (
    <InterviewCreateButtonsBlock>
      <StyledButton onClick={onPublish}>등록</StyledButton>
      <StyledButton onClick={onCancel}>취소</StyledButton>
    </InterviewCreateButtonsBlock>
  )
}

export default InterviewCreateButtons;