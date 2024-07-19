import React from 'react';

const Pagination = () => (
  <div className="card-footer">
    <nav>
      <ul className="pagination justify-content-center mb-0">
        <li className="page-item disabled">
          <a className="page-link mx-1 rounded" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
            </svg>
            <span className="sr-only">Previous</span>
          </a>
        </li>
        <li className="page-item"><a className="page-link mx-1 rounded" href="#">1</a></li>
        <li className="page-item active"><a className="page-link mx-1 rounded" href="#">2</a></li>
        <li className="page-item"><a className="page-link mx-1 rounded" href="#">3</a></li>
        <li className="page-item">
          <a className="page-link mx-1 rounded" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.354 2.354a.5.5 0 0 1 0-.708z" />
            </svg>
            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Pagination;
