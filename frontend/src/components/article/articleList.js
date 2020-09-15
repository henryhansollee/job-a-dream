import React, { Component } from 'react';

class articleList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title="",
            content=""
        }
    }
    addArticle = () => {
        
    }
  render() {
    return (
      <div>
        <h1>글 목록</h1>
        <button onClick={this.addArticle}>글 작성</button>
        <table>
          <thead>
            <tr>
              <th>제목</th>
              <th>내용</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
}

export default articleList;
