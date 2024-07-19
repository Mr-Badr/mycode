import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total number of pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber, e) => {
    e.preventDefault(); // Prevent default anchor behavior
    paginate(pageNumber); // Call parent paginate function
  };
  console.log(currentPage);
  // Ensure currentPage does not exceed valid range
  if (currentPage < 1) {
    currentPage = 1;
  } else if (currentPage > pageNumbers.length) {
    currentPage = pageNumbers.length;
  }

  return (
    <nav>
      <ul className="pagination justify-content-center mt-4">
        {/* Previous Button */}
        <li className={`page-item me-1 ${currentPage === 1 ? 'disabled' : ''}`}>
          <a
            href="#!"
            className="page-link rounded"
            onClick={(e) => handlePageClick(currentPage - 1, e)} // Go to previous page
          >
            
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </a>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map(number => (
          <li key={number} className={`page-item me-1 ${currentPage === number ? 'active' : ''}`}>
            <a
              href="#!"
              className="page-link rounded"
              onClick={(e) => handlePageClick(number, e)} // Go to specific page
            >
              {number}
            </a>
          </li>
        ))}

        {/* Next Button */}
        <li className={`page-item me-1 ${currentPage === pageNumbers.length ? 'disabled' : ''}`}>
          <a
            href="#!"
            className="page-link rounded"
            onClick={(e) => handlePageClick(currentPage + 1, e)} // Go to next page
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
