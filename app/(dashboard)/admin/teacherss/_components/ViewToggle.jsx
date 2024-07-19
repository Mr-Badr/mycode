import React from 'react';
import Link from 'next/link';

const ViewToggle = ({ activeView, setActiveView }) => {
  return (
    <div className="nav btn-group" role="tablist">
      <div className='me-2'>
        <Link href="/admin/teachers/add-teacher" className="btn btn-primary" alt="">إضافة أستاذ جديد</Link>
      </div>
      <button
        className={`btn btn-outline-secondary ${activeView === 'grid' ? 'active' : ''}`}
        onClick={() => setActiveView('grid')}
        data-bs-toggle="tab"
        data-bs-target="#tabPaneGrid"
        role="tab"
        aria-controls="tabPaneGrid"
        aria-selected={activeView === 'grid'}
      >
        <span className="fe fe-grid"></span>
      </button>
      <button
        className={`btn btn-outline-secondary ${activeView === 'list' ? 'active' : ''}`}
        onClick={() => setActiveView('list')}
        data-bs-toggle="tab"
        data-bs-target="#tabPaneList"
        role="tab"
        aria-controls="tabPaneList"
        aria-selected={activeView === 'list'}
        tabIndex="-1"
      >
        <span className="fe fe-list"></span>
      </button>
    </div>
  );
};

export default ViewToggle;
