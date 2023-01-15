import React, { useState, useEffect } from "react";
import "./feed.css";
import FlipMove from "react-flip-move";

function Feed( {title}  ) {
  const [posts, setPosts] = useState([]);
  const articles = [
    {title: "Vaccines kill people1", date: "09-01-23", outlet: "www.Outlet.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Vaccines kill people Everyday1", date: "10-12-23", outlet: "www.Outlet2.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
    {title: "Vaccines kill people2", date: "09-01-23", outlet: "www.Outlet.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Vaccines kill people Everyday2", date: "10-12-23", outlet: "www.Outlet2.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
    {title: "Vaccines kill people3", date: "09-01-23", outlet: "www.Outlet.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Vaccines kill people Everyday3", date: "10-12-23", outlet: "www.Outlet2.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
    {title: "Vaccines kill people4", date: "09-01-23", outlet: "www.Outlet.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Euronews%2Feuronews.jpg?alt=media&token=a1edaad7-50f2-400f-bbbf-e89d56b7c9ee"},
    {title: "Vaccines kill people Everyday4", date: "10-12-23", outlet: "www.Outlet2.com", storage_link: "https://firebasestorage.googleapis.com/v0/b/news-a3e22.appspot.com/o/Rte%2F01-08-23%2F'Once-in-a-century'-flood-cuts-off-communities-in-northwestern-Australia.png?alt=media&token=dca61367-5038-4ea1-b83b-205216f37eca"},
]
  useEffect(() => {
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h3>{title}</h3>
      </div>


      <FlipMove>
      
      </FlipMove>
    </div>
  );
}

export default Feed;