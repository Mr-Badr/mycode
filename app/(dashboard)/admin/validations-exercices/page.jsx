"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token

function Page() {
  
  /* Show model Start */
  const [show, setShow] = useState(false);
  const sectionClassName = "container-fluid p-4";
  const sectionStyle = {};
  /* Show model End */

  const [objects, setObjects] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selected, setSelected] = useState({
    id: '',
    name: '',
    last_name: '',
    description: '',
    hourly_rate: ''
  });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exercices`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setObjects(response.data.data);
        setFiltered(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (object) => {
    setSelected(object);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios.delete(`https://clicschool.logicielab.net/api/exercices/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        const newObjects = objects.filter(object => object.id !== deleteId);
        setObjects(newObjects);
        setFiltered(newObjects);
        setShowDeleteModal(false);
        setDeleteId(null);
        toast.success('تم الحذف بنجاح!', {
          position: "bottom-right"
        });
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        toast.error('حدث خطأ أثناء الحذف. الرجاء المحاولة مرة أخرى.', {
          position: "bottom-right"
        });
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelected(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSaveClick = () => {
    const { id, user_id, name, last_name, description, hourly_rate } = selected;

    axios.put(`https://clicschool.logicielab.net/api/exercices/${id}`,
      { user_id, name, last_name, description, hourly_rate },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        const newObjects = objects.map(object =>
          object.id === id ? { ...object, user_id, name, last_name, description, hourly_rate } : object
        );
        setObjects(newObjects);
        setFiltered(newObjects);
        setShowEditModal(false);
      })
      .catch(error => {
        console.error('Error updating data:', error);
      });
  };


  const handleCloseEditPopup = () => {
    setIsEditPopupOpen(false);
    setSelectedData({
      id: '',
      name: '',
      last_name: '',
      description: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeletePopup = () => {
    setIsDeletePopupOpen(false);
    setDeleteId(null);
  };

  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    setFiltered(
      objects.filter(object =>
        object.name.toLowerCase().includes(term) || object.last_name.toLowerCase().includes(term)
      )
    );
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelected({
      id: '',
      name: '',
      last_name: '',
      description: '',
      hourly_rate: ''
    });
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  };

	return (
		<section className={sectionClassName} style={sectionStyle}>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Page header  */}
					<div className="border-bottom pb-3 mb-3 d-flex align-items-center justify-content-between">
						<div>
							<h1 className="mb-1 tajawal-bold">  المصادقة على التمارين</h1>
							{/*  Breadcrumb  */}
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="admin-dashboard.html">لوحة التحكم</a>
									</li>
									<li className="breadcrumb-item">
										<a href="#">CMS</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">نظرة عامة</li>
								</ol>
							</nav>
						</div>
						<div>
							<a href="/admin/exercices-add" className="btn btn-primary">
								إضافة تمرين جديد
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">إجمالي المشاركات</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="tajawal-bold mb-1">2,000</h2>
									<span>100Last 30Days</span>
								</div>
								<div>
									<span className="bg-light-primary icon-shape icon-xl rounded-3 text-dark-primary">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card Body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">الأصول</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="tajawal-bold mb-1">367</h2>
									<span>300+ Media Object</span>
								</div>
								<div>
									<span className="bg-light-warning icon-shape icon-xl rounded-3 text-dark-warning">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-folder">
											<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card Body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">المستخدمين</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="tajawal-bold mb-1">13,234</h2>
									<span>1.5k in 30Days</span>
								</div>
								<div>
									<span className="bg-light-success icon-shape icon-xl rounded-3 text-dark-success">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-users">
											<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
											<circle cx="9" cy="7" r="4"></circle>
											<path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
											<path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-xl-3 col-lg-6 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card Body  */}
						<div className="card-body">
							<span className="fs-6 text-uppercase tajawal-bold ls-md">التعليقات</span>
							<div className="mt-2 d-flex justify-content-between align-items-center">
								<div className="lh-1">
									<h2 className="tajawal-bold mb-1">120</h2>
									<span>20+ تعليق</span>
								</div>
								<div>
									<span className="bg-light-info icon-shape icon-xl rounded-3 text-dark-info">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-message-square">
											<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
										</svg>
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Card  */}
					<div className="card mb-4">
						{/*  Card header  */}
						<div className="card-header d-flex justify-content-between align-items-center border-bottom-0 card-header-height">
							<h4 className="mb-0 tajawal-bold"> الإطلاع على التمارين</h4>
						</div>
						{/*  Table  */}
						<div className="table-responsive border-0 overflow-y-hidden">
							<table className="table mb-0 text-nowrap table-hover table-centered">
								<thead className="table-light">
									<tr>
										<th>التمرين </th>
										<th>الوصف</th>
										<th>الدرس</th>
										<th>الإجراءات</th>
										</tr>
								</thead>
								<tbody>
								{filtered.map((object) => (
                        <tr key={object.id}>
										<td>
											<h5 className="mb-0 tajawal-bold">
												<a href="#" className="text-inherit">
												{object.name}
												</a>
											</h5>
										</td>
										<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                            {object.description}
                          </td>
										<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                            {object.course_id}
                          </td>

										<td>
															{/* Bottons */}
															<button type="button" className="btn btn-success btn-sm mx-1">قبول</button>
																	<button type="button" className="btn btn-danger btn-sm" onClick={() => handleDeleteClick(object.id)}>رفض</button>

														</td>
									</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>

      {showEditModal && (
        <div className="fade modal-backdrop show"></div>
      )}
      <div role="dialog" aria-modal="true" className={`fade modal ${showEditModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showEditModal ? 'block' : 'none' }}>
        <div style={{
          width: "auto",
          margin: "1.75rem",
          transform: "none",
          transition: "transform .3s ease-out",
          marginLeft: "auto",
          marginRight: "auto",
          pointerEvents: "none",
          position: "relative",
          maxWidth: "1000px",
          paddingTop: "8%"
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تعديل المعلومات</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseEditModal}></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="row">
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">الإسم</label>
                    <input
                      name="name"
                      placeholder="الإسم"
                      required=""
                      type="text"
                      value={selected.name}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label"> نوع الدورة</label>
                    <input
                      name="formation_type_id"
                      placeholder=" نوع الدورة"
                      required=""
                      type="text"
                      value={selected.formation_type_id}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12 col-md-12">
                    <label className="form-label">الوصف</label>
                    <input
                      name="description"
                      placeholder="الوصف الكامل"
                      required=""
                      type="text"
                      value={selected.description}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12 col-md-12">
                    <label className="form-label">الحالة</label>
                    <input
                      name="status"
                      placeholder="الحالة "
                      required=""
                      type="text"
                      value={selected.status}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer" dir='ltr'>
              <button type="button" className="btn btn-secondary w-20" onClick={handleCloseEditModal}>إغلاق</button>
              <button type="button" className="btn btn-primary w-20" onClick={handleSaveClick}>حفظ</button>
            </div>
          </div>
        </div>
      </div>

      {showDeleteModal && (
        <div className="fade modal-backdrop show"></div>
      )}
      <div role="dialog" aria-modal="true" className={`fade modal ${showDeleteModal ? 'show' : ''}`} tabIndex="-1" style={{ display: showDeleteModal ? 'block' : 'none' }}>
        <div style={{
          width: "auto",
          margin: "1.75rem",
          transform: "none",
          transition: "transform .3s ease-out",
          marginLeft: "auto",
          marginRight: "auto",
          pointerEvents: "none",
          position: "relative",
          maxWidth: "30%",
          paddingTop: "10%"
        }}>
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تأكيد الحذف</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseDeleteModal}></button>
            </div>
            <div className="modal-body">
              <p>هل أنت متأكد أنك تريد الحذف؟</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary w-20" onClick={handleCloseDeleteModal}>إلغاء</button>
              <button type="button" className="btn btn-danger w-20" onClick={confirmDelete}>حذف</button>
            </div>
          </div>
        </div>
      </div>
			
		</section>
	)
}

export default Page