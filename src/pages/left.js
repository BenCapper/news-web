import React, {useContext,useEffect, useState} from 'react';
import ProSidebar from '../components/ProSidebar';
import "../App.css";
import { getDate } from '../util';
import LeansFeed from '../components/LeansFeed';
import ThemeContext from "../contexts/themeContext";
import { AuthContext } from "../contexts/authContext";
import darktheme from '../contexts/darktheme';
import lighttheme from '../contexts/theme';
import { getDatabase, ref, onValue } from "firebase/database";
import RightProsidebar from '../components/RightProsidebar';
import { useDatabaseValue } from "@react-query-firebase/database";
import Loader from '../components/Loader';

function Left({setTheme}) {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(getDate(count));
  const theme = useContext(ThemeContext);
  const context = useContext(AuthContext);
  const db = getDatabase();
  const [articles, setArticles] = useState([]);
  const dbRef = ref(db, `stories/${date}`);
  const arts = useDatabaseValue([`stories/${date}`], dbRef);
  let artics = [];

  useEffect(() => {
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

  
  if (arts.isLoading) {
    return (
      <>
      <div style={{backgroundColor:theme.colors.white}}>
        <Loader
          title={"Leans Left"}
          />
    <ProSidebar setTheme={setTheme}/>
    </div>
      </>
    );
  }


  artics = Object.values(arts.data);
  if (articles.length != artics.length){
    setArticles(artics)
  }
  console.log(artics)
  return (
    <>
    <div style={{backgroundColor:theme.colors.white}}>
    <div className="flex">
    <ProSidebar setTheme={setTheme}/>
    <div>
    <div className='feed'>
    <LeansFeed title={"Leans Left"} articles={articles} date={date} setDate={setDate} setArticles={setArticles}/>
    </div>
    </div>
    <RightProsidebar/>
    </div>
    </div>
    </>
  );
}

export default Left;