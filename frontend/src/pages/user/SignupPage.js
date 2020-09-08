import React from 'react';
import UserTemplate from '../../components/user/UserTemplate';
import UserForm from '../../components/user/UserFrom';

const SignupPage = () => {
  return (
    <UserTemplate>
      <UserForm type="signup" />
    </UserTemplate>
  );
};

export default SignupPage;