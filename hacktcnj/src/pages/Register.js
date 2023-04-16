import "./login.css";
import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import database from "../firebase";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { setDoc, collection, getDocs, query, where, doc } from "firebase/firestore";


const Register = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try{
    const {user} = await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Signed in
      })
      database.collection("users").doc(user.uid).set({
        name: email
      })
    }
    
    catch(err){

        console.error(err)
    }
    
      alert()

  };

  return (
    <div className="login">
      <form onSubmit={(e) => handleRegister(e)}>
        <h1>Register</h1>
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;