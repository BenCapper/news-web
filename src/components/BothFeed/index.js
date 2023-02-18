import React, { useState, useContext } from "react";
import "./feed.css";
import { db } from "../../firebase-config";
import { ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { compare, getDate, splitArray } from "../../util";
import { Button, ButtonGroup, Grid, LinearProgress, TextField } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { filterByTitle } from "../../util";
import { getArraySegment } from "../../util";
import Loader from "../Loader";
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import BothArt from "../BothArt";
import ThemeContext from "../../contexts/themeContext";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { formatDate } from '../../util';
import { right, left } from "../../icons/collections";


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Feed ( { title }  ) {
  const [count, setCount] = useState(0);
  const d = getDate(count);
  const dbRef = ref(db, `doubles/${d}`);
  const arts = useDatabaseValue([`doubles/${d}`], dbRef);
  const theme = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(0);
  const [articles, setArticles] = useState([]);
  const [more, setMore] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [openBack, setOpenBack] = React.useState(false);

  const newList = [];
  let splitArr = [];
  let firstSegment = [];

  const [values, setValues] = React.useState({
    searched: '',
  });


  if (arts.isLoading) {
    return (
        <Loader
          title={title}
          />
    );
  }


  for (let a in arts.data) {
    newList.push(arts.data[a]);
    newList.sort(compare).reverse();
  }
  splitArr = splitArray(newList);
  firstSegment = splitArr[pageNumber];

  if (articles.length == 0){
    setArticles(firstSegment);
  }

  
  const handleFilterChange = (prop) => (event) => {
    let searchQuery = ''
    let filtered = [];
    setValues({ ...values, [prop]: event.target.value });
    searchQuery = searchQuery + event.target.value
    filtered = filterByTitle(newList, searchQuery);
    if( searchQuery === ''){
      setMore(true)
    }
    if (searchQuery !== ''){
      setMore(false)
    }

    if (filtered.length === 0){
      let empty = [{title: "No Results", date: formatDate(d), outlet:''}]
      setArticles(empty);
    }
    else {
      setArticles(filtered);
    }
  }

  const shuffleArticles = () => {
    console.log("shuffle")
    let shuffled = articles.slice().sort(() => Math.random() - 0.5);
    setArticles(shuffled);
  }

  function next(){
    console.log(articles.length)
    if (articles.length === newList.length) return
    else{
      let next = getArraySegment(pageNumber, newList);
      setArticles(next);
      setPageNumber(pageNumber + 1);
    }

  }

  function back(){
    if (count > -14) {
      setCount(count - 1)
      let segment = getArraySegment(pageNumber, newList);
      setArticles(segment);
    }
    else {
      setOpenBack(true);
    }

  }

  function forward(){
    if (count < 0){
      setCount(count + 1)
      let segment = getArraySegment(pageNumber, newList);
      setArticles(segment);
    }
    else {
      setOpen(true);
    }
  }

  function scrollTop(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  const handleCloseBack = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenBack(false);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  return (
    <>
    <div className="header" style={theme.header}>
      <div className="spans">
        <span className="left" >{title}</span><span className="right" style={theme.right}> {newList.length} Articles</span>
      </div>
  <div className="filter-group">

      <TextField
        id="outlined"
        label="Filter"
        placeholder={d}
        size="small"
        className="textfield"
        sx={theme.Filter}
        InputLabelProps={theme.InputLabelProps}
        value={values.searched}
        onChange={handleFilterChange('searched')}
      />
      
      <ButtonGroup size="small" color='warning' sx={theme.buttonGroup.sx}>
        <Button sx={{color: theme.bgIcon.icon}}>
          <KeyboardArrowLeftOutlinedIcon onClick={() => back()}/>
        </Button>
        <Button sx={{color: theme.bgIcon.icon}}>
          <KeyboardArrowRightOutlinedIcon onClick={() => forward()}/>
        </Button>
        <Button sx={{color: theme.bgIcon.icon}}>
          <ShuffleOutlinedIcon onClick={() => shuffleArticles()}/>
        </Button>
        <Button sx={{color: theme.bgIcon.icon}}>
          <KeyboardArrowUpOutlinedIcon onClick={() => scrollTop()}/>
      </Button>
      </ButtonGroup>

  </div>
      </div>

    <div className="infinite" style={theme.infinite}>
    <InfiniteScroll
      dataLength={pageNumber + 1} //This is important field to render the next data
      next={() => next()}
      hasMore={more}
      loader={
        <>
        <div className="load">
          <LinearProgress/>
        </div>
        </>
      }
      >
        <Grid container spacing={1} sx={{justifyContent: 'center'}}>
      {articles.map((article) => (
          <BothArt
            key={Math.floor(Math.random() * 990000000000)}
            article={article}
          />
        ))}
        </Grid>
      </InfiniteScroll>

      </div>
      <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="error" style={{backgroundColor: theme.colors.snackbg, color: theme.colors.snack}} sx={{ width: '100%' }}>
        Already on Todays News
      </Alert>
      </Snackbar>
      <Snackbar open={openBack} autoHideDuration={4000} onClose={handleCloseBack}>
      <Alert onClose={handleCloseBack} severity="error" style={{backgroundColor: theme.colors.snackbg, color: theme.colors.snack}} sx={{ width: '100%' }}>
        Cannot Navigate any Further
      </Alert>
      </Snackbar>
    </>
  );
}

export default Feed;