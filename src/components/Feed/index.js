import React, { useState } from "react";
import "./feed.css";
import Article from "../Article";
import { db } from "../../firebase-config";
import { ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { compare, splitArray } from "../../util";
import { FormControl, Grid, LinearProgress, TextField } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { filterByTitle } from "../../util";
import { getArraySegment } from "../../util";
import Loader from "../Loader";
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';


function Feed ( { title }  ) {

  const dbRef = ref(db, "stories/01-21-23");
  const arts = useDatabaseValue(["stories/01-21-23"], dbRef);

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
    let shuffled = articles.slice().sort(() => Math.random() - 0.5);
    setArticles(shuffled);
  }

  function next(){
    let next = getArraySegment(pageNumber, newList);
    setArticles(next);
    setPageNumber(pageNumber + 1);
  }


  return (
    <>
    <div className="header">
      <div className="spans">
        <span className="left">{title}</span><span className="right"> {newList.length} Articles</span>
        <FormControl sx={{ m: 1, width: '25ch'}} variant="outlined">
          <TextField
              id="outlined"
              label="Filter"
              placeholder="Filter"
              value={values.searched}
              onChange={handleFilterChange('searched')}
            />
      </FormControl>
      <ShuffleOutlinedIcon onClick={() => shuffleArticles()}/>
      </div>
    </div>
    <div className="flip">
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
      {articles.map((article) => (
          <Article
            key={Math.floor(Math.random() * 10000000000)}   
            article={article}
          />
        ))}
      </InfiniteScroll>
      </div>
    </>
  );
}

export default Feed;