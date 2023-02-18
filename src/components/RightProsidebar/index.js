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
          <MenuItem icon={<img className="image" alt="Rte" src={icon['rte']} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Spiked-Online" src={icon['spiked']} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="GB News" src={icon['gbn']} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Sky News" src={icon['sky']} />} component={<Link to="/right" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="The Guardian" src={icon['guard']} />} component={<Link to="/bothsides" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Mail" src={icon['dmail']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Daily Sceptic" src={icon['sceptic']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="The Blaze" src={icon['blaze']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Timcast" src={icon['tim']} />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Breitbart" src={icon['breit']} />} component={<Link to="/" />}>  </MenuItem>
          <MenuItem icon={<img className="image" alt="Infowars" src={icon['info']} />} component={<Link to="/saved" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />} component={<Link to="/history" />}></MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />} component={<Link to="/left" />}> </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} component={<Link to="/right" />}> </MenuItem>
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
          <MenuItem icon={<img className="image" alt="Rte" src={icon['rte']} />} component={<Link to="/" />}> RTE </MenuItem>
          <MenuItem icon={<img className="image" alt="Spiked-Online" src={icon['spiked']} />} component={<Link to="/saved" />}> Spiked-Online </MenuItem>
          <MenuItem icon={<img className="image" alt="GB News" src={icon['gbn']} />} component={<Link to="/history" />}> GB News </MenuItem>
          <MenuItem icon={<img className="image" alt="Sky News" src={icon['sky']} />} component={<Link to="/saved" />}> Sky News </MenuItem>
          <MenuItem icon={<img className="image" alt="The Guardian" src={icon['guard']} />} component={<Link to="/history" />}> The Guardian </MenuItem>
          <MenuItem icon={<img className="image" alt="The Daily Mail" src={icon['dmail']} />} component={<Link to="/left" />}> The Daily Mail </MenuItem>
          <MenuItem icon={<img className="image" alt="Daily Sceptic" src={icon['sceptic']} />} component={<Link to="/left" />}> Daily Sceptic</MenuItem>
          <MenuItem icon={<img className="image" alt="The Blaze" src={icon['blaze']} />} component={<Link to="/right" />}> The Blaze </MenuItem>
          <MenuItem icon={<img className="image" alt="Timcast" src={icon['tim']} />} component={<Link to="/bothsides" />}> Timcast </MenuItem>
          <MenuItem icon={<img className="image" alt="Breitbart" src={icon['breit']} />}> Breitbart </MenuItem>
          <MenuItem icon={<img className="image" alt="Infowars" src={icon['info']} />}> Infowars </MenuItem>
          <MenuItem icon={<img className="image" alt="Zerohedge" src={icon['zero']} />}> Zerohedge </MenuItem>
          <MenuItem icon={<img className="image" alt="Revolver News" src={icon['rev']} />}> Revolver News </MenuItem>
          <MenuItem icon={<img className="image" alt="Bongino Report" src={icon['bong']} />} component={<Link to="/" />}> Bongino Report </MenuItem>
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