import React from 'react';
import { Input } from 'antd';

const StudentSearch = ({ searchTerm, onSearchChange }) => {
  return (
    <Input
    className='my-5'
      placeholder="بحث الطلاب"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value.toLowerCase())}
    />
  );
};

export default StudentSearch;
