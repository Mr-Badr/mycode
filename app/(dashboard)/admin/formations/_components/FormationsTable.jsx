import React from 'react';

const FormationsTable = ({ formations, formationTypes = [], handleEditClick, handleDeleteClick }) => {
  // Function to get the formation type name based on the typeId
  const getFormationTypeName = (typeId) => {
    const type = formationTypes.find(type => type.id === typeId);
    return type ? type.name : 'غير معروف'; // Return 'Unknown' if type is not found
  };

  return (
    <div className="table-responsive">
      <table className='table mb-0 text-nowrap table-hover table-centered'>
        <thead className='table-light'>
          <tr>
            <th>الإسم</th>
            <th>نوع الدورة</th>
            <th>الوصف</th>
            <th>الحالة</th>
            <th>التاريخ</th>
            <th>الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          {formations.length > 0 ? (
            formations.map((formation) => (
              <tr key={formation.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <img
                      src={formation.image || "../../assets/images/avatar/avatar-12.jpg"}
                      alt={formation.name || "No image"}
                      className="rounded-circle avatar-md me-2"
                    />
                    <h5 className="mb-0 tajawal-bold">{formation.name || "No name"}</h5>
                  </div>
                </td>
                <td>{getFormationTypeName(formation.formation_type_id)}</td>
                <td
                  style={{
                    height: '50px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    maxWidth: '200px'
                  }}
                >
                  {formation.description || "No description"}
                </td>
                <td>{formation.status || "Unknown status"}</td>
                <td>{new Date(formation.date_form).toLocaleDateString()}</td>
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
                        <button
                          className="dropdown-item"
                          onClick={() => handleEditClick(formation)}
                        >
                          <i className="fe fe-edit dropdown-item-icon"></i>
                          تعديل
                        </button>
                        <button
                          className="dropdown-item"
                          onClick={() => handleDeleteClick(formation.id)}
                        >
                          <i className="fe fe-trash dropdown-item-icon"></i>
                          حذف
                        </button>
                      </span>
                    </span>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">لا توجد بيانات</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FormationsTable;
