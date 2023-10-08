import React from 'react';

const LocationMarker = ({ latitude, longitude }) => (
  <div>
    <svg
      height="40"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
      fill="#ff0000"
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  </div>
);

export default LocationMarker;