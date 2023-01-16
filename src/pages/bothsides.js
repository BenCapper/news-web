import React from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';


function Both() {


  return (
    <>
    <div className="flex">
    <ProSidebar/>
    <div>
    <div className='feed'>
    <Feed title={"See Both Sides"}/>
    </div>
    </div>
    </div>
    </>
  );
}

export default Both;