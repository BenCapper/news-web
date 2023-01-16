import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./rightSidebar.css"

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


const RightProsidebar = () => {
    const { collapseSidebar } = useProSidebar();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
        {isMobile ? (
            <>
        <div className='over'>
        <Sidebar width="80px" backgroundColor="white" style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}></MenuItem>


        </Menu>
      </Sidebar>
      </div>
      </>
    ) : (
        <>
        <div className='over'>
        <Sidebar style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0, borderRight: '0px', paddingLeft: '3.5em'}}>
        <Menu menuItemStyles={menuItemStyles}>

        <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<HomeOutlinedIcon />} component={<Link to="/" />}> Gript </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}> RTE </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/saved" />}> Spiked-Online </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/history" />}> GB News </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/saved" />}> Sky News </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/history" />}> The Guardian </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/left" />}> The Daily Mail </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/left" />}> Daily Sceptic</MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/right" />}> The Blaze </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/bothsides" />}> Timcast </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Breitbart </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Infowars </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Zerohedge </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Revolver News </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/" />}> Bongino Report </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/saved" />}> Trending Politics </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/history" />}> The Daily Caller </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/left" />}> American Thinker </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/right" />}> The Gateway Pundit </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/bothsides" />}> The Post Millennial </MenuItem>



          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/right" />}> Euronews </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />} component={<Link to="/bothsides" />}> ABC </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> CBS </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> NPR </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Vox </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Politico </MenuItem>

          <MenuItem icon={<HomeOutlinedIcon />}> The Hill </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Yahoo News </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> The Daily Beast </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Huffington Post </MenuItem>
          <MenuItem icon={<HomeOutlinedIcon />}> Global News </MenuItem>
        </Menu>
      </Sidebar>
      </div>
        </>
    )}
    </>
    );
}
    
export default RightProsidebar;