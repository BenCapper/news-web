import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
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


const menuItemStyles = {
    root: {
      fontSize: '15px',
      fontWeight: 400,
    },
    SubMenuExpandIcon: {
      color: '#607489',
    },
    subMenuContent: {
      backgroundColor: '#fff',
    },
    button: {
        [`&.${menuClasses.active}`]: {
          backgroundColor: '#fff',
          color: '#f9b404',
          fontWeight: 600,
        },
        [`&.${menuClasses.disabled}`]: {
          color: '#f9b404',
        },
        '&:hover': {
          backgroundColor: '#faf8e4',
          color: '#f9b404',
        },
      },
    label: ({ open }) => ({
        fontWeight: 600,
      }),
}


const ProSidebar = () => {
    const { collapseSidebar } = useProSidebar();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <>
        {isMobile ? (
            <>
        
        <Sidebar width="80px" backgroundColor="white" style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0}}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<BookmarkBorderOutlinedIcon />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem active={window.location.pathname === "/history"} icon={<HistoryOutlinedIcon />} component={<Link to="/history" />}></MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/left"} icon={<KeyboardDoubleArrowLeftOutlinedIcon />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem active={window.location.pathname === "/right"} icon={<KeyboardDoubleArrowRightOutlinedIcon />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem active={window.location.pathname === "/bothsides"} icon={<CompareArrowsOutlinedIcon />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<DarkModeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<LogoutOutlinedIcon />}></MenuItem>
        </Menu>
      </Sidebar>
      </>
    ) : (
        <>
        <Sidebar style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0 }}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}> Home </MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<BookmarkBorderOutlinedIcon />} component={<Link to="/saved" />}> Saved </MenuItem>
          <MenuItem active={window.location.pathname === "/history"} icon={<HistoryOutlinedIcon />} component={<Link to="/history" />}> History </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/left"} icon={<KeyboardDoubleArrowLeftOutlinedIcon />} component={<Link to="/left" />}> Leans Left </MenuItem>
          <MenuItem active={window.location.pathname === "/right"} icon={<KeyboardDoubleArrowRightOutlinedIcon />} component={<Link to="/right" />}> Leans Right </MenuItem>
          <MenuItem active={window.location.pathname === "/bothsides"} icon={<CompareArrowsOutlinedIcon />} component={<Link to="/bothsides" />}> See Both Sides </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<DarkModeOutlinedIcon />}> Theme </MenuItem>
          <MenuItem icon={<LogoutOutlinedIcon />}> Logout </MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </>
    );
}
    
export default ProSidebar;