import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import "./Header.css";
import { Icon, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <IconButton color="purple">
          <PersonIcon className="icon" fontSize="large" />
        </IconButton>
      </Link>
      <Link>
          <img
          className="logo"
          src="https://media.discordapp.net/attachments/330876691893190677/1096858814256521326/JustLogo_1.png"
        />
      </Link>

      <IconButton color="purple">
        <ChatBubbleIcon className="icon" fontSize="large" />
      </IconButton>
    </div>
  );
};

export default Header;
