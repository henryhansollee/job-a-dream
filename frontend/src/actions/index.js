//우리가 만든 /api/를 get해오는 액션

import axios from 'axios';

export const FETCH_ARTICLE = 'FETCH_ARTICLE';

export function fetchArticle() {
  const request = axios.get('/api/');
  axios
    .get('/api/')
    .then((res) => {
      console.log(res, '결과보여줌');
    })
    .catch((err) => {
      console.log(err, '에러');
    });
  return {
    type: FETCH_ARTICLE,
    payload: request,
  };
}
