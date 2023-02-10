import '../Feed/feed.css'
import { LinearProgress } from "@mui/material";
import ThemeContext from "../../contexts/themeContext";
import React, { useState, useContext } from "react";

const Loader = ({title}) => {
  const theme = useContext(ThemeContext);

    return (
        <>
                
        <div className="header" style={theme.header}>
          <h3>{title}<LinearProgress/></h3>
          
        </div>
        </>
      );
}

export default Loader;