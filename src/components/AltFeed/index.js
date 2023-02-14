import React, { useState, useContext, useEffect } from "react";
import "./altFeed.css";
import { db } from "../../firebase-config";
import { getDatabase, ref, remove, set } from "firebase/database";
import { useDatabaseValue } from "@react-query-firebase/database";
import { compare, getDate, splitArray, sortByDate } from "../../util";
import { Button, ButtonGroup, Grid, LinearProgress, TextField } from "@mui/material";
import InfiniteScroll from 'react-infinite-scroll-component';
import { filterByTitle } from "../../util";
import { getArraySegment } from "../../util";
import Loader from "../Loader";
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import NoImgArt from "../NoImgArt";
import ThemeContext from "../../contexts/themeContext";
import { formatDate } from '../../util';
import { AuthContext } from "../../contexts/authContext";


function AltFeed ( { title, articles, affix, setArticles}  ) {
  const [count, setCount] = useState(0);
  const context = useContext(AuthContext);
  const d = getDate(count);
  const theme = useContext(ThemeContext);
  const [refresh, setState] = useState(0);

  const [values, setValues] = React.useState({
    searched: '',
  });

  
  console.log(articles)

  const forceRerender = (article) => {
    const index = articles.indexOf(article);
    if (index > -1) { // only splice array when item is found
      articles.splice(index, 1); // 2nd parameter means remove one item only
    }
    set(ref(db,`/user-${affix}/${context.user.uid}/${article.title}`),{
    }).then(() => {
    })
    .catch((error) => {
    });
    if (articles.length > 0){
      setState(refresh + 1)
    }
    if (articles.length == 0){
      setState(refresh + 1)
    }
  };
  
  const handleFilterChange = (prop) => (event) => {
    let searchQuery = ''
    setValues({ ...values, [prop]: event.target.value });
    searchQuery = searchQuery + event.target.value
    let filtered = filterByTitle(articles, searchQuery);
    setArticles(filtered);
  }

  const shuffleArticles = () => {
    let shuffled = articles.slice().sort(() => Math.random() - 0.5);
    setArticles(shuffled);
    
  }

  function scrollTop(){
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
    <div className="header" style={theme.header}>
      <div className="spans">
        <span className="left" >{title}</span><span className="right" style={theme.right}> {articles.length} Articles</span>
      </div>
  <div className="filter-group">

      <TextField
        id="outlined"
        label="Filter"
        placeholder={d}
        size="small"
        className="textfield"
        sx={theme.Filter}
        InputLabelProps={theme.InputLabelProps}
        value={values.searched}
        onChange={handleFilterChange('searched')}
      />
      
      <ButtonGroup size="small" color='warning' sx={theme.buttonGroup.sx}>
        <Button disabled={true} sx={theme.disabledButton}>
          <KeyboardArrowLeftOutlinedIcon/>
        </Button>
        <Button disabled={true} sx={theme.disabledButton}>
          <KeyboardArrowRightOutlinedIcon/>
        </Button>
        <Button sx={{color: theme.bgIcon.icon}}>
          <ShuffleOutlinedIcon onClick={() => shuffleArticles()}/>
        </Button>
        <Button sx={{color: theme.bgIcon.icon}}>
          <KeyboardArrowUpOutlinedIcon onClick={() => scrollTop()}/>
      </Button>
      </ButtonGroup>

  </div>
      </div>

    <div className="infinite" style={theme.infinite}>
        <Grid container spacing={1} sx={{justifyContent: 'center'}}>
      {articles.map((article) => (
          <NoImgArt
            key={Math.floor(Math.random() * 990000000000)}
            article={article}
            forceRerender={forceRerender}
          />
        ))}
        </Grid>

      </div>
    </>
  );
}

export default AltFeed;