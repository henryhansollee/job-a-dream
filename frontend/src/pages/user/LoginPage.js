import React from 'react';
import UserTemplate from '../../components/user/UserTemplate';
import LoginForm from '../../containers/user/LoginForm';


const LoginPage = () => {
  return (
    <UserTemplate>
      <LoginForm />
    </UserTemplate>
  );
};

export default LoginPage;
