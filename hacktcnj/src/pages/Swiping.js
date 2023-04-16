import React, { useEffect, useState } from "react";
import TinderCard from "react-tinder-card";
import "./Swiping.css";
import {
  doc,
  collection,
  getDoc,
  query,
  where,
  onSnapshot,
  querySnapshot,
  getDocs,
} from "firebase/firestore";
import database from "../firebase";
import Header from "../components/Header";
import SwipeButtons from "../components/SwipeButtons";

const Swiping = () => {
  const [info, setInfo] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const userArray = [];
    const querySnapshot = await getDocs(collection(database, "users"));
    querySnapshot.forEach((doc) => {
      userArray.push(doc.data());
    });
    setPeople([...userArray]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.photo})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
        <TinderCard />
      </div>
      <SwipeButtons/>
    </div>
  );
};

export default Swiping;
