"use client"
import Link from 'next/link'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token


function AdminStudent() {

  /* Show model Start */
  const [show, setShow] = useState(false);
  const sectionClassName = "container-fluid p-4";
  const sectionStyle = {};
  /* Show model End */

  const [teachers, setTeachers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selected, setSelected] = useState({
    id: '',
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: ''
  });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios.get('https://clicschool.logicielab.net/api/students', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(response => {
        setTeachers(response.data.data);
        setFiltered(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleEditClick = (teacher) => {
    setSelected(teacher);
    setShowEditModal(true);
  };

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    axios.delete(`https://clicschool.logicielab.net/api/students/${deleteId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then(() => {
        const newTeachers = teachers.filter(teacher => teacher.id !== deleteId);
        setTeachers(newTeachers);
        setFiltered(newTeachers);
        setShowDeleteModal(false);
        setDeleteId(null);
        toast.success('تم حذف المعلم بنجاح!', {
          position: "bottom-right"
        });
      })
      .catch(error => {
        console.error('Error deleting data:', error);
        toast.error('حدث خطأ أثناء حذف المعلم. الرجاء المحاولة مرة أخرى.', {
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
    const { id, user_id, first_name, last_name, bio, hourly_rate } = selected;

    axios.put(`https://clicschool.logicielab.net/api/students/${id}`,
      { user_id, first_name, last_name, bio, hourly_rate },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        const newTeachers = teachers.map(teacher =>
          teacher.id === id ? { ...teacher, user_id, first_name, last_name, bio, hourly_rate } : teacher
        );
        setTeachers(newTeachers);
        setFiltered(newTeachers);
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
      first_name: '',
      last_name: '',
      bio: '',
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
      teachers.filter(teacher =>
        teacher.first_name.toLowerCase().includes(term) || teacher.last_name.toLowerCase().includes(term)
      )
    );
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelected({
      id: '',
      first_name: '',
      last_name: '',
      bio: '',
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

					<div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
						<div className="mb-2 mb-lg-0">
							<h1 className="mb-1 tajawal-bold">
								الطلاب
								<span className="fs-5 mx-1">(1,22,105 )</span>
							</h1>

							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="admin-dashboard.html">لوحة التحكم</a>
									</li>
									<li className="breadcrumb-item"><a href="#">User</a></li>
									<li className="breadcrumb-item active" aria-current="page">طلاب</li>
								</ol>
							</nav>
						</div>
						<div className="nav btn-group" role="tablist">
							<div className='me-2'>
								<Link href="/admin/students-add" className="btn btn-primary" data-bs-target="#newCatgory" alt="">إضافة طالب جديد</Link>
							</div>
							<button className="btn btn-outline-secondary" data-bs-toggle="tab" data-bs-target="#tabPaneGrid" role="tab" aria-controls="tabPaneGrid" aria-selected="false" tabindex="-1">
								<span className="fe fe-grid"></span>
							</button>
							<button className="btn btn-outline-secondary active" data-bs-toggle="tab" data-bs-target="#tabPaneList" role="tab" aria-controls="tabPaneList" aria-selected="true">
								<span className="fe fe-list"></span>
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">

					<div className="tab-content">

						<div className="tab-pane fade" id="tabPaneGrid" role="tabpanel" aria-labelledby="tabPaneGrid">
							<div className="mb-4">
								<input type="search" className="form-control" placeholder="بحث الطلاب" value={searchTerm}
                  onChange={handleSearchChange} />
							</div>
							<div className="row">
                {filtered.map((teacher) => (
                  <div key={teacher.id} className="col-xl-3 col-lg-6 col-md-6 col-12">
                    {/* Card */}
                    <div className="card mb-4" style={{ height: '300px' }}>
                      {/* Card body */}
                      <div className="card-body d-flex flex-column justify-content-between">
                        <div className="text-center">
                          <img
                            src={teacher.image ? teacher.image : "../../assets/images/avatar/avatar-11.jpg"}
                            className="rounded-circle avatar-xl mb-3"
                            alt=""
                          />
                          <h4 className="mb-0 tajawal-bold">{`${teacher.first_name} ${teacher.last_name}`}</h4>
                          <p className="mb-0" style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {teacher.slug}
                          </p>
                        </div>
                        <div className="d-flex justify-content-between border-top py-2 mt-4">
                          <span>  الفصل</span>
                          <span className="text-dark">{teacher.classe_id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

              </div>
						</div>

						<div className="tab-pane fade active show" id="tabPaneList" role="tabpanel" aria-labelledby="tabPaneList">

							<div className="card">

								<div className="card-header">
									<input type="search" className="form-control" placeholder="بحث الطلاب" 
									value={searchTerm}
									onChange={handleSearchChange}
									/>
								</div>

								<div className="table-responsive">
									<table className="table mb-0 text-nowrap table-hover table-centered">
										<thead className="table-light">
											<tr>
												<th>الإسم الكامل</th>
												<th> الفصل</th>
												<th> الإجراءات</th>

											</tr>
										</thead>
										<tbody>
										{filtered.map((teacher) => (
                        <tr key={teacher.id}>
												<td>
												<div className="d-flex align-items-center">
                              <img src={teacher.image ? teacher.image : "../../assets/images/avatar/avatar-12.jpg"} alt="" className="rounded-circle avatar-md me-2" />
                              <h5 className="mb-0 tajawal-bold" style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>{`${teacher.first_name} ${teacher.last_name}`}</h5>
                            </div>
												</td>
												<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
                            {teacher.classe_id}</td>

												<td>
													<div className="hstack gap-4">
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" style={{}}>
																<span className="dropdown-header">الإعدادات</span>
																<button className="dropdown-item" onClick={() => handleEditClick(teacher)}>
                                    <i className="fe fe-edit dropdown-item-icon"></i>
                                    تعديل
                                  </button>
                                  <button className="dropdown-item" onClick={() => handleDeleteClick(teacher.id)}>
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
              <div className="modal-title tajawal-bold">تعديل معلومات التلميذ</div>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseEditModal}></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="row">
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">الإسم الأول</label>
                    <input
                      name="first_name"
                      placeholder="الإسم الأول"
                      required=""
                      type="text"
                      value={selected.first_name}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-6 col-md-6">
                    <label className="form-label">الإسم الأخير</label>
                    <input
                      name="last_name"
                      placeholder="الإسم الأخير"
                      required=""
                      type="text"
                      value={selected.last_name}
                      onChange={handleInputChange}
                      className="form-control"
                      style={{ textAlign: "right" }}
                    />
                  </div>
                  <div className="mb-3 col-lg-12 col-md-12">
                    <label className="form-label">الفصل</label>
                    <input
                      name="classe"
                      placeholder=" الفصل"
                      required=""
                      type="number"
                      value={selected.classe_id}
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
              <p>هل أنت متأكد أنك تريد حذف هذا المعلم؟</p>
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

export default AdminStudent