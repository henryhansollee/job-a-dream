import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { form, auth, authError } = useSelector(({ auth }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'signup',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
    const { email, password, passwordConfirm } = form;
    if (password !== passwordConfirm) {
      return;
    }
    dispatch(signup({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      console.log(authError);
      return;
    }
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
    }
  }, [auth, authError]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SignupForm;


