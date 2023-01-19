import React, { useState, useEffect } from "react";
import "./feed.css";
import Article from "../Article";
import FlipMove from "react-flip-move";
import { db } from "../../firebase-config";
import { onValue, ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { compare } from "../../util";
import { LinearProgress } from "@mui/material";

function Feed( {title}  ) {
  const dbRef = ref(db, "stories/01-19-23");
  const arts = useDatabaseValue(["stories/01-19-23"], dbRef);


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

  let titles = [];
  let newList = [];
  
  for (let a in arts.data) {
    titles.push(a);
    newList.push(arts.data[a]);
    newList.sort(compare).reverse();
  }

  const articles = newList



  return (
    <>
    <div className="feed">
      <div className="header">
        <h3>{title}</h3>
      </div>
    <div className="flip">
      <FlipMove typeName={null}>
      {articles.map((article) => (
          <Article
            key={uuidv4()}   
            article={article}
            ref={article.title}
          />
        ))}
      </FlipMove>
      </div>
      </div>
    </>
  );
}

export default Feed;