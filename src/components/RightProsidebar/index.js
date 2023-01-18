import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { menuClasses } from 'react-pro-sidebar';
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { Link } from 'react-router-dom';
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./rightSidebar.css"
import abc from '../../assets/abc.png'
import beast from '../../assets/beast.png'
import blaze from '../../assets/blaze.png'
import bong from '../../assets/bong.png'
import breit from '../../assets/breit.png'
import caller from '../../assets/caller.png'
import cbs from '../../assets/cbs.png'
import dmail from '../../assets/dmail.png'
import euro from '../../assets/euro.png'
import gbn from '../../assets/gbn.png'
import glo from '../../assets/glo.png'
import gwp from '../../assets/gwp.png'
import hill from '../../assets/hill.png'
import huff from '../../assets/huff.png'
import npr from '../../assets/npr.png'
import pmill from '../../assets/pmill.png'
import rte from '../../assets/rte.png'
import sceptic from '../../assets/sceptic.png'
import sky from '../../assets/sky.png'
import spiked from '../../assets/spiked.png'
import tim from '../../assets/tim.png'
import vox from '../../assets/yah.png'
import yah from '../../assets/yah.png'
import gript from '../../assets/gript.png'
import guard from '../../assets/guard.png'
import info from '../../assets/info.png'
import zero from '../../assets/zero.png'
import rev from '../../assets/rev.png'
import trend from '../../assets/trend.png'
import pol from '../../assets/pol.png'
import amthink from '../../assets/amthink.png'


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
          <MenuItem icon={<img className="image" alt="Gript" src={gript} />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="Rte" src={rte} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Spiked-Online" src={spiked} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="GB News" src={gbn} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Sky News" src={sky} />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="The Guardian" src={guard} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Mail" src={dmail} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Daily Sceptic" src={sceptic} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Blaze" src={blaze} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Timcast" src={tim} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Breitbart" src={breit} />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="Infowars" src={info} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Zerohedge" src={zero} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={rev} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={bong} />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={trend} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={caller} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={amthink} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={gwp} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={pmill} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews" src={euro} />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC" src={abc} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={cbs} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={npr} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={vox} />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={pol} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={hill} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={yah} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={beast} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={huff} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={glo} />}></MenuItem>
        </Menu>
      </Sidebar>
      </>
    ) : (
        <>
        <Sidebar style={{ height: "100vh", backgroundColor: "#fff", position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={menuItemStyles}>

        <MenuItem disabled></MenuItem>
          <MenuItem icon={<img className="image" alt="Gript"src={gript} />} active={window.location.pathname === "/"} component={<Link to="/" />}> Gript </MenuItem>
          <MenuItem icon={<img className="image" alt="Rte" src={rte} />} component={<Link to="/" />}> RTE </MenuItem>
          <MenuItem icon={<img className="image" alt="Spiked-Online" src={spiked} />} component={<Link to="/saved" />}> Spiked-Online </MenuItem>
          <MenuItem icon={<img className="image" alt="GB News" src={gbn} />} component={<Link to="/history" />}> GB News </MenuItem>
          <MenuItem icon={<img className="image" alt="Sky News" src={sky} />} component={<Link to="/saved" />}> Sky News </MenuItem>
          <MenuItem icon={<img className="image" alt="The Guardian" src={guard} />} component={<Link to="/history" />}> The Guardian </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Mail" src={dmail} />} component={<Link to="/left" />}> The Daily Mail </MenuItem>
          <MenuItem icon={<img className="image" alt="Daily Sceptic" src={sceptic} />} component={<Link to="/left" />}> Daily Sceptic</MenuItem>
          <MenuItem icon={<img className="image" alt="The Blaze" src={blaze} />} component={<Link to="/right" />}> The Blaze </MenuItem>
          <MenuItem icon={<img className="image" alt="Timcast" src={tim} />} component={<Link to="/bothsides" />}> Timcast </MenuItem>
          <MenuItem icon={<img className="image" alt="Breitbart" src={breit} />}> Breitbart </MenuItem>
          <MenuItem icon={<img className="image" alt="Infowars" src={info} />}> Infowars </MenuItem>
          <MenuItem icon={<img className="image" alt="Zerohedge" src={zero} />}> Zerohedge </MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={rev} />}> Revolver News </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={bong} />} component={<Link to="/" />}> Bongino Report </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={trend} />} component={<Link to="/saved" />}> Trending Politics </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={caller} />} component={<Link to="/history" />}> The Daily Caller </MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={amthink} />} component={<Link to="/left" />}> American Thinker </MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={gwp} />} component={<Link to="/right" />}> The Gateway Pundit </MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={pmill} />} component={<Link to="/bothsides" />}> The Post Millennial </MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews"  src={euro} />} component={<Link to="/right" />}> Euronews </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC"  src={abc} />} component={<Link to="/bothsides" />}> ABC </MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={cbs} />}> CBS </MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={npr} />}> NPR </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={vox} />}> Vox </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={pol} />}> Politico </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={hill} />}> The Hill </MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={yah} />}> Yahoo News </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={beast} />}> The Daily Beast </MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={huff} />}> Huffington Post </MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={glo} />}> Global News </MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </>
    );
}
    
export default RightProsidebar;