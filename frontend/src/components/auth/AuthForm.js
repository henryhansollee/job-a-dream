import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// import palette from '../../lib/styles/palette';
import Button from '../common/Button';

const AuthFormBlock = styled.div``;

const StyledInput = styled.input``;

const FormFooter = styled.div``;

const ErrorMessage = styled.div``;

const textMap = {
  login: '로그인',
  signup: '회원가입',
};

const AuthForm = ({ type, form, onChange, onSubmit, error }) => {
  const text = textMap[type];
  return (
    <AuthFormBlock>
      <h3>{text}</h3>
      <form onSubmit={onSubmit}>
        <StyledInput 
          autoComplete="email"
          name="email"
          placeholder="이메일"
          onChange={onChange}
          value={form.email} 
        />
        <StyledInput
          autoComplete="new-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChange}
          value={form.password}
        />
        {type === 'signup' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChange}
            value={form.passwordConfirm}
          />
        )}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Button>{text}</Button>
      </form>
      <FormFooter>
        {type === 'login' ? (
          <Link to="/signup">회원가입</Link>
        ) : (
          <Link to="/login">로그인</Link>
        )}
      </FormFooter>
    </AuthFormBlock>
  );
};

export default AuthForm;