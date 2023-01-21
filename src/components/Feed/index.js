import React, { useState, useEffect } from "react";
import "./feed.css";
import Article from "../Article";
import { db } from "../../firebase-config";
import { ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { compare, splitArray } from "../../util";
import { Grid, LinearProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';


function Feed( {title}  ) {
  const dbRef = ref(db, "stories/01-19-23");
  const arts = useDatabaseValue(["stories/01-19-23"], dbRef);
  const [pageNumber, setPageNumber] = useState(0);
  const [articles, setArticles] = useState([]);
  let titles = [];
  let newList = [];
  let split = [];
  let first = [];
  let previous = [];

  if (arts.isLoading) {
    return (
        <>
        <div className="feed">
        <div className="header">
          <h3>{title}</h3>
        <div className="load"></div>
          <LinearProgress/>
          </div>
        </div>
        </>
    );
  }

  const handleChange = (event, value) => {
    setPageNumber(value);
    window.scrollTo(0,0);
    first = split[value];
    handleArts(first)
  }

  function getArraySegment(num, arr) {
    const segment = [];
    const length = num * 100;
    for (let i = 0; i < length; i++) {
      if (arr[i]) {
        segment.push(arr[i]);
      }
    }
    setArticles(segment);
    setPageNumber(pageNumber + 1);
    return segment
  }

  const handleArts = (array) => {
    setArticles(array)
  }

  const hasMore = () => {
    let len = newList.length / 100 
    if (pageNumber <= len) return false 
    return true
  }

  for (let a in arts.data) {
    titles.push(a);
    newList.push(arts.data[a]);
    newList.sort(compare).reverse();
  }
  split = splitArray(newList);
  first = split[pageNumber];

  if (articles.length == 0){
    handleArts(first);
  }




  return (
    <>
      <div className="header">
        <div className="spans">
          <span className="left">{title}</span><span className="right"> {newList.length} Articles</span>
        </div>
      </div>
    <div className="flip">
    <InfiniteScroll
      dataLength={pageNumber + 1} //This is important field to render the next data
      next={() => getArraySegment(pageNumber, newList)}
      hasMore={() => hasMore()}
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