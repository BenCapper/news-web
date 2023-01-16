import React from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';


function Right() {


  return (
    <>
    <div className="flex">
    <ProSidebar/>
    <div>
    <div className='feed'>
    <Feed title={"Leans Right"}/>
    </div>
    </div>
    </div>
    </>
  );
}

export default Right;