import React from 'react';
import Chat from "../components/Chat";
import Header from '../components/Header';

function Chats()  {
  return (
    <div className="chats">
            <Header/>

        <Chat
          name="Berat"
          message="I am a beast in React"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
        <Chat
          name="Hugo"
          message="Love Firebase!"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />º
        <Chat
          name="Kaitlyn"
          message="Enjoy coding in Python!"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait00px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
        <Chat
          name="KP"
          message="I like CSS"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
    </div>
  )
}

export default Chats