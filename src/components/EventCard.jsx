import React from "react";

const EventCard = ({ event, onEdit, onDelete }) => {
  return (
    <div style={cardStyle}>
      <h3>{event.name}</h3>
      <p>
        <strong>Time:</strong> {event.startTime} - {event.endTime}
      </p>
      <p>
        <strong>Description:</strong> {event.description || "No description"}
      </p>
      <div style={buttonContainerStyle}>
        <button style={editButtonStyle} onClick={() => onEdit(event)}>
          Edit
        </button>
        <button style={deleteButtonStyle} onClick={() => onDelete(event)}>
          Delete
        </button>
      </div>
    </div>
  );
};

// Styling for the card
const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "12px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#fff",
};

const buttonContainerStyle = {
  display: "flex",
  gap: "8px",
  marginTop: "10px",
};

const editButtonStyle = {
  padding: "8px 12px",
  backgroundColor: "#4caf50",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const deleteButtonStyle = {
  padding: "8px 12px",
  backgroundColor: "#f44336",
  color: "white",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

export default EventCard;
