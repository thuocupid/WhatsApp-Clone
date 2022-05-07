import React from "react";
import "./Sidebar.css";
import ChatIcon from "@mui/icons-material/Chat";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Avatar } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import SidebarChats from "./SidebarChats";

function Sidebar() {
  return (
    <div className="sidebar">

        {/* Start of sidebar header */}
      <div className="sidebar_header">
        <Avatar src="https://media.istockphoto.com/photos/nairobi-kenya-picture-id1299026534?b=1&k=20&m=1299026534&s=170667a&w=0&h=ZkZualo_Q0gIkjsfOZkV3WrXpNyrMfPGdmSR4_uXVRY=" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>

          <IconButton>
            <ChatIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>


        {/* start of sidebar search */}
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
             <SearchOutlined />
             <input type="text" placeholder="Search or start a new chat" />
        </div>
      </div>

      {/* Start of the Chat section */}
      <div className="sidebar_chats">
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
          <SidebarChats />
      </div>

    </div>
  );
}

export default Sidebar;
