import React, { useState } from 'react';
import Chat from "../components/Chat";
import Header from '../components/Header';
import "./aboutus.css";

function Aboutus() {
  // State to manage chat messages
  const [messages, setMessages] = useState([]);

  // Function to handle sending a new message
  const handleSendMessage = (message) => {
    // Add the new message to the messages state
    setMessages([...messages, message]);
  }

  return (
    <div>
      <Header title="About Us" />
      <div className="about-container">
        <div className="profile">
        <a href="https://www.linkedin.com/in/kaitlyn-torres/" target="_blank" rel="noopener noreferrer">
          <img src="https://media.licdn.com/dms/image/D4E03AQE3eCSmwA5y3w/profile-displayphoto-shrink_400_400/0/1673309152611?e=1687392000&v=beta&t=OQB2MnT-7eJ7gWJmlqR4hB5-i_ChxamVCIL1uSShJsQ" alt="Profile 1" />
          </a>
          <h2>Kaitlyn Torres</h2>
          <p>Honors Intern @ U.S. Department of Justice || Data Analytics Intern @ New York Community Bank (NYCB)|| Masters in Data Analytics @ Adelphi University</p>
        </div>

        <div className="profile">
        <a href="https://www.linkedin.com/in/hugomunozreinoso/" target="_blank" rel="noopener noreferrer">
          <img src="https://media.licdn.com/dms/image/D5603AQHsFQn_rz_b1A/profile-displayphoto-shrink_400_400/0/1665615281283?e=1687392000&v=beta&t=2Cl8qCvxczJTVbp9L6asiDIgEN5Ih6Fk9COlPtERS1M" alt="Profile 2" />
          </a>
          <h2>Hugo Munoz Reinoso</h2>
          <p>Upcoming Intern InfoSec @ UPS || Intern @ Cyber Security Summit || Student-Athlete CS Information Security and Software Engineering @ Adelphi University
          </p>
        </div>

        <div className="profile">
        <a href="https://www.linkedin.com/in/kivanc-peltek-9787701a1/" target="_blank" rel="noopener noreferrer">
          <img src="https://media.licdn.com/dms/image/D4E03AQFCGVV9wT4giA/profile-displayphoto-shrink_400_400/0/1672711786834?e=1687392000&v=beta&t=3eQ6-jt7vHRTWUka_yEr7TqU8SNPcl0rL3y-jWmY-zQ" alt="Profile 3" />
        </a>  
          <h2>Kivanc Peltek </h2>
          <p> Upcoming Intern @ Nassau LandTrust || BS in Computer Science at Adelphi University @ Adelphi University</p>
        </div>
        <div className="profile">
        <a href="https://www.linkedin.com/in/berat-kales-0861aa18b/ " target="_blank" rel="noopener noreferrer">
          <img src="https://media.licdn.com/dms/image/D4E03AQFBuvJJbr9twQ/profile-displayphoto-shrink_400_400/0/1679334701656?e=1687392000&v=beta&t=faOqOGzDAt-NwOM6VtQtyQ0TFR7b2Yuq8LrT3perNps" alt="Profile 4" />
        </a>  
          <h2>Berat Kales</h2>
          <p>Intern @ Advisory Solutions || BS in Computer Science Information Security and Software Engineering @ Adelphi University</p>
        </div>
      </div>
      <Chat messages={messages} onSendMessage={handleSendMessage} />
    </div>
  );
}

export default Aboutus;