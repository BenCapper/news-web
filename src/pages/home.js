import React from 'react';
import ProSidebar from '../components/ProSidebar';
import RightProsidebar from '../components/RightProsidebar';
import "../App.css";
import Feed from '../components/Feed';


function Home({setTheme}) {


  return (
    <>
    <div className="flex">
    <ProSidebar setTheme={setTheme}/>
    <div>
    <div className='feed'>
    <Feed title={"Home"}/>
    </div>
    </div>
    <div className='right'>
    <RightProsidebar/>
    </div>
    </div>

    </>
  );
}

export default Home;