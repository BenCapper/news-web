import React, { useState, useContext } from "react";
import "./altFeed.css";
import { db } from "../../firebase-config";
import { ref, set } from "firebase/database";
import { getDate, sortByDate } from "../../util";
import { Button, ButtonGroup, Grid, TextField } from "@mui/material";
import { filterByTitle } from "../../util";
import ShuffleOutlinedIcon from '@mui/icons-material/ShuffleOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import NoImgArt from "../NoImgArt";
import ThemeContext from "../../contexts/themeContext";
import { formatDate } from '../../util';
import { AuthContext } from "../../contexts/authContext";
import EmptyArt from "../EmptyArt";

function AltFeed ( { title, articles, affix, setArticles}  ) {
  const [count] = useState(0);
  const context = useContext(AuthContext);
  const d = getDate(count);
  const theme = useContext(ThemeContext);
  const [refresh, setState] = useState(0);
  const [filtered, setFiltered] = useState([]);
  const [values, setValues] = React.useState({
    searched: '',
  });

  sortByDate(articles);

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
    if (articles.length === 0){
      setState(refresh + 1)
    }
  };
  
  const handleFilterChange = (prop) => (event) => {
    let searchQuery = ''
    let filter = [];
    setValues({ ...values, [prop]: event.target.value });
    searchQuery = searchQuery + event.target.value
    filter = filterByTitle(articles, searchQuery);
    if (filter.length === 0){
      let empty = [{title: "No Results", date: formatDate(d), outlet:'', link:'https://play.google.com/store/apps/details?id=org.ben.news'}]
      setFiltered(empty);
    }
    else {
      setFiltered(filter);
    }
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
        <Button sx={{color: theme.bgIcon.icon}} title="Shuffle Articles">
          <ShuffleOutlinedIcon onClick={() => shuffleArticles()}/>
        </Button>
        <Button sx={{color: theme.bgIcon.icon}} title="Scroll to Top">
          <KeyboardArrowUpOutlinedIcon onClick={() => scrollTop()}/>
      </Button>
      </ButtonGroup>

  </div>
      </div>

      <div className="infinite" style={theme.infinite}>
  <Grid container spacing={1} sx={{ justifyContent: 'center', width: '100%' }}>
    {articles.length > 0 ? (
      (filtered.length > 0 ? filtered : articles).map((article) => (
        <NoImgArt
          key={Math.floor(Math.random() * 990000000000)}
          article={article}
          forceRerender={forceRerender}
        />
      ))
    ) : (
      <EmptyArt />
    )}
  </Grid>
</div>
    </>
  );
}

export default AltFeed;