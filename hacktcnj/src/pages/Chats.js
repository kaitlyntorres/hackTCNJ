import React from 'react';
import Chat from "../components/Chat";
import Header from '../components/Header';

function Chats()  {
  return (
    <div className="chats">
            <Header/>

        <Chat
          name="Berat"
          message="Hello"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
        <Chat
          name="Hugo"
          message="Im nice"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />º
        <Chat
          name="Kaitlyn"
          message="Shut the fuck up"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait00px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
        <Chat
          name="KP"
          message="Lets go play stack"
          timestamp="40 seconds"
          profilePic="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/1200px-Outdoors-man-portrait_%28cropped%29.jpg"
        />
    </div>
  )
}

export default Chats