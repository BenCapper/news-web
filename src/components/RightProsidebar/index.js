import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import ThemeContext from "../../contexts/themeContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./rightSidebar.css"
import { icon } from "../../icons/icons";


const RightProsidebar = () => {
    const theme = useTheme();
    const themes = useContext(ThemeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
        {isMobile ? (
            <>
        <Sidebar width="80px" backgroundColor={themes.colors.white} style={{ height: "100vh", backgroundColor: themes.colors.white, position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={themes.menuItemStyles}>

          <MenuItem disabled></MenuItem>
          <MenuItem icon={<img className="image" alt="Gript" src={icon['gript']} />} component={<Link to="/gript" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="Rte" src={icon['rte']} />} component={<Link to="/rte" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Spiked-Online" src={icon['spiked']} />} component={<Link to="/spiked" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="GB News" src={icon['gbn']} />} component={<Link to="/gbnews" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Sky News" src={icon['sky']} />} component={<Link to="/sky" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="The Guardian" src={icon['guard']} />} component={<Link to="/guardian" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Mail" src={icon['dmail']} />} component={<Link to="/dailymail" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Daily Sceptic" src={icon['sceptic']} component={<Link to="/dailysceptic" />}/>}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Blaze" src={icon['blaze']} component={<Link to="/blaze" />} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Timcast" src={icon['tim']} component={<Link to="/timcast" />}/>}></MenuItem>
          <MenuItem icon={<img className="image" alt="Breitbart" src={icon['breit']} />} component={<Link to="/breitbart" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="Infowars" src={icon['info']} />} component={<Link to="/infowars" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />} component={<Link to="/revolver" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} component={<Link to="/bongino" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={icon['trend']} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={icon['call']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={icon['think']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={icon['gwp']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={icon['pmill']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews" src={icon['euro']} />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC" src={icon['abc']} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={icon['cbs']} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={icon['npr']} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={icon['vox']} />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={icon['pol']} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={icon['hill']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={icon['yah']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={icon['beast']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={icon['huff']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={icon['glo']} />}></MenuItem>
        </Menu>
      </Sidebar>
      </>
    ) : (
        <>
        <Sidebar backgroundColor={themes.colors.white} style={{ height: "100vh", backgroundColor: themes.colors.white, position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={themes.menuItemStyles}>

        <MenuItem disabled></MenuItem>
          <MenuItem icon={<img className="image" alt="Gript"src={icon['gript']} />} active={window.location.pathname === "/gript"} component={<Link to="/gript" />}> Gript </MenuItem>
          <MenuItem icon={<img className="image" alt="Rte" src={icon['rte']} />} active={window.location.pathname === "/rte"} component={<Link to="/rte" />}> RTE </MenuItem>
          <MenuItem icon={<img className="image" alt="Spiked-Online" src={icon['spiked']} />} active={window.location.pathname === "/spiked"} component={<Link to="/spiked" />}> Spiked-Online </MenuItem>
          <MenuItem icon={<img className="image" alt="GB News" src={icon['gbn']} />} active={window.location.pathname === "/gbnews"} component={<Link to="/gbnews" />}> GB News </MenuItem>
          <MenuItem icon={<img className="image" alt="Sky News" src={icon['sky']} />} active={window.location.pathname === "/sky"} component={<Link to="/sky" />}> Sky News </MenuItem>
          <MenuItem icon={<img className="image" alt="The Guardian" src={icon['guard']} />} active={window.location.pathname === "/guardian"} component={<Link to="/guardian" />}> The Guardian </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Mail" src={icon['dmail']} />} active={window.location.pathname === "/dailymail"} component={<Link to="/dailymail" />}> The Daily Mail </MenuItem>
          <MenuItem icon={<img className="image" alt="Daily Sceptic" src={icon['sceptic']} />} active={window.location.pathname === "/dailysceptic"} component={<Link to="/dailysceptic" />}> Daily Sceptic</MenuItem>
          <MenuItem icon={<img className="image" alt="The Blaze" src={icon['blaze']} />} active={window.location.pathname === "/blaze"} component={<Link to="/blaze" />}> The Blaze </MenuItem>
          <MenuItem icon={<img className="image" alt="Timcast" src={icon['tim']} />} active={window.location.pathname === "/timcast"} component={<Link to="/timcast" />}> Timcast </MenuItem>
          <MenuItem icon={<img className="image" alt="Breitbart" src={icon['breit']} />} active={window.location.pathname === "/breitbart"} component={<Link to="/breitbart" />}> Breitbart </MenuItem>
          <MenuItem icon={<img className="image" alt="Infowars" src={icon['info']} />} active={window.location.pathname === "/infowars"} component={<Link to="/infowars" />}> Infowars </MenuItem>
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />}> Zerohedge </MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />} active={window.location.pathname === "/revolver"} component={<Link to="/revolver" />}> Revolver News </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} active={window.location.pathname === "/bongino"} component={<Link to="/bongino" />}> Bongino Report </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={icon['trend']} />} component={<Link to="/saved" />}> Trending Politics </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={icon['call']} />} component={<Link to="/history" />}> The Daily Caller </MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={icon['think']} />} component={<Link to="/left" />}> American Thinker </MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={icon['gwp']} />} component={<Link to="/right" />}> The Gateway Pundit </MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={icon['pmill']} />} component={<Link to="/bothsides" />}> The Post Millennial </MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews"  src={icon['euro']} />} component={<Link to="/right" />}> Euronews </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC"  src={icon['abc']} />} component={<Link to="/bothsides" />}> ABC </MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={icon['cbs']} />}> CBS </MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={icon['npr']} />}> NPR </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={icon['vox']} />}> Vox </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={icon['pol']} />}> Politico </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={icon['hill']} />}> The Hill </MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={icon['yah']} />}> Yahoo News </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={icon['beast']} />}> The Daily Beast </MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={icon['huff']} />}> Huffington Post </MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={icon['glo']} />}> Global News </MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </>
    );
}
    
export default RightProsidebar;