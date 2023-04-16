import React, { useEffect, useState } from "react";
import "./ChatScreen.css";
import { Avatar } from "@mui/material";
import Header from "../components/Header";
//import {database, auth} from '../firebase'
import {collection, query, limit, orderBy, onSnapshot, QuerySnapshot} from 'firebase/firestore';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: "Berat",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
      message: "This is the first message",
    },
    {
      name: "Kaitlyn",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg",
      message: "This is the second message!",
    },
    {
      message: "Replied!",
    },
  ]);

  /*
  useEffect(() => {
    const q = query(
      collection(database, "messages"),
      orderBy("timestamp")
    );
    const data = onSnapshot(q, (QuerySnapshot) => {
      let messages = [];
      QuerySnapshot.forEach((doc) => {
        messages.push({...doc.data(), id: doc.id});

      });
      setMessages(messages);
    });
    return () => data;
  })
  */

  //const {userid} = auth.currentUser

  const handleSend = (e) => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput(" ");
  };

  return (
    <div className="chatScreen">
      <Header />
      <p className="chatScreen__timestamp">
        {" "}
        KAITLYN CONNECTED WITH BERAT ON APRIL 15 2023
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text"> {message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__text__other"> {message.message}</p>
          </div>
        )
      )}
      <div>
        <form className="chatScreen__input">
          <input
            className="chatScreen__inputField"
            placeholder="Type a message..."
            type="text"
            onChange={e => setInput(e.target.value)}
          ></input>
          <button onClick={(e) => handleSend(e)} type="submit" className="chatScreen__inputButton">SEND</button>
        </form>
      </div>
    </div> 
  );
}

export default ChatScreen;
