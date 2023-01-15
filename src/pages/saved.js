import React from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';


function Saved() {


  return (
    <>
    <div className="flex">
    <ProSidebar/>
    <Feed title={"Saved"}/>
    </div>
    </>
  );
}

export default Saved;