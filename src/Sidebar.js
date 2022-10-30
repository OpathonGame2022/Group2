import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {    

    const recentItem =(topic) => ( 
        <div className="sidebar__recentItem"></div> )
        return (
    <div className="sidebar">
     <div className="sidebar__top">
        <img src="http://image.noelshack.com/fichiers/2022/43/7/1667093343-sen-parc-banner.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2 className="h2__title__sidebar">Opathon</h2>
        <h4 className="h4__title__sidebar">Opathon with Estiam</h4>
        </div>

        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Who viewed you</p>
            <p className="sidebar__statNumber">2,543</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on post</p>
            <p className="sidebar__statNumber">2,448</p>
           </div>
          </div>
          
          <div className="sidebar__bottom">
              <p></p>
          </div>
          </div>    
    );
}

export default Sidebar;
