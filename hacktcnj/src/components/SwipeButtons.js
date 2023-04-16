import React from "react";
import "./SwipeButtons.css";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Icon, IconButton } from "@mui/material";

const SwipeButtons = () => {
  return (
    <div className="swipe-buttons">
      <IconButton>
        <ArrowLeftIcon fontSize="large" />
      </IconButton>
      <IconButton>
        <ArrowRightIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
