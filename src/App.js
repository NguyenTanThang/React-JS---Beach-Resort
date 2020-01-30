import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Rooms from "./components/Rooms";
import RoomDetails from "./components/RoomDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route path="/rooms/:id" component={RoomDetails} />
      </Router>
    </div>
  );
}

export default App;
