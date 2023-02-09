import '../Feed/feed.css'
import { LinearProgress } from "@mui/material";
import ThemeContext from "../../contexts/themeContext";
import React, { useState, useContext } from "react";

const Loader = ({title}) => {
  const theme = useContext(ThemeContext);

    return (
        <>
        <div className="header" style={theme.header}>
          <h3>{title}</h3>
          <div>
        <div className="load"></div>
          <LinearProgress/>
          </div>
        </div>
        <div className="flip">
      </div>
        </>
      );
}

export default Loader;