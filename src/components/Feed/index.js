import React, { useState, useEffect } from "react";
import "./feed.css";
import Article from "../Article";
import FlipMove from "react-flip-move";
import { db } from "../../firebase-config";
import { ref, query, orderByChild } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { compare, readDocuments, splitArray } from "../../util";
import { LinearProgress } from "@mui/material";
import { Stack } from "@mui/material";
import { Pagination } from "@mui/material";
import { useListVals } from 'react-firebase-hooks/database';

function Feed( {title}  ) {
  const dbRef = ref(db, "stories/01-19-23");
  const arts = useDatabaseValue(["stories/01-19-23"], dbRef);
  const [pageNumber, setPageNumber] = useState(0);
  const [articles, setArticles] = useState([]);
  let titles = [];
  let newList = [];
  let split = [];
  let first = [];




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
    console.log(value)
    setPageNumber(value);
    window.scrollTo(0,0);
    first = split[value];
    handleArts(first)
  }

  const handleArts = (array) => {
    setArticles(array)
    console.log(array)
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
    <div className="feed">
      <div className="header">
        <h3>{title}</h3>
      </div>
    <div className="flip">
      {articles.map((article) => (
          <Article
            key={Math.floor(Math.random() * 10000000000)}   
            article={article}
          />
        ))}
      <Stack alignItems="center">
      <Pagination color='primary' count={10} defaultPage={0} page={pageNumber} onChange={handleChange} />
      </Stack>
      </div>
      </div>
    </>
  );
}

export default Feed;