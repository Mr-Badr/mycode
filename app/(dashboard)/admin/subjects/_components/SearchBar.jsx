"use client";
import React from 'react';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
  return (
    <div className="search-bar mb-3">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="بحث عن المواد..."
        className="form-control"
      />
    </div>
  );
};

export default SearchBar;
