// /src/components/EventList.js
import React from "react";
import { Link } from "react-router-dom";

const EventList = ({ events }) => {
  return (
    <div className="event-list">
      <h2>All Events</h2>
      {Object.keys(events).length === 0 ? (
        <p>No events available</p>
      ) : (
        Object.keys(events).map((date) => (
          <div key={date}>
            <h3>{date}</h3>
            <ul>
              {events[date].map((event, index) => (
                <li key={index}>
                  {event.eventName} ({event.startTime} - {event.endTime})
                  <br />
                  {event.description}
                </li>
              ))}
            </ul>
            <Link to={`/event/${date}`}>Add/Edit Event</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
