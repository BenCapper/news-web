import React, { useContext, useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import ThemeContext from "../../contexts/themeContext";
import "./rightSidebar.css"
import { outlets } from "../../icons/icons";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { getDatabase, ref, set,onValue } from "firebase/database";
import { AuthContext } from "../../contexts/authContext";
import { db } from "../../firebase-config";


const Drag = () => {
    const context = useContext(AuthContext);
    const themes = useContext(ThemeContext);
    let list = JSON.parse(window.localStorage.getItem('outlets'));
    const [outs, setOuts] = useState(list ? list : outlets);

    useEffect(() => {
        if (context.user !== ''){
          onValue(ref(db, 'user-outlets/' + context.user.uid), (snapshot) => {
            const found = (snapshot.val() && snapshot.val());
            if (found !== list){
                setOuts(found)
            }
          }, {
            onlyOnce: true
          })}
        });


    function handleOnDragEnd(result) {
        if (!result.destination) return;
    
        const items = Array.from(outs);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
    
        setOuts(items);
        //Set Local Storage
        
        if (context.user !== ''){
            const db = getDatabase();
            set(ref(db, 'user-outlets/' + context.user.uid), items);
          }
        else window.localStorage.setItem('outlets', JSON.stringify(items));
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
            {provided.placeholder}
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