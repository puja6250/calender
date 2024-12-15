import React, { useState } from 'react';

const EventCal = ({ events, setEvents }) => {
  const [newEvent, setNewEvent] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleEventChange = (e) => {
    setNewEvent(e.target.value);
  };

  const handleAddEvent = () => {
    setEvents((prevEvents) => ({
      ...prevEvents,
      [selectedDate]: [...(prevEvents[selectedDate] || []), newEvent],
    }));
    setNewEvent('');
  };

  return (
    <div>
      <h1>Events for {selectedDate}</h1>
      <input
        type="text"
        value={newEvent}
        onChange={handleEventChange}
        placeholder="Add an event"
      />
      <button onClick={handleAddEvent}>Add Event</button>
      <div>
        <h3>Event List</h3>
        <ul>
          {events[selectedDate]?.map((event, index) => (
            <li key={index}>{event}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EventCal;
