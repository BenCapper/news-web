import React, { useState, useEffect } from "react";
import "./feed.css";
import Article from "../Article";
import FlipMove from "react-flip-move";

function Feed( {title}  ) {
  const [posts, setPosts] = useState([]);
  const articles = [
    {title: "Sample Title 1 - Just a Bit Longer", date: "09-01-23", outlet: "www.Outlet1.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Sample Title 2 - Just a Bit Longer", date: "10-12-23", outlet: "www.Outlet2.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
    {title: "Sample Title 3 - Just a Bit Longer", date: "09-01-23", outlet: "www.Outlet3.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Sample Title 4 - Just a Bit Longer", date: "10-12-23", outlet: "www.Outlet4.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
    {title: "Sample Title 5 - Just a Bit Longer", date: "09-01-23", outlet: "www.Outlet5.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Sample Title 6 - Just a Bit Longer", date: "10-12-23", outlet: "www.Outlet6.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
    {title: "Sample Title 7 - Just a Bit Longer", date: "09-01-23", outlet: "www.Outlet7.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Sample Title 8 - Just a Bit Longer", date: "10-12-23", outlet: "www.Outlet8.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
]
  useEffect(() => {
  }, []);

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
            key={article.title}
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