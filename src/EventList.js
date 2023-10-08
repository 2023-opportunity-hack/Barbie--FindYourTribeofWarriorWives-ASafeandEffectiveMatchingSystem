import React from 'react';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Events</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.eventName}</strong>
            <p>Date: {event.eventDate}</p>
            <p>Time: {event.eventTime}</p>
            {event.zoomLink && (
              <p>
                Zoom Link: <a href={event.zoomLink}>Join Zoom Meeting</a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;