import React from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';


function Saved() {


  return (
    <>
    <div className="flex">
    <ProSidebar/>
    <div>
    <div className='feed'>
    <Feed title={"Saved"}/>
    </div>
    </div>
    </div>
    </>
  );
}

export default Saved;