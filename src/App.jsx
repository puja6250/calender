import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import EventCal from './Pages/EventCal'; // Import EventCal component
import CalendarPage from './Pages/CalenderPage'; // Import CalendarPage if you want it

const App = () => {
  const [events, setEvents] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<CalendarPage />} // Route to your calendar page
        />
        <Route
          path="/events/:date" // Dynamic route for event details by date
          element={<EventCal events={events} setEvents={setEvents} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
