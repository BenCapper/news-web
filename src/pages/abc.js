import React, {useContext,useEffect} from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import OutletFeed from '../components/OutletFeed';
import ThemeContext from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";
import darktheme from '../contexts/darktheme';
import lighttheme from '../contexts/theme';
import { getDatabase, ref, onValue } from "firebase/database";
import { scrollTop, useIcon } from '../util';
import Drag from '../components/Drag';

function Abc({setTheme}) {
  const theme = useContext(ThemeContext);
  const context = useContext(AuthContext);
  const db = getDatabase();
  useIcon();

  useEffect(() => {
    document.title = "ABC | 360 News";
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
      <div className='feed' >
      <OutletFeed title={"ABC News"} keyword={"AbcNews.go.com"}/>
      </div>
    </div>
    <div className="right-sidebar">
      <Drag/>
    </div>
  </div>
</>
  );
}

export default Abc;