// File path: /app/admin/levelss/[[...slug]]/Layout.jsx
import React from 'react';
import Navbar from '../../_shared/Navbar'; // Adjust path as necessary
import Sidebar from '../../_shared/Sidebar'; // Adjust path as necessary
import GetLevels from '../_components/GetLevels'; // Adjust path as necessary

const Layout = ({ params }) => {

  return (
    <div className="wrapper">
      <div className="content-wrapper">
        <GetLevels params={params} />
      </div>
    </div>
  );
};

export default Layout;
