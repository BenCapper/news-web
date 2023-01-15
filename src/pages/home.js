import React from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';


function Home() {


  return (
    <>
    <div className="flex">
    <ProSidebar/>
    <Feed title={"Home"}/>
    </div>
    </>
  );
}

export default Home;