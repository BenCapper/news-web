import React, { useState, useEffect } from "react";
import "./feed.css";
import Article from "../Article";
import FlipMove from "react-flip-move";
import { db } from "../../firebase-config";
import { onValue, ref } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { v4 as uuidv4 } from 'uuid';
import { compare } from "../../util";

function Feed( {title}  ) {
  const [articles, setArticles] = useState([]);
  const dbRef = ref(db, "stories/01-19-23");
  const arts = useDatabaseValue(["stories/01-19-23"], dbRef);


  if (arts.isLoading) {
    return <div>Loading...</div>;
  }

  let titles = [];
  let newList = [];
  
  for (let a in arts.data) {
    titles.push(a);
    newList.push(arts.data[a]);
    newList.sort(compare).reverse();
  }





  return (
    <>
    <div className="feed">
      <div className="header">
        <h3>{title}</h3>
      </div>
    <div className="flip">
      <FlipMove typeName={null}>
      {newList.map((article) => (
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