import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
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
        
        <Sidebar width="80px" style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0, paddingLeft: "4em" }}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}></MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<BookmarkBorderOutlinedIcon />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<HistoryOutlinedIcon />}></MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<KeyboardDoubleArrowLeftOutlinedIcon />}> </MenuItem>
          <MenuItem icon={<KeyboardDoubleArrowRightOutlinedIcon />}> </MenuItem>
          <MenuItem icon={<CompareArrowsOutlinedIcon />}>  </MenuItem>
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
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}>Home</MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<BookmarkBorderOutlinedIcon />} component={<Link to="/saved" />}>Saved</MenuItem>
          <MenuItem icon={<HistoryOutlinedIcon />}>History</MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<KeyboardDoubleArrowLeftOutlinedIcon />}>Leans Left</MenuItem>
          <MenuItem icon={<KeyboardDoubleArrowRightOutlinedIcon />}>Leans Right</MenuItem>
          <MenuItem icon={<CompareArrowsOutlinedIcon />}>See Both Sides</MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<DarkModeOutlinedIcon />}>Theme</MenuItem>
          <MenuItem icon={<LogoutOutlinedIcon />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </>
    );
}
    
export default ProSidebar;