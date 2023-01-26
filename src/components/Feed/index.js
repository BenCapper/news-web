import React, { useState } from "react";
import "./feed.css";
import { styled } from '@mui/material/styles';
import { db } from "../../firebase-config";
import { ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { compare, getDate, splitArray } from "../../util";
import { Button, ButtonGroup, FormControl, Grid, LinearProgress, TextField } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { filterByTitle } from "../../util";
import { getArraySegment } from "../../util";
import Loader from "../Loader";
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import { inputLabelClasses } from "@mui/material/InputLabel";
import Art from "../Art";


const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'orange',
    },
    '&:hover fieldset': {
      borderColor: '#fcc24c',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'orange',
      label: 'orange'
    },
  },
});


function Feed ( { title }  ) {
  const [count, setCount] = useState(0);
  const today = getDate(0);
  const d = getDate(count);
  const dbRef = ref(db, `stories/${d}`);
  const arts = useDatabaseValue([`stories/${d}`], dbRef);
  
  const [pageNumber, setPageNumber] = useState(0);
  const [articles, setArticles] = useState([]);
  const [more, setMore] = useState(true);

  const articleTitles = [];
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
    articleTitles.push(a);
    newList.push(arts.data[a]);
    newList.sort(compare).reverse();
  }
  splitArr = splitArray(newList);
  firstSegment = splitArr[pageNumber];
  console.log(firstSegment)

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
      let empty = [{title: "No Results"}]
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
      //Snack Error?
    }

  }

  function forward(){
    if (count < 0){
      setCount(count + 1)
      let segment = getArraySegment(pageNumber, newList);
      setArticles(segment);
    }
    else {
      //Snack Error?
    }

  }


  return (
    <>
    <div className="header">
      <div className="spans">
        <span className="left">{title}</span><span className="right"> {newList.length} Articles</span>

      </div>
    
    <div>
    <div className="tools">
    <FormControl sx={{ mt: '.5em', mb:'1em', minWidth: '16em', border: 'orange'}} variant="outlined">
          <CssTextField
              id="outlined"
              label="Filter"
              placeholder={d}
              size="small"
              InputLabelProps={{
                sx: {
                  // set the color of the label when not shrinked
                  color: "black",
                  fontWeight: 450,
                  [`&.${inputLabelClasses.shrink}`]: {
                    // set the color of the label when shrinked (usually when the TextField is focused)
                    color: "black",
                    fontWeight: 600
                  }
                }
              }}
              value={values.searched}
              onChange={handleFilterChange('searched')}
            />
      </FormControl>
      <ButtonGroup color="warning" sx={{ml: '1em', mt: '.6em', mb: '.5em'}}>
      <Button sx={{color: 'black'}}>
      <ShuffleOutlinedIcon onClick={() => shuffleArticles()}/>
      </Button>
      <Button sx={{color: 'black'}}>
      <KeyboardArrowLeftOutlinedIcon onClick={() => back()}/>
      </Button>
      <Button sx={{color: 'black'}}>
      <KeyboardArrowRightOutlinedIcon onClick={() => forward()}/>
      </Button>
      </ButtonGroup>
      </div>
      </div>
      </div>
    <div className="infinite">
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
          <Art
            key={Math.floor(Math.random() * 990000000000)}
            article={article}
          />
        ))}
        </Grid>
      </InfiniteScroll>
      </div>
    </>
  );
}

export default Feed;