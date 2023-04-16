import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-logo">
          <img src="https://media.discordapp.net/attachments/330876691893190677/1096858814256521326/JustLogo_1.png"></img>
          <h2>PixelPair</h2>
        </div>
        <Link>
          <button>Login</button>
        </Link>
      </div>
      <div className="tagline">
        <h1>See the bigger picture</h1>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
