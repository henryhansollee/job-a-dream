import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, signup } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';
import { withRouter } from 'react-router-dom';

const SignupForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.signup,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user,
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
    if ([email, password, passwordConfirm].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setError('비밀번호가 일치하지 않습니다.');
      dispatch(changeField({ form: 'signup', key: 'password', value: '' }));
      dispatch(changeField({ form: 'signup', key: 'passwordConfirm', value: '' }));
      return;
    }
    dispatch(signup({ email, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      if (authError.response.status === 409) {
        setError('이미 존재하는 계정입니다.');
        return;
      }
      setError('회원가입 실패');
      return;
    }
    
    if (auth) {
      console.log('회원가입 성공');
      console.log(auth);
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if (user) {
      console.log('check API 성공');
      console.log(user);
      history.push('/');
    }
  }, [history, user]);

  return (
    <AuthForm
      type="signup"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(SignupForm);


