import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import KeyboardDoubleArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowLeftOutlined';
import KeyboardDoubleArrowRightOutlinedIcon from '@mui/icons-material/KeyboardDoubleArrowRightOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";
import header from '../../assets/header.png'
import ThemeContext from "../../contexts/themeContext";
import darktheme from '../../contexts/darktheme';
import lighttheme from '../../contexts/theme';
import { set,ref, } from "firebase/database";
import { db } from "../../firebase-config";


const ProSidebar = ({setTheme}) => {
    const { collapseSidebar } = useProSidebar();
    const context = useContext(AuthContext);
    const theme = useTheme();
    const themes = useContext(ThemeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const navigate = useNavigate();

    const handleTheme = () => {
      if (themes === lighttheme){
        setTheme(darktheme);
        window.localStorage.setItem('theme', 'dark');
        if (context.user !== ''){
          set(ref(db, 'user-theme/' + context.user.uid), {
            theme: 'dark'
          });
          console.log("Set Dark Theme");
        }

      }
      else{
        setTheme(lighttheme);
        window.localStorage.setItem('theme', 'light');
        if (context.user !== ''){
          set(ref(db, 'user-theme/' + context.user.uid), {
            theme: 'light'
          });
          console.log("Set Light Theme");
        }

      }
    };

    function openSaved() {
      navigate("/saved");
    }

    function openHistory() {
      navigate("/history");
    }

    function openLogin() {
      navigate("/login");
    }

    return (
        <>
        {isMobile ? (
            <>
        
        <Sidebar width="80px" backgroundColor={themes.colors.white} style={{ height: "100vh", backgroundColor: themes.colors.white, position: "sticky", top: 0, borderRight: themes.colors.white }}>
        <Menu menuItemStyles={themes.menuItemStyles}>
          <MenuItem disabled style={{paddingBottom: '3em'}}></MenuItem>
          <MenuItem icon={<MenuOutlinedIcon />} onClick={() => collapseSidebar()} style={{marginBottom: '.95em'}}></MenuItem>
          
          <MenuItem active={window.location.pathname === "/"} title={"Home"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}> Home </MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<BookmarkBorderOutlinedIcon />} onClick={() => openSaved()}>Saved</MenuItem>
          <MenuItem active={window.location.pathname === "/history"} icon={<HistoryOutlinedIcon />} onClick={() => openHistory()}>History</MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/left"} icon={<KeyboardDoubleArrowLeftOutlinedIcon />} component={<Link to="/left" />}>Leans Left </MenuItem>
          <MenuItem active={window.location.pathname === "/right"} icon={<KeyboardDoubleArrowRightOutlinedIcon />} component={<Link to="/right" />}>Leans Right </MenuItem>
          <MenuItem active={window.location.pathname === "/bothsides"} icon={<CompareArrowsOutlinedIcon />} component={<Link to="/bothsides" />}> See Both Sides </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<DarkModeOutlinedIcon />} onClick={handleTheme}>Theme</MenuItem>
          <MenuItem icon={<LogoutOutlinedIcon />} onClick={context.user === "" ? openLogin : context.signout} > {context.user === "" ? "Login" : "Logout"}</MenuItem>
        </Menu>
      </Sidebar>
      </>
    ) : (
        <>
        <Sidebar backgroundColor={themes.colors.white} style={{ height: "100vh", backgroundColor: themes.colors.white, position: "sticky", top: 0, borderRight: themes.colors.white }}>
        <Menu menuItemStyles={themes.menuItemStyles}>

          <MenuItem disabled><img alt="360 News" src={header} style={{paddingTop: '1em'}} height={60}/></MenuItem>
          <MenuItem icon={<MenuOutlinedIcon />} onClick={() => collapseSidebar()}>Menu</MenuItem>
          <MenuItem disabled style={{marginBottom: '-2em'}}></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />} style={{marginTop: '-1em'}}> Home </MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<BookmarkBorderOutlinedIcon />}  onClick={() => openSaved()}>Saved</MenuItem>
          <MenuItem active={window.location.pathname === "/history"} icon={<HistoryOutlinedIcon />} onClick={() => openHistory()}> History </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/left"} icon={<KeyboardDoubleArrowLeftOutlinedIcon />} component={<Link to="/left" />}> Leans Left </MenuItem>
          <MenuItem active={window.location.pathname === "/right"} icon={<KeyboardDoubleArrowRightOutlinedIcon />} component={<Link to="/right" />}> Leans Right </MenuItem>
          <MenuItem active={window.location.pathname === "/bothsides"} icon={<CompareArrowsOutlinedIcon />} component={<Link to="/bothsides" />}> See Both Sides </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<DarkModeOutlinedIcon />} onClick={handleTheme}> Theme </MenuItem>
          <MenuItem icon={<LogoutOutlinedIcon />} onClick={context.user === "" ? openLogin : context.signout} > {context.user === "" ? "Login" : "Logout"} </MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </>
    );
}
    
export default ProSidebar;