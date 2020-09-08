import client from './client';

export const login = ({ email, password }) =>
  client.post('/api/user/login', { email, password });

export const signup = ({ email, password }) =>
  client.post('/api/user/signup', { email, password });

export const check = () => client.get('/api/user/check');