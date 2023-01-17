import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./rightSidebar.css"
import rte from '../../assets/rte.png';
import gript from '../../assets/gript.png';
import spiked from '../../assets/spiked.png';
import gbn from '../../assets/gbn.png';
import sky from '../../assets/sky.png';
import dmail from '../../assets/dmail.png';
import guard from '../../assets/guard.png';
import sceptic from '../../assets/sceptic.png';


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
        <Sidebar width="80px" backgroundColor="white" style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem icon={<img className="image" src={gript} />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<img className="image" src={rte} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" src={spiked} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" src={gbn} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" src={sky} />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<img className="image" src={guard} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" src={dmail} />}></MenuItem>
          <MenuItem icon={<img className="image" src={sceptic} />}></MenuItem>
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
      </>
    ) : (
        <>
        <Sidebar style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={menuItemStyles}>

        <MenuItem disabled></MenuItem>
          <MenuItem active={window.location.pathname === "/"} icon={<img className="image" src={gript} />} component={<Link to="/" />}> Gript </MenuItem>
          <MenuItem icon={<img className="image" src={rte} />} component={<Link to="/" />}> RTE </MenuItem>
          <MenuItem icon={<img className="image" src={spiked} />} component={<Link to="/saved" />}> Spiked-Online </MenuItem>
          <MenuItem icon={<img className="image" src={gbn} />} component={<Link to="/history" />}> GB News </MenuItem>
          <MenuItem icon={<img className="image" src={sky} />} component={<Link to="/saved" />}> Sky News </MenuItem>
          <MenuItem icon={<img className="image" src={guard} />} component={<Link to="/history" />}> The Guardian </MenuItem>
          <MenuItem icon={<img className="image" src={dmail} />} component={<Link to="/left" />}> The Daily Mail </MenuItem>

          <MenuItem icon={<img className="image" src={sceptic} />} component={<Link to="/left" />}> Daily Sceptic</MenuItem>
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
        </>
    )}
    </>
    );
}
    
export default RightProsidebar;