import qs from 'qs';
import client from './client';

export const createCommunity = ({ title, body, tags }) =>
  client.post('/api/posts', { title, body, tags });

export const readCommunity = id => client.get(`/api/posts/${id}`);

export const listCommunitys = ({ page, username, tag }) => {
  const queryString = qs.stringify({
    page,
    username,
    tag,
  });
  return client.get(`/api/posts?${queryString}`);
};

export const updateCommunity = ({ id, title, body, tags }) =>
  client.patch(`/api/posts/${id}`, {
    title,
    body,
    tags,
  });

export const removeCommunity = id => client.delete(`/api/posts/${id}`);
