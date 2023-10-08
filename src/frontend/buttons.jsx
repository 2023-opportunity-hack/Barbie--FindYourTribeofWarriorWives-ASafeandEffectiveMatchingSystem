import React from 'react';

const ColoredButton = () => {
  const buttonStyle = {
    backgroundColor: '#007bff', // Specify your desired color code
    color: '#ffffff', // Text color
    padding: '10px 20px', // Padding for the button
    borderRadius: '5px', // Optional: Add border radius for rounded corners
    border: 'none', // Optional: Remove border for a cleaner look
    cursor: 'pointer', // Optional: Add a pointer cursor on hover
  };

  return (
    <button style={buttonStyle}>
      Click me
    </button>
  );
};

export default ColoredButton;
