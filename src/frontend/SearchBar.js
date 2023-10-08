
import React from 'react';
import searchIcon from './search-icon.png';
const SearchBar = ({ onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
      />
      
      
      <button>
      <img src={searchIcon} alt="Search Icon" />
      </button>
    </div>
  );
}

export default SearchBar;