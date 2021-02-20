/* eslint-disable react/no-did-mount-set-state */
import React from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import Pagination from '@material-ui/lab/Pagination';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Spinner from '../../components/Spinner/Spinner';
import s from './Resource.less';
// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       marginTop: theme.spacing(2),
//     },
//   },
// }));

class Resource extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      currentPage: 1,
      inputpage: 1,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: false,
    });
  }

  onPageChange = (event, newPage) => {
    this.setState({
      currentPage: newPage,
    });
  };

  getList = pageNo => {
    // const start = (pageNo - 1) * 500;
    // const end = pageNo < 400 ? pageNo * 500 : 213210;
    const start = (pageNo - 1) * 200;
    const end = pageNo < 1000 ? pageNo * 200 : 213210;
    const list = [];

    for (let i = start; i < end; i += 1) {
      list.push({
        name: `image${i}`,
        // url: `resource/${i}.jpg`,
        url: `images/${i}.jpg`,
      });
    }
    return list;
  };

  changeInput = event => {
    this.setState({
      inputpage: event.target.value,
    });
  };

  changePage = event => {
    this.setState({
      currentPage: this.state.inputpage,
    });
    alert(this.state.currentPage);
  };

  getDisplayList = list => {
    const res = [];
    for (let i = 0; i < list.length; i += 2) {
      res.push(
        <TableRow>
          <TableCell align="left">
            <div key={list[i].name} className={s.itemContainer}>
              <span className={s.image}>{list[i].name}</span>
              <span>
                <a target="_blank" rel="noopener noreferrer" href={list[i].url}>
                  {`http://richpedia.cn/${list[i].url}`}
                </a>
              </span>
            </div>
          </TableCell>
          <TableCell align="left">
            <div key={list[i + 1].name} className={s.itemContainer}>
              <span className={s.image}>{list[i + 1].name}</span>
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={list[i + 1].url}
                >
                  {`http://richpedia.cn/${list[i + 1].url}`}
                </a>
              </span>
            </div>
          </TableCell>
        </TableRow>,
      );
    }
    return res;
  };

  getContent = () => (
    // const classes = useStyles();
    <div>
      {/* <HeaderMenu /> */}
      <div className={s.root}>
        <h1 className={s.title}>Resource</h1>
        <div className={s.listContainer}>
          <TableContainer component={Paper} className={s.TableContainer}>
            <Table size="small" aria-label="a dense table">
              <TableBody>
                {this.getDisplayList(this.getList(this.state.currentPage))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* {this.getDisplayList(this.getList(this.state.currentPage))} */}
        </div>
        <div className={s.page}>
          <div className={s.pagination}>
            <Pagination
              siblingCount={2}
              boundaryCount={2}
              defaultPage={this.state.currentPage}
              count={1000}
              page={this.state.currentPage}
              onChange={this.onPageChange}
              color="primary"
              variant="outlined"
              showFirstButton
              showLastButton
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );

  render() {
    return <div>{this.state.isLoading ? <Spinner /> : this.getContent()}</div>;
  }
}

export default withStyles(s)(Resource);
