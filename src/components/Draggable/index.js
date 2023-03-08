import React, { useContext, useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import ThemeContext from "../../contexts/themeContext";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import "./rightSidebar.css"
import { outlets } from "../../icons/icons";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const Drag = () => {
    const theme = useTheme();
    const themes = useContext(ThemeContext);
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const [outs, setOuts] = useState(outlets);

    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(outs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setOuts(items);
      }

    return (
        <>
        <Sidebar backgroundColor={themes.colors.white} style={{ height: "100vh", backgroundColor: themes.colors.white, position: "sticky", top: 0, borderRight: '0px'}}>
        <Menu menuItemStyles={themes.menuItemStyles}>

        <MenuItem disabled></MenuItem>
        <DragDropContext  onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="outlets">
        {(provided) => (
        <div className="outlets" {...provided.droppableProps} ref={provided.innerRef}>
          {outs.map(({id, name, icon}, index) => {
            return (
                <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (

                    <MenuItem ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} icon={<img className="image" alt={name} src={icon} />} active={window.location.pathname === `/${id}`} component={<Link to={`/${id}`} />}> {name} </MenuItem>
                )}
                </Draggable>
            )}
            )}  
        </div>
        )}
        </Droppable>
        </DragDropContext>
        </Menu>
      </Sidebar>
        </>
    );
}
    
export default Drag;