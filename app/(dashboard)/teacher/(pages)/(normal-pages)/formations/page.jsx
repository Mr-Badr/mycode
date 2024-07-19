"use client"

import ComponentHeader from '../../../../../(dashboard)/teacher/_components/ComponentHeader';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import LessonPopup from "../../../../../../app/(dashboard)/teacher/_components/editPages/LessonPopup"
import { TiPlus } from "react-icons/ti";
import AddCoursePopup from "../../(add-pages)/formations-add/page"
import Header from "../../../_components/Header";
import Navbar from "../../../../../../app/(dashboard)/teacher/_components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Link from "next/link";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token
import React, { useEffect, useState } from 'react'
import axios from 'axios';

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
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/formations`, {
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
    axios.delete(`https://clicschool.logicielab.net/api/formations/${deleteId}`, {
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

    axios.put(`https://clicschool.logicielab.net/api/formations/${id}`,
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
        object.name.toLowerCase().includes(term)
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

	/* Add Course start */
  const [showAddCoursePopup, setShowAddCoursePopup] = useState(false);
  const handleShowAddCoursePopup = () => setShowAddCoursePopup(true);
  const handleCloseAddCoursePopup = () => setShowAddCoursePopup(false);
	/* Add Course end */
		
	const [showLivePopup, setShowLivePopup] = useState(false);
	const [showVideoLessonPopup, setShowVideoLessonPopup] = useState(false);
	
	const handleClosePopup = () => {
		setShowLivePopup(false);
		setShowVideoLessonPopup(false);
	};
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	return (
		<div dir="rtl">
			<Header />

			<main>
				<section className="pt-5 pb-5">
				<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
				<ComponentHeader />

						<div className="row mt-0 mt-md-4">
							<div className="col-lg-3 col-md-4 col-12">
								<Navbar />
							</div>
							<div className="col-lg-9 col-md-8 col-12">

								{/* Add Lives */}
								<div className="row">
									<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 cursor-pointer" onClick={() => setShowVideoLessonPopup(true)}>
										<div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
											<div className="card-body d-flex flex-column justify-content-center text-center">
												<h2>إنشاء دورة مسجلة</h2>
											</div>
										</div>
									</div>
									<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-4 cursor-pointer" onClick={() => setShowLivePopup(true)}>
										<div className="card h-100 border-2 shadow-none card-dashed-hover p-12">
											<div className="card-body d-flex flex-column justify-content-center text-center">
												<h2>إنشاء بث مباشر</h2>
											</div>
										</div>
									</div>
								</div>
								{/* Table Start Here */}

								<div className="card mb-4">

									{/*  Card header  */}
									<div className='card px-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2'>
										<div className="d-flex align-items-center justify-content-between">
											<div className="card-header border-bottom-0">
												<h3 className="mb-0 tajawal-bold">الدورات</h3>
												<span>نظرة عامة وسريعة على جميع الدورات الحالية.</span>
											</div>
											<div className="card-header border-bottom-0 d-flex align-items-center justify-content-center">
												<a className="btn btn-primary btn-sm d-none d-md-block" onClick={handleShowAddCoursePopup}>
													<span className='mx-2'>
														إضافة دورة
													</span>
													<TiPlus />
												</a>
											</div>
										</div>

									</div>
									{/*  Table  */}
									<div className="table-responsive">
									<div className="card-body">
										{/*  Form  */}
										<form className="row gx-3">
											<div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
												<input type="search" className="form-control" placeholder="ابحث في الدورات التدريبية الخاصة بك" 
												value={searchTerm}
												onChange={handleSearchChange} />
											</div>
											<div className="col-lg-3 col-md-5 col-12">
												<select className="form-select">
													<option value="">تاريخ الإنشاء</option>
													<option value="Newest">الأحدث</option>
													<option value="High Rated">تقييم عالي</option>
													<option value="Law Rated">تصنيف منخفض</option>
													<option value="High Earned">مكاسب عالية</option>
												</select>
											</div>
										</form>
									</div>
									<table className="table mb-0 text-nowrap table-centered table-hover">
                      <thead className="table-light">
                        <tr>
                          <th>الدورات</th>
                          <th>نوع الدورة</th>
                          <th>الوصف</th>
                          <th>الحالة</th>
                        </tr>
                      </thead>
                      <tbody>
                      {filtered.map((object) => (
                        <tr key={object.id}>
                          <td>
                            <a href="#" className="text-inherit">
                              <div className="d-flex align-items-center">
                                <div>
                                <img src={object.image ? object.image : "../../assets/images/course/course-react.jpg"} alt="" className="img-4by3-lg rounded" />
                                </div>
                                <div className="ms-3">
                                <h4 className="mb-0 tajawal-bold">{`${object.name}`}</h4>

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
                          
                        </tr>
                        ))}
                      </tbody>
                    </table>
									</div>
								</div>
							</div>
						</div>


						{/* Live Broadcast Popup */}
						{showLivePopup && (
							<div className="fade modal-backdrop show"></div>
						)}
						<div
							role="dialog"
							aria-modal="true"
							className={`fade modal ${showLivePopup ? 'show' : ''}`}
							tabIndex="-1"
							style={{ display: showLivePopup ? 'block' : 'none' }}
						>
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
										<div className="modal-title tajawal-bold"> إنشاء بث مباشر</div>
										<button type="button" className="btn-close" aria-label="Close" onClick={handleClosePopup}></button>
									</div>
									<div className="modal-body">
										<form className="">
											<div className="row">
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">المحاضر </label>
													<input
														placeholder="المحاضر "
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">التاريخ </label>
													<div className="input-group">
														<input className="form-control flatpickr flatpickr-input" placeholder="حدد التاريخ" aria-describedby="basic-addon2" readOnly="" type="text" style={{
															borderRadius: "0px 5px 5px 0px"
														}} />
														<span className="input-group-text" id="basic-addon2" style={{
															borderRadius: "5px 0px 0px 5px"
														}}>
															<i className="fe fe-calendar"></i>
														</span>
													</div>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> المادة</label>
													<select className="form-select">
														<option value="math">الرياضيات</option>
														<option value="english">الإنجليزية</option>
													</select>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> رابط البث</label>
													<input
														placeholder="أدخل رابط البث (مثال: https://example.com)"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>

												<div className="mb-3 col-lg-12 col-md-12">
													<label className="form-label">الوصف </label>
													<textarea
														placeholder="الوصف الكامل"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
											</div>
										</form>
									</div>
									<div className="modal-footer" dir='ltr'>
										<button type="button" className="btn btn-secondary w-20" onClick={handleClosePopup}>إغلاق</button>
										<button type="button" className="btn btn-primary w-20" onClick={handleClosePopup}>إنشاء</button>
									</div>
								</div>
							</div>
						</div>

						{/* Video Lesson Popup */}
						{showVideoLessonPopup && (
							<div className="fade modal-backdrop show"></div>
						)}
						<div
							role="dialog"
							aria-modal="true"
							className={`fade modal ${showVideoLessonPopup ? 'show' : ''}`}
							tabIndex="-1"
							style={{ display: showVideoLessonPopup ? 'block' : 'none' }}
						>
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
										<div className="modal-title tajawal-bold">إنشاء درس فيديو</div>
										<button type="button" className="btn-close" aria-label="Close" onClick={handleClosePopup}></button>
									</div>
									<div className="modal-body">
										<form className="">
											<div className="row">
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">المحاضر </label>
													<input
														placeholder="المحاضر "
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">التاريخ </label>
													<div className="input-group">
														<input className="form-control flatpickr flatpickr-input" placeholder="حدد التاريخ" aria-describedby="basic-addon2" readOnly="" type="text" style={{
															borderRadius: "0px 5px 5px 0px"
														}} />
														<span className="input-group-text" id="basic-addon2" style={{
															borderRadius: "5px 0px 0px 5px"
														}}>
															<i className="fe fe-calendar"></i>
														</span>
													</div>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> المادة</label>
													<select className="form-select">
														<option value="math">الرياضيات</option>
														<option value="english">الإنجليزية</option>
													</select>
												</div>

												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label"> رابط الفيديو</label>
													<input
														placeholder="أدخل رابط الفيديو (مثال: https://example.com)"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>

												<div className="mb-3 col-lg-12 col-md-12">
													<label className="form-label">الوصف </label>
													<textarea
														placeholder="الوصف الكامل"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
											</div>
										</form>
									</div>
									<div className="modal-footer" dir='ltr'>
										<button type="button" className="btn btn-secondary w-20" onClick={handleClosePopup}>إغلاق</button>
										<button type="button" className="btn btn-primary w-20" onClick={handleClosePopup}>إنشاء</button>
									</div>
								</div>
							</div>
						</div>

						<AddCoursePopup show={showAddCoursePopup} handleClose={handleCloseAddCoursePopup} />

						{/* Model Popup */}
						{show && <div className="fade modal-backdrop show"></div>}
						<div role="dialog" aria-modal="true" className={`fade modal ${show ? 'show' : ''}`} tabIndex="-1" style={{ display: show ? 'block' : 'none' }}>
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
										<div className="modal-title tajawal-bold">تعديل الدورات</div>
										<button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
									</div>
									<div className="modal-body">
										<form className="">
											<div className="row">
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">العنوان </label>
													<input
														placeholder="العنوان "
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg6 col-md-6">
													<label className="form-label">البريد الإلكتروني </label>
													<input
														placeholder="البريد الإلكتروني"
														required=""
														type="email"
														id="email"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg6 col-md-6">
													<label className="form-label">الهاتف</label>
													<input
														placeholder="الهاتف"
														required=""
														type="tel"
														id="tel"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
												<div className="mb-3 col-lg-6 col-md-6">
													<label className="form-label">تاريخ الإزدياد</label>
													<div className="input-group">
														<input className="form-control flatpickr flatpickr-input" placeholder="حدد تاريخ" aria-describedby="basic-addon2" readonly="" type="text" style={{
															borderRadius: "0px 5px 5px 0px"
														}} />
														<span className="input-group-text" id="basic-addon2" style={{
															borderRadius: "5px 0px 0px 5px"
														}}>
															<i className="fe fe-calendar"></i>
														</span>
													</div>
												</div>

												<div className="mb-3 col-lg6 col-md-6">
													<label className="form-label">الولاية</label>
													<input
														placeholder="الولاية"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>

												<div className="mb-3 col-lg6 col-md-6">
													<label className="form-label"> الجنس</label>
													<select className="form-select">
														<option value="public">ذكر</option>
														<option value="private">أنثى</option>
													</select>
												</div>

												<div className="mb-3 col-lg6 col-md-6">
													<label className="form-label">المستوى الدراسي</label>
													<select className="form-select">
														<option value="">أولى ثانوي</option>
														<option value="">ثاني ثانوي</option>
														<option value="">ثالث ثانوي</option>
													</select>
												</div>
												<div className="mb-3 col-lg6 col-md-6">
													<label className="form-label">الفوج</label>
													<select className="form-select">
														<option value="private">الفوج أ</option>
														<option value="private">الفوج ب</option>
													</select>
												</div>
												<div className="mb-3 col-lg-12 col-md-12">
													<label className="form-label">الوصف </label>
													<input
														placeholder="الوصف الكامل"
														required=""
														type="text"
														id="text"
														className="form-control"
														style={{
															textAlign: "right"
														}}
													/>
												</div>
											</div>
										</form>
									</div>
									<div className="modal-footer" dir='ltr'>
										<button type="button" className="btn btn-secondary w-20" onClick={handleClose}>إغلاق</button>
										<button type="button" className="btn btn-primary w-20" onClick={handleClose}>تعديل</button>
									</div>
								</div>
							</div>
						</div>

					</div>
				</section>
			</main>

		</div>
	)
}

export default Page