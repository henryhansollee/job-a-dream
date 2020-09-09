import React, { useState } from 'react';
import axios from 'axios';
import { Button, Form, Input } from 'antd';

const { TextArea } = Input;

function articleCreateForm() {
  const [articleTitle, setArticleTitle] = useState('');
  const [articleContent, setArticleContent] = useState('');

  const onTitleChange = (e) => {
    setArticleTitle(e.currentTarget.value);
  };

  const onContentChange = (e) => {
    setArticleContent(e.currentTarget.value);
  };

  const createArticle = (e) => {
    e.preventDefault();
    if (articleTitle === undefined || articleTitle === '') {
      alert('글 제목을 입력해주세요');
      return;
    } else if (articleContent === undefined || articleContent === '') {
      alert('글 내용을 입력해주세요');
    }

    const data = {
      title: articleTitle,
      content: articleContent,
    };

    axios.post('/article/create', data).then((res) => {
      if (res.data.message) {
        alert('글쓰기 성공');
      } else {
        alert('글쓰기 실패');
      }
    });
  };

  return (
    <div>
      <Form onSubmit={createArticle}>
        <label>글 제목</label>
        <Input onChange={onTitleChange} value={articleTitle} />

        <br />
        <br />
        <label>내용</label>
        <TextArea onChange={onContentChange} value={articleContent} />

        <Button type="primary" size="large" onClick={createArticle}>
          작성
        </Button>
      </Form>
    </div>
  );
}

export default articleCreateForm;
