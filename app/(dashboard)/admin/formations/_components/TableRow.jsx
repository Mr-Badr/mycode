const TableRow = ({ object, handleEditClick, handleDeleteClick }) => (
  <tr>
    <td>
      <a href="#" className="text-inherit">
        <div className="d-flex align-items-center">
          <div>
            <img src={object.image || "../../assets/images/avatar/avatar-12.jpg"} alt="" className="rounded-circle avatar-md me-2" />
          </div>
          <div className="ms-3">
            <h4 className="mb-0 tajawal-bold">{object.name}</h4>
            <span>Added on 7 July, 2024</span>
          </div>
        </div>
      </a>
    </td>
    <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
      {object.formation_type_id}
    </td>
    <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
      {object.description}
    </td>
    <td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
      {object.status}
    </td>
    <td>
      <a href="#" className="btn btn-outline-secondary btn-sm">رفض</a>
      <a href="#" className="btn btn-success btn-sm me-2">تمت الموافقة عليه</a>
    </td>
    <td>
      <span className="dropdown dropstart">
        <a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
          <i className="fe fe-more-vertical"></i>
        </a>
        <span className="dropdown-menu" aria-labelledby="courseDropdown1">
          <span className="dropdown-header">الإعدادات</span>
          <button className="dropdown-item" onClick={() => handleEditClick(object)}>
            <i className="fe fe-edit dropdown-item-icon"></i>
            تعديل
          </button>
          <button className="dropdown-item" onClick={() => handleDeleteClick(object.id)}>
            <i className="fe fe-trash dropdown-item-icon"></i>
            حذف
          </button>
        </span>
      </span>
    </td>
  </tr>
);

export default TableRow;
