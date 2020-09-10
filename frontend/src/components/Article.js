import React from 'react';

export default ({ articleData }) => {
  return (
    <div>
      <h3>{articleData.title}</h3>
      {articleData.content}
    </div>
  );
};
