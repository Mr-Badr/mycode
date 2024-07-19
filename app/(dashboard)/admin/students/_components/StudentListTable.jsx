import React from 'react';

const StudentListTable = ({ filtered, handleEditClick, handleDeleteClick }) => {
  console.log("filtered");
  //console.log(filtered);
  return (
    <div className="card">


      <div className="table-responsive">
        <table className="table mb-0 text-nowrap table-hover table-centered">
          <thead className="table-light">
            <tr>
              <th>الإسم الكامل</th>
              <th>الفصل</th>
              <th>الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((student) => (
              <tr key={student.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={student.image ? student.image : "../../assets/images/avatar/avatar-12.jpg"}
                      alt=""
                      className="rounded-circle avatar-md me-2"
                    />
                    <h5 className="mb-0 tajawal-bold" style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                      {`${student.first_name} ${student.last_name}`}
                    </h5>
                  </div>
                </td>
                <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                  {student.classe_id}
                </td>
                <td>
                  <div className="hstack gap-4">
                    <span className="dropdown dropstart">
                      <a
                        className="btn-icon btn btn-ghost btn-sm rounded-circle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        data-bs-offset="-20,20"
                        aria-expanded="false"
                      >
                        <i className="fe fe-more-vertical"></i>
                      </a>
                      <span className="dropdown-menu">
                        <span className="dropdown-header">الإعدادات</span>
                        <button className="dropdown-item" onClick={() => handleEditClick(student)}>
                          <i className="fe fe-edit dropdown-item-icon"></i>
                          تعديل
                        </button>
                        <button className="dropdown-item" onClick={() => handleDeleteClick(student.id)}>
                          <i className="fe fe-trash dropdown-item-icon"></i>
                          حذف
                        </button>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="card-footer">
          <nav>
            <ul className="pagination justify-content-center">
              <li className="page-item disabled">
                <a className="page-link mx-1 rounded" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
                  </svg>
                </a>
              </li>
              <li className="page-item active">
                <a className="page-link mx-1 rounded" href="#">1</a>
              </li>
              <li className="page-item">
                <a className="page-link mx-1 rounded" href="#">2</a>
              </li>
              <li className="page-item">
                <a className="page-link mx-1 rounded" href="#">3</a>
              </li>
              <li className="page-item">
                <a className="page-link mx-1 rounded" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default StudentListTable;
