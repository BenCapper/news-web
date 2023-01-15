import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./proSidebar.css";


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
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
        {isMobile ? (
            <>
        
        <Sidebar width="80px" style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0 }}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}></MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<PeopleOutlinedIcon />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}></MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}> </MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}> </MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>  </MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}></MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}></MenuItem>
        </Menu>
      </Sidebar>
      </>
    ) : (
        <>
        <Sidebar style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0 }}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}>Home</MenuItem>
          <MenuItem active={window.location.pathname === "/saved"} icon={<PeopleOutlinedIcon />} component={<Link to="/saved" />}>Saved</MenuItem>
          <MenuItem icon={<ContactsOutlinedIcon />}>History</MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<ReceiptOutlinedIcon />}>Leans Left</MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Leans Right</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>See Both Sides</MenuItem>
          <MenuItem disabled></MenuItem>
          <MenuItem icon={<HelpOutlineOutlinedIcon />}>Theme</MenuItem>
          <MenuItem icon={<CalendarTodayOutlinedIcon />}>Logout</MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </>
    );
}
    
export default ProSidebar;