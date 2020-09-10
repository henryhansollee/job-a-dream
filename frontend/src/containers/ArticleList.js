//컴포넌트가 만들어지고 javascript 렌더링을 마치면
//this.props.fetchArticle() 액션으로 api로부터 데이터를 가져와
//state.list.articleList에 저장함.

//이를 전에 만든 Article.js 컴포넌트를 map으로 돌려
//리스트의 모든 모임 데이터를 뿌려준다.

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';
import { fetchArticle } from '../actions/index';
import axios from 'axios';

// class ArticleList extends Component {
//   componentDidMount() {
//     this.props.fetchArticle();
//   }

//   renderArticle() {
//     return this.props.articleList.map((article) => {
//       return (
//         <li key={article.id}>
//           <Article articleData={article} />
//         </li>
//       );
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h2>글 목록</h2>
//         {/* <ul>{this.renderArticle()}</ul> */}
//       </div>
//     );
//   }
// }

// export default connect(
//   (state) => {
//     return {
//       articleList: state.lists.articleList,
//     };
//   },
//   { fetchArticle }
// )(ArticleList);

class ArticleList extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    axios.get('/api/').then((res) => {
      this.setState({
        articles: res.data,
      });
    });
  }

  renderArticles() {
    return this.state.articles.map((article) => {
      return (
        <ul key={article.id}>
          <Article articleData={article} />
        </ul>
      );
    });
  }

  render() {
    return <div>{this.renderArticles()}</div>;
  }
}

export default ArticleList;
