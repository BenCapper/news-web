import React, {useContext,useEffect} from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import Feed from '../components/Feed';
import ThemeContext from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";
import darktheme from '../contexts/darktheme';
import lighttheme from '../contexts/theme';
import { getDatabase, ref, onValue } from "firebase/database";
import { scrollTop, useIcon } from '../util';
import Drag from '../components/Drag';
import useAdSense from '../useAdSense';


function Home({setTheme}) {
  const theme = useContext(ThemeContext);
  const context = useContext(AuthContext);
  const db = getDatabase();
  useIcon();
  useAdSense();

  useEffect(() => {
    // Set the body background color CSS variable
    document.documentElement.style.setProperty('--body-background-color', theme.bodyBackgroundColor);
  }, [theme]);

  useEffect(() => {
    document.title = "Home | 360 News";
    scrollTop();
    if (context.user !== ''){
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
      <div className='feed'>
      <Feed title={"Home"}/>
      </div>
    </div>
    <div className="right-sidebar" style={{backgroundColor:theme.colors.white}}>
      <Drag/>
    </div>
  </div>
</>
  );
}

export default Home;