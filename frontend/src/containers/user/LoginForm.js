import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/user';
import UserForm from '../../components/user/UserForm';

const LoginForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ user }) => ({
    form: user.login
  }));

  const onChange = e => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'login',
        key: name,
        value
      })
    );
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  return (
    <UserForm type="login" form={form} onChange={onChange} onSubmit={onSubmit} />
  );
};

export default LoginForm;


