import Link from 'next/link';

const PageHeader = () => (
  <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
    <div className="mb-3 mb-md-0">
      <h1 className="mb-1 tajawal-bold">الدورات</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><a href="admin-dashboard.html">لوحة التحكم</a></li>
          <li className="breadcrumb-item"><a href="#">الدورات</a></li>
          <li className="breadcrumb-item active" aria-current="page">الكل</li>
        </ol>
      </nav>
    </div>
    <div>
      <a href="/admin/formations-add" className="btn btn-primary">إضافة دورات جديدة</a>
    </div>
  </div>
);

export default PageHeader;
