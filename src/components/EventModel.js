import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EventModal = ({ events, setEvents }) => {
  const { date } = useParams(); // Date from URL parameter (e.g. /event/2023-12-14)
  const navigate = useNavigate();

  // Check if the selected date has existing events
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [description, setDescription] = useState("");

  // Get events for the specific date
  const currentDateEvents = events[date] || []; // Ensure events[date] exists, or set to empty array

  useEffect(() => {
    // Pre-fill form fields if there are events for the selected date
    if (currentDateEvents.length > 0) {
      const event = currentDateEvents[0]; // Edit the first event (you can modify to handle multiple events)
      setEventName(event.eventName);
      setStartTime(event.startTime);
      setEndTime(event.endTime);
      setDescription(event.description);
    }
  }, [date, currentDateEvents]);

  const handleSaveEvent = () => {
    const eventData = { eventName, startTime, endTime, description };

    const updatedEvents = { ...events };
    if (!updatedEvents[date]) updatedEvents[date] = [];

    // If event already exists, update it; otherwise, add a new event
    if (currentDateEvents.length > 0) {
      updatedEvents[date][0] = eventData; // Overwrite the first event
    } else {
      updatedEvents[date].push(eventData); // Add new event
    }

    setEvents(updatedEvents); // Update the events state
    navigate("/events"); // Navigate to the events list page
  };

  const handleDeleteEvent = () => {
    const updatedEvents = { ...events };
    delete updatedEvents[date]; // Delete all events for this date
    setEvents(updatedEvents); // Update events state after deletion
    navigate("/events"); // Navigate to events list
  };

  return (
    <div className="event-modal">
      <h2>{currentDateEvents.length > 0 ? "Edit Event" : "Add Event"} for {date}</h2>

      {/* Event Name */}
      <input
        type="text"
        placeholder="Event Name"
        value={eventName}
        onChange={(e) => setEventName(e.target.value)}
      />

      {/* Start Time */}
      <input
        type="time"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
      />

      {/* End Time */}
      <input
        type="time"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
      />

      {/* Description */}
      <textarea
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      {/* Save/Update Event Button */}
      <button onClick={handleSaveEvent}>
        {currentDateEvents.length > 0 ? "Update Event" : "Save Event"}
      </button>

      {/* Delete Event Button (Only visible when editing an existing event) */}
      {currentDateEvents.length > 0 && (
        <button onClick={handleDeleteEvent}>Delete Event</button>
      )}

      {/* Cancel Button */}
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
};

export default EventModal;
