import qs from 'qs';
import client from './client';

export const createInterview = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readInterview = id => client.get(`/api/posts/${id}`);

export const listInterviews = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updateInterview = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removeInterview = id => client.delete(`/api/posts/${id}`);
