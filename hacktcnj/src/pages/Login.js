import "./login.css";
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import database from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Added state for error message

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "" || password === "") { // Check if email and password are empty
      setErrorMessage("Please enter email and password"); // Set error message
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          setErrorMessage(error.message); // Set error message from Firebase
        });

    }

    navigate("/swiping");

  };

  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        <br></br>
        {errorMessage && <p style={{color: "red"}}>{errorMessage}</p>} {/* Render error message */}
        <label for="email">
          <b>Email:  </b>
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <br></br>

        <label>
          <b>Password:   </b>
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <br></br>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;