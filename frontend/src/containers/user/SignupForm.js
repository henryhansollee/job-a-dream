import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/user';
import UserForm from '../../components/user/UserForm';

const SignupForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ user }) => ({
    form: user.signup
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
  };

  useEffect(() => {
    dispatch(initializeForm('signup'));
  }, [dispatch]);

  return (
    <UserForm type="signup" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default SignupForm;


