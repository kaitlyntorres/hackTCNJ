import "./login.css";
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import database from "../firebase";
import {
  getDatabase,
  set,
  ref as sRef,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { auth } from "../firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        // Signed in
        const user = userCredential.user;

        const dt = new Date();
        update((sRef, database, "users" + user.uid), {
          last_login: dt,
        });
      })

      alert("Success")
      

  };

  return (
    <div className="login">
      <form onSubmit={(e) => handleLogin(e)}>
        <h1>Login</h1>
        <br></br>

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
