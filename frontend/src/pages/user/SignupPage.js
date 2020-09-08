import React from 'react';
import UserTemplate from '../../components/user/UserTemplate';
import SignupForm from '../../containers/user/SignupForm';

const SignupPage = () => {
  return (
    <UserTemplate>
      <SignupForm />
    </UserTemplate>
  );
};

export default SignupPage;