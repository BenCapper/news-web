import React, { useContext } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import ThemeContext from "../../contexts/themeContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./rightSidebar.css"
import { icon } from "../../icons/icons";
import {BrowserView, MobileView} from 'react-device-detect';


const RightProsidebar = () => {
    const theme = useTheme();
    const themes = useContext(ThemeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <>
        <BrowserView>
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
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />} component={<Link to="/zerohedge" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />} component={<Link to="/revolver" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} component={<Link to="/bongino" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={icon['trend']} />} component={<Link to="/trendingpolitics" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={icon['call']} />} component={<Link to="/dailycaller" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={icon['think']} />} component={<Link to="/americanthinker" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={icon['gwp']} />} component={<Link to="/gatewaypundit" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={icon['pmill']} component={<Link to="/postmillennial" />} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews" src={icon['euro']} />} component={<Link to="/euronews" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC" src={icon['abc']} />} component={<Link to="/abc" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={icon['cbs']} />} component={<Link to="/cbs" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={icon['npr']} />} component={<Link to="/npr" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={icon['vox']} />} component={<Link to="/vox" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={icon['pol']} />} component={<Link to="/politico" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={icon['hill']} />} component={<Link to="/thehill" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={icon['yah']} />} component={<Link to="/yahoonews" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={icon['beast']} />} component={<Link to="/dailybeast" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={icon['huff']} />} component={<Link to="/huffingtonpost" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={icon['glo']} />} component={<Link to="/globalnews" />}></MenuItem>
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
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />} active={window.location.pathname === "/zerohedge"} component={<Link to="/zerohedge" />}> Zerohedge </MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />} active={window.location.pathname === "/revolver"} component={<Link to="/revolver" />}> Revolver News </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} active={window.location.pathname === "/bongino"} component={<Link to="/bongino" />}> Bongino Report </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={icon['trend']} />} active={window.location.pathname === "/trendingpolitics"} component={<Link to="/trendingpolitics" />}> Trending Politics </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={icon['call']} />} active={window.location.pathname === "/dailycaller"} component={<Link to="/dailycaller" />}> The Daily Caller </MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={icon['think']} />} active={window.location.pathname === "/americanthinker"} component={<Link to="/americanthinker" />}> American Thinker </MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={icon['gwp']} />} active={window.location.pathname === "/gatewaypundit"} component={<Link to="/gatewaypundit" />}> The Gateway Pundit </MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={icon['pmill']} />} active={window.location.pathname === "/postmillennial"} component={<Link to="/postmillennial" />}> The Post Millennial </MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews"  src={icon['euro']} />} active={window.location.pathname === "/euronews"} component={<Link to="/euronews" />}> Euronews </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC"  src={icon['abc']} />} active={window.location.pathname === "/abc"}  component={<Link to="/abc" />}> ABC </MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={icon['cbs']} />} active={window.location.pathname === "/cbs"}  component={<Link to="/cbs" />}> CBS </MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={icon['npr']} />} active={window.location.pathname === "/npr"}  component={<Link to="/npr" />}> NPR </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={icon['vox']} />} active={window.location.pathname === "/vox"}  component={<Link to="/vox" />}> Vox </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={icon['pol']} />} active={window.location.pathname === "/politico"}  component={<Link to="/politico" />}> Politico </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={icon['hill']} />} active={window.location.pathname === "/thehill"}  component={<Link to="/thehill" />}> The Hill </MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={icon['yah']} />} active={window.location.pathname === "/yahoonews"}  component={<Link to="/yahoonews" />}> Yahoo News </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={icon['beast']} />} active={window.location.pathname === "/dailybeast"}  component={<Link to="/dailybeast" />}> The Daily Beast </MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={icon['huff']} />} active={window.location.pathname === "/huffingtonpost"}  component={<Link to="/huffingtonpost" />}> Huffington Post </MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={icon['glo']} />} active={window.location.pathname === "/globalnews"}  component={<Link to="/globalnews" />}> Global News </MenuItem>
        </Menu>
      </Sidebar>
        </>
    )}
    </BrowserView>
    <MobileView>

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
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />} component={<Link to="/zerohedge" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />} component={<Link to="/revolver" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} component={<Link to="/bongino" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Trending Politics" src={icon['trend']} />} component={<Link to="/trendingpolitics" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Caller" src={icon['call']} />} component={<Link to="/dailycaller" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="American Thinker" src={icon['think']} />} component={<Link to="/americanthinker" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Gateway Pundit" src={icon['gwp']} />} component={<Link to="/gatewaypundit" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Post Millennial" src={icon['pmill']} component={<Link to="/postmillennial" />} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Euronews" src={icon['euro']} />} component={<Link to="/euronews" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="ABC" src={icon['abc']} />} component={<Link to="/abc" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="CBS" src={icon['cbs']} />} component={<Link to="/cbs" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="NPR" src={icon['npr']} />} component={<Link to="/npr" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Vox" src={icon['vox']} />} component={<Link to="/vox" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Politico" src={icon['pol']} />} component={<Link to="/politico" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Hill" src={icon['hill']} />} component={<Link to="/thehill" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Yahoo News" src={icon['yah']} />} component={<Link to="/yahoonews" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Beast" src={icon['beast']} />} component={<Link to="/dailybeast" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Huffington Post" src={icon['huff']} />} component={<Link to="/huffingtonpost" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Global News" src={icon['glo']} />} component={<Link to="/globalnews" />}></MenuItem>
        </Menu>
      </Sidebar>
      </>

    </MobileView>
    </>
    );
}
    
export default RightProsidebar;