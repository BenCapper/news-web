import React from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';


function Home() {


  return (
    <>
    <div className="flex">
    <ProSidebar/>
    <div>
    <div className='feed'>
    <Feed title={"Home"}/>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;