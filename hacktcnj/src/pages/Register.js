import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import database from "../firebase";
import {
  getDatabase,
  set,
  ref as sRef,
  update,
} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js";
import { auth } from "../firebase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        //sets credentials to a user's unique uid made my firebase
        set((sRef, database, "users/" + user.uid), {
          email: email,
          password: password,
        })
          .then(() => {
            // Data saved successfully!
          })

          //calls any errors
          .catch((error) => {
            // data wasn't saved, error shows up on page
            alert(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="register">
      <form onSubmit={(e) => handleRegister(e)}>
        <h1>Register</h1>

        <label for="email">
          <b>Email</b>
        </label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <b>Password</b>
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

        <input type="file" id="myFile" name="filename"/>
        




        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
