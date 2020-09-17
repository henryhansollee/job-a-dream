import client from './client';

// 로그인
export const login = ({ email, password }) =>
  client.post('/accounts/login/', { email, password });

// 회원가입
export const signup = ({ username, email, password }) =>
  client.post('/accounts/signup/', { username, email, password });

// 로그인 상태 확인
export const check = () => client.get('/verify/');

// 로그아웃
export const logout = () => client.post('/api/auth/logout');
