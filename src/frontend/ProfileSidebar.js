import React from 'react';
import './ProfileSidebar.css';

const ProfileSidebar = () => {
  return (
    <div className="profile-sidebar">

      <div className="profile-header">
        <img src="profile-picture.jpg" alt="Profile" className="profile-picture" />
        <h2>Name here</h2>
        <p>#tags here</p>
      </div>
      <div className="profile-menu">
        
      </div>
    </div>
  );
};

export default ProfileSidebar;
