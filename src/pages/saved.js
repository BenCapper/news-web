import React, {useContext,useEffect, useState} from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import AltFeed from '../components/AltFeed';
import ThemeContext from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";
import darktheme from '../contexts/darktheme';
import lighttheme from '../contexts/theme';
import { getDatabase, ref, onValue } from "firebase/database";
import { scrollTop, useIcon } from '../util';
import Drag from '../components/Drag';

function Saved({ setTheme }) {
  const theme = useContext(ThemeContext);
  const context = useContext(AuthContext);
  const db = getDatabase();
  const [articles, setArticles] = useState([]);
  useIcon();

  useEffect(() => {
    let arts = [];
    document.title = "Saved Articles | 360 News";
    scrollTop();
    if (context.user !== ''){
      // Get theme from DB
      const userId = context.user.uid;
      onValue(ref(db, 'user-theme/' + userId), (snapshot) => {
        const found = (snapshot.val() && snapshot.val());
        if (found.theme === 'dark'){
          window.localStorage.setItem('theme', 'dark');
          setTheme(darktheme); 
        }
        else {
          window.localStorage.setItem('theme', 'light');
          setTheme(lighttheme);
        }
      }, {
        onlyOnce: true
      });

    // Get Articles from DB
    onValue(ref(db, `/user-likes/${context.user.uid}`), (snapshot) => {
      const foundArticle = (snapshot.val() && snapshot.val());
      if(foundArticle !== null) arts = Object.values(foundArticle);
      if (arts.length > articles.length || arts.length < articles.length) setArticles(arts);
    }, {
      onlyOnce: true
    });
      
    }
    else{
      const localTheme = localStorage.getItem('theme');
      if (localTheme === 'dark'){
        setTheme(darktheme);
      }
      else {
        setTheme(lighttheme);
      }
    }
  });



  return (
    <>
    <div className="container" style={{backgroundColor:theme.colors.white}}>
    <div className="left-sidebar">
      <ProSidebar setTheme={setTheme}/>
    </div>
    <div className='feed-container'>
      <div className='feed' style={{paddingLeft: '1em'}}>
      <AltFeed title={"Saved"} articles={articles} affix={"likes"} setArticles={setArticles}/>
      </div>
    </div>
    <div className="right-sidebar">
      <Drag/>
    </div>
  </div>
</>
  );
}

export default Saved;