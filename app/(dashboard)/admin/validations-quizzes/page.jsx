"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token

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
    course_id: '',
    description: '',
    hourly_rate: ''
  });
  const [deleteId, setDeleteId] = useState(null);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/quizzes`, {
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
    axios.delete(`https://clicschool.logicielab.net/api/quizzes/${deleteId}`, {
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
    const { id, user_id, name, course_id, description, hourly_rate } = selected;

    axios.put(`https://clicschool.logicielab.net/api/quizzes/${id}`,
      { user_id, name, course_id, description, hourly_rate },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then(() => {
        const newObjects = objects.map(object =>
          object.id === id ? { ...object, user_id, name, course_id, description, hourly_rate } : object
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
      course_id: '',
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
        object.name.toLowerCase().includes(term) || object.course_id.toLowerCase().includes(term)
      )
    );
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelected({
      id: '',
      name: '',
      course_id: '',
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
        {/*  Page Header */}
        <div className="col-lg-12 col-md-12 col-12">
          <div className="border-bottom pb-3 mb-3 d-flex justify-content-between align-items-center">
            <div className="mb-2 mb-lg-0">
              <h1 className="mb-1 tajawal-bold">
                المصادقة على الإختبارات
                <span className="fs-5 mx-1">(12,105)</span>
              </h1>
              {/*  Breadcrumb  */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="admin-dashboard.html">لوحة التحكم</a>
                  </li>
                  <li className="breadcrumb-item"><a href="#">User</a></li>
                  <li className="breadcrumb-item active" aria-current="page">إختبار</li>
                </ol>
              </nav>
            </div>
            <div className="nav btn-group" role="tablist">
              <div className='me-2'>
                <Link href="/admin/quizzes-add" className="btn btn-outline-secondary" data-bs-target="#newCatgory" alt="">إضافة إختبار جديدة</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          {/*  Card  */}
          <div className="card mb-4">
            {/*  Card Header  */}
            <div className="card-header border-bottom-0">
              <form className="d-flex align-items-center">
                <span className="position-absolute ps-3 search-icon">
                  <i className="fe fe-search"></i>
                </span>
                <input type="search" className="form-control ps-6" placeholder="البحث عن الإختبارات" />
              </form>
            </div>
            {/*  Table   */}
            <div className="table-responsive border-0 overflow-y-hidden">
              <table className="table mb-0 text-nowrap table-hover table-centered">
                <thead className="table-light">
                  <tr>
                    <th>الإختبارات</th>
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
            {/*  Card Footer  */}
            <div className="card-footer">
              <nav>
                <ul className="pagination justify-content-center mb-0">
                  <li className="page-item disabled">
                    <a className="page-link mx-1 rounded" href="#" tabIndex="-1" aria-disabled="true">
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"></path>
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
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
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
                    <label className="form-label">الدرس</label>
                    <input
                      name="course_id"
                      placeholder="الدرس "
                      required=""
                      type="text"
                      value={selected.course_id}
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