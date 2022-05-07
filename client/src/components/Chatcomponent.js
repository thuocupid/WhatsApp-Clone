import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import React from "react";
import "./Chatcomponent.css";

function Chatcomponent() {
  return (
    <div className="chat">
      {/* Start of chat header */}
      <div className="chat_header">
        <Avatar />

        <div className="chat_headerInfo">
          <h3>Username</h3>
          <p>Typing...</p>
        </div>

        <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      {/* Start of Chat body */}
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Thuo</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message  chat_reciever">
          <span className="chat_name">Thuo</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>

        <p className="chat_message">
          <span className="chat_name">Thuo</span>
          This is a message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p> 
      </div>

      {/* Start of the Footer section */}
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
            <input type="text"  placeholder='Type a message' />
            <button type='submit'>Send a message</button>
        </form>
        <MicIcon  />
      </div>

    </div>
  );
}

export default Chatcomponent;
