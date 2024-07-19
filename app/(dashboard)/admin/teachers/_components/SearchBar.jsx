import React from 'react';

const SearchBar = ({ searchTerm, handleSearchChange }) => (
  <div className="card-header mb-4">
    <input
      type="search"
      className="form-control"
      placeholder="بحث عن أستاذ"
      value={searchTerm}
      onChange={handleSearchChange}
    />
  </div>
);

export default SearchBar;
