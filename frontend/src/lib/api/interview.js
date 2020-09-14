import client from './client';

export const icreatePost = ({ title, body, tags }) =>
  client.post('/icreate', { title, body, tags });