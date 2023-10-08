import { signOut } from "firebase/auth";
import React, { useState } from 'react';
import {auth} from "./firebase";
import { useNavigate } from "react-router-dom";
import EventCreationPage from './EventCreationPage';
import EventList from './EventList';
import UserAttributes from './UserAttributes';


function HomeScreen(){
    
    const history = useNavigate();

    const handleClick = () =>{
        signOut(auth).then(value=>{
            console.log(value, "value")
            history('/')
        })
    }
    const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };
    return(
        <div className="App">
            <h1>Home</h1>
            <h2>Event Hosting</h2>
             <EventCreationPage addEvent={addEvent} />
             <EventList events={events} />
            <div className="App">
                <UserAttributes />
            </div>
            <button onClick={handleClick}>Sign Out</button>
        </div>
    )
}


export default HomeScreen;