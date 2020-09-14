import client from './client';

export const icreate = ({ title, body, tags }) =>
  client.post('/icreate', { title, body, tags });