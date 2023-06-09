import React from "react";
import "./landing.css";
import { Link } from "react-router-dom";
import Header from "../components/Header";


const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-header">
        <div className="landing-logo">
          <img src="https://media.discordapp.net/attachments/330876691893190677/1096858814256521326/JustLogo_1.png"></img>
          <h2>PixelPair</h2>
        </div>
        <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/aboutus">
          <button>About Us</button>
        </Link>
        </div>

      </div>
      <div className="tagline">
        <h1>Code & Collab</h1>
        <Link to="/register">
          <button>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;