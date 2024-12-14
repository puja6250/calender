// /src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calendar from "./components/Calendar";
//import EventModal from "./components/EventModel";

const App = () => {
  const [events, setEvents] = useState(
    JSON.parse(localStorage.getItem("events")) || {}
  );

  // Save events to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  return (
    <Router>
      <div className="app-container">
       
        <Routes>
          <Route
            path="/"
            element={<Calendar events={events} setEvents={setEvents} />}
          />

       
        </Routes>
      </div>
    </Router>
  );
};

export default App;
