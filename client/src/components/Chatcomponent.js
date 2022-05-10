import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import MicIcon from "@mui/icons-material/Mic";
import { IconButton } from "@mui/material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import "./Chatcomponent.css";
import axios from "../axios";

function Chatcomponent({ messages }) {
  const [input, setInput] = useState(" ");

  const sendMessage = async (e) => {
    e.preventDefault();

    await axios.post("api/v1/messages/new", {
      message: input,
      name: "Katula Bhako",
      timestamp: "demo timestamp",
      received: true,
    });

    setInput('')
  };

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
        {messages.map((message) => (
          <p className={`chat_message ${message.received && "chat_reciever"}`}>
            <span className="chat_name">{message.name}</span>
            {message.message}
            <span className="chat_timestamp">{message.timestamp}</span>
          </p>
        ))}
      </div>

      {/* Start of the Footer section */}
      <div className="chat_footer">
        <InsertEmoticonIcon />
        <form>
          <input
            type="text"
            placeholder="Type a message"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chatcomponent;
