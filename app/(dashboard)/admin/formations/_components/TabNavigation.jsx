const TabNavigation = () => (
  <div className="card-header p-0">
    <ul className="nav nav-lb-tab border-bottom-0" id="tab" role="tablist">
      <li className="nav-item" role="presentation">
        <a className="nav-link active" id="courses-tab" data-bs-toggle="pill" href="#courses" role="tab" aria-controls="courses" aria-selected="true">الكل</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="approved-tab" data-bs-toggle="pill" href="#approved" role="tab" aria-controls="approved" aria-selected="false" tabIndex={-1}>تمت الموافقة عليه</a>
      </li>
      <li className="nav-item" role="presentation">
        <a className="nav-link" id="pending-tab" data-bs-toggle="pill" href="#pending" role="tab" aria-controls="pending" aria-selected="false" tabIndex={-1}>قيد الانتظار</a>
      </li>
    </ul>
  </div>
);

export default TabNavigation;
