import React, { useState } from 'react';

const EventCreationPage = ({ addEvent }) => {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTime, setEventTime] = useState('');
  const [zoomLink, setZoomLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      eventName,
      eventDate,
      eventTime,
      zoomLink,
    };
    addEvent(newEvent);
    // Clear the form
    setEventName('');
    setEventDate('');
    setEventTime('');
    setZoomLink('');
  };

  return (
    <div>
      <h2>Create Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Event Name:</label>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Date:</label>
          <input
            type="date"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Event Time:</label>
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Zoom Link:</label>
          <input
            type="url"
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
          />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default EventCreationPage;