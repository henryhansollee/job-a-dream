import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article';
import { fetchArticle } from '../actions/index';
import axios from 'axios';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

///////////////////////

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

  //   renderArticles() {
  //     return this.state.articles.map((article) => {
  //       return (
  //         <ul key={article.id}>
  //           <div>
  //             <h3>{article.title}</h3>
  //             {article.content}
  //           </div>
  //         </ul>
  //       );
  //     });
  //   }

  render() {
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">말머리</StyledTableCell>
              <StyledTableCell align="right">제목</StyledTableCell>
              <StyledTableCell align="right">글쓴이</StyledTableCell>
              <StyledTableCell align="right">날짜</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.articles.map((article) => (
              <StyledTableRow key={row.created_at}>
                {/* <StyledTableCell component="th" scope="row">
              {row.name}
            </StyledTableCell> */}
                <StyledTableCell align="right">{article.type}</StyledTableCell>
                <StyledTableCell align="right">{article.title}</StyledTableCell>
                <StyledTableCell align="right">
                  {article.writer}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {article.created_at}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default ArticleList;

////////////////////////

// function createData(type, title, writer, created_at) {
//   return { type, title, writer, created_at };
// }

// const rows = [
//   createData(
//     '공지',
//     '취직 언제쯤 할 수 있을까요,,',
//     '덕명동치타',
//     '2020.09.14',
//   ),
// ];

// const useStyles = makeStyles({
//   table: {
//     minWidth: 700,
//   },
// });

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <TableContainer component={Paper}>
//       <Table className={classes.table} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell align="right">말머리</StyledTableCell>
//             <StyledTableCell align="right">제목</StyledTableCell>
//             <StyledTableCell align="right">글쓴이</StyledTableCell>
//             <StyledTableCell align="right">날짜</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row) => (
//             <StyledTableRow key={row.created_at}>
//               {/* <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell> */}
//               <StyledTableCell align="right">{row.type}</StyledTableCell>
//               <StyledTableCell align="right">{row.title}</StyledTableCell>
//               <StyledTableCell align="right">{row.writer}</StyledTableCell>
//               <StyledTableCell align="right">{row.created_at}</StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// }
