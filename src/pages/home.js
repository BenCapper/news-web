import React, {useContext} from 'react';
import ProSidebar from '../components/ProSidebar';
import RightProsidebar from '../components/RightProsidebar';
import "../App.css";
import Feed from '../components/Feed';
import ThemeContext from "../contexts/themeContext";
import darktheme from '../contexts/darktheme';
import lighttheme from '../contexts/theme';

function Home({setTheme}) {
  const theme = useContext(ThemeContext);

  return (
    <>
    <div style={{backgroundColor:theme.colors.white}}>
    <div className="flex">
    <ProSidebar setTheme={setTheme}/>
    <div>
    <div className='feed'>
    <Feed title={"Home"}/>
    </div>
    </div>
    <div className='right'>
    <RightProsidebar/>
    </div>
    </div>
    </div>
    </>
  );
}

export default Home;