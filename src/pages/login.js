import React, {useContext, useEffect} from 'react';
import LoginForm from "../components/LoginForm";
import ThemeContext from "../contexts/themeContext";
import darktheme from '../contexts/darktheme';
import lighttheme from '../contexts/theme';
import { useIcon } from '../util';

const Login = ({setTheme}) => {
  const theme = useContext(ThemeContext);
  useIcon();


  useEffect(() => {
    document.title = "Login | 360 News";
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme === 'dark') {
      setTheme(darktheme);
    }
    else {
      setTheme(lighttheme);
    }
  });


  return (
    <>
    <div style={{backgroundColor:theme.colors.white, height: '100vh'}}>
      <LoginForm setTheme={setTheme}/>
    </div>
    </>
  );
};

export default Login;