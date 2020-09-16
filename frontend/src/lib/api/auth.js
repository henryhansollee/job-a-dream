import client from './client';

export const login = ({ email, password }) =>
  client.post('/accounts/login/', { email, password });

export const signup = ({ username, email, password }) =>
  client.post('/accounts/signup/', { username, email, password });

export const check = () => client.get('/verify/');

export const logout = () => client.post('/api/auth/logout');