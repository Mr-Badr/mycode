"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import ComponentHeader from '../../../_components/ComponentHeader';
import Link from 'next/link';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { TiPlus } from "react-icons/ti";
import AddCompetitionsPopup from "../../(add-pages)/competitions-add/page"
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token

function Page() {

	/* Show model Start */
	const [show, setShow] = useState(false);

	/* Show model End */

	const [objects, setObjects] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [searchTerm, setSearchTerm] = useState('');
	const [showEditModal, setShowEditModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selected, setSelected] = useState({
		id: '',
		name: '',
		date_start: '',
		description: '',
		date_end: ''
	});
	const [deleteId, setDeleteId] = useState(null);

	useEffect(() => {
		axios.get(`${process.env.NEXT_PUBLIC_API_URL}/competitions`, {
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
		axios.delete(`https://clicschool.logicielab.net/api/competitions/${deleteId}`, {
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
		const { id, user_id, name, date_start, description, date_end } = selected;

		axios.put(`https://clicschool.logicielab.net/api/competitions/${id}`,
			{ user_id, name, date_start, description, date_end },
			{
				headers: {
					Authorization: `Bearer ${token}`
				}
			})
			.then(() => {
				const newObjects = objects.map(object =>
					object.id === id ? { ...object, user_id, name, date_start, description, date_end } : object
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
			date_start: '',
			description: '',
			date_end: ''
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
				object.name.toLowerCase().includes(term) || object.date_start.toLowerCase().includes(term)
			)
		);
	};

	const handleCloseEditModal = () => {
		setShowEditModal(false);
		setSelected({
			id: '',
			name: '',
			date_start: '',
			description: '',
			date_end: ''
		});
	};

	const handleCloseDeleteModal = () => {
		setShowDeleteModal(false);
		setDeleteId(null);
	};

	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'long', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	};
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

		/* Add Course start */
		const [showAddCompetitionsPopup, setShowAddCompetitionsPopup] = useState(false);
		const handleShowAddCompetitionsPopup = () => setShowAddCompetitionsPopup(true);
		const handleCloseAddCompetitionsPopup = () => setShowAddCompetitionsPopup(false);
		/* Add Course end */

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px",maxWidth: "75%" } : {maxWidth: "75%"};
return (
	<div dir="rtl">
		<Header />

		<main>
			<section className="pt-5 pb-5">
			<div className={sectionClassName} style={sectionStyle}>
			<ComponentHeader />

						<div className="row mt-0 mt-md-4">
							<div className="col-lg-3 col-md-4 col-12">
								<Navbar />
							</div>
							<section className="col-lg-9 col-md-8 col-12">
					
							<div className="card rounded-3">
								{/*  Card header  */}
								<div className="card-header p-0">
									<div>
										{/*  Nav  */}
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
								</div>
								<div className="p-4 row">
									{/*  Form  */}
									<div className='col-lg-9 col-md-7 col-12 mb-lg-0 mb-2'>
																			<form className="d-flex align-items-center col-12 col-md-12 col-lg-12">
										<span className="position-absolute ps-3 search-icon"><i className="fe fe-search"></i></span>
										<input type="search" className="form-control ps-6" placeholder="البحث عن المسابقات"
									value={searchTerm}
									onChange={handleSearchChange} />									</form>
									</div>
									<div className='col-lg-3 col-md-5 col-12'>
									<a className="btn btn-primary d-none d-md-block" onClick={handleShowAddCompetitionsPopup}>
													<span className='mx-2'>
														إضافة مسابقة
													</span>
													<TiPlus />
												</a>
									</div>

								</div>
								<div>
									{/*  Table  */}
									<div className="tab-content" id="tabContent">
										{/* Tab pane  */}
										<div className="tab-pane fade show active" id="courses" role="tabpanel" aria-labelledby="courses-tab">
										<div className="card-header border-bottom-0">
						</div>
											<div className="table-responsive border-0 overflow-y-hidden">
											<table className="table mb-0 text-nowrap table-hover table-centered">
								<thead className="table-light">
									<tr>
										<th>المسابقات</th>
										<th>الوصف</th>
										<th>تاريخ البداية</th>
										<th>تاريخ النهاية</th>
										<th></th>
									</tr>
								</thead>
								<tbody>
									{filtered.map((object) => (
										<tr key={object.id}>
											<td>
													<div className="d-flex align-items-center">
														<div>

												<a href="#" className="text-inherit">
															<img
																src={object.image ? object.image : "../../assets/images/course/course-gatsby.jpg"}
																alt="" className="img-4by3-lg rounded" />
												</a>
																</div>
													<div className='ms-3'>
<h4 className='mb-1 h5'> 
{object.name}
</h4>
													</div>
													</div>
											</td>
											<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '200px' }}>
												{object.description}
											</td>
											<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100px' }}>
  {formatDate(object.date_start)}
</td>
											<td style={{ height: '50px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '100px' }}>
  {formatDate(object.date_end)}
</td>

											<td>
												<div className="hstack gap-4">
													<span className="dropdown dropstart">
														<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
															<i className="fe fe-more-vertical"></i>
														</a>
														<span className="dropdown-menu">
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
												</div>
											</td>
										</tr>
									))}
								</tbody>
							</table>
											</div>
										</div>
										{/* Tab pane  */}
										<div className="tab-pane fade" id="approved" role="tabpanel" aria-labelledby="approved-tab">
											<div className="table-responsive border-0 overflow-y-hidden">
												<table className="table mb-0 text-nowrap table-centered table-hover">
													<thead className="table-light">
														<tr>
															<th>المسابقات</th>
															<th>أستاذ</th>
															<th>الحالة</th>
															<th>الإجراءات</th>
															<th></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-javascript.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Courses JavaScript Heading Title ...</h4>
																			<span>Added on 5 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-10.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">أميمة</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
																بث مباشر
															</td>
															<td>
																<a href="#" className="btn btn-secondary btn-sm">تغيير الوضع</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown9" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown9">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-node.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Get Start with Node Heading Title ...</h4>
																			<span>Added on 5 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-1.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Liston Zebon</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
																بث مباشر
															</td>
															<td>
																<a href="#" className="btn btn-secondary btn-sm">تغيير الوضع</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown10" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown10">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-laravel.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Get Start with Laravel...</h4>
																			<span>Added on 5 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-4.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">يونس</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
																بث مباشر
															</td>
															<td>
																<a href="#" className="btn btn-secondary btn-sm">تغيير الوضع</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown11" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown11">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-react.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Get Start with React...</h4>
																			<span>Added on 4 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-6.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">Reema Messlemn</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
																بث مباشر
															</td>
															<td>
																<a href="#" className="btn btn-secondary btn-sm">تغيير الوضع</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown12" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown12">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
										{/* Tab pane  */}
										<div className="tab-pane fade" id="pending" role="tabpanel" aria-labelledby="pending-tab">
											<div className="table-responsive border-0 overflow-y-hidden">
												<table className="table mb-0 text-nowrap table-centered table-hover">
													<thead className="table-light">
														<tr>
															<th>المسابقات</th>
															<th>أستاذ</th>
															<th>الحالة</th>
															<th>الإجراءات</th>
															<th></th>
														</tr>
													</thead>
													<tbody>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-gatsby.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Revolutionize how you build the web...</h4>
																			<span>Added on 7 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-7.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">خلود</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																انتظار
															</td>
															<td>
																<a href="#" className="btn btn-outline-secondary btn-sm">رفض</a>
																<a href="#" className="btn btn-success btn-sm me-2">تمت الموافقة عليه</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown13" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown13">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-graphql.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Guide to Static Sites with Gatsby...</h4>
																			<span>Added on 6 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-6.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">كريمة</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																انتظار
															</td>
															<td>
																<a href="#" className="btn btn-outline-secondary btn-sm">رفض</a>
																<a href="#" className="btn btn-success btn-sm me-2">تمت الموافقة عليه</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown14" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown14">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-html.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">The Modern JavaScript Courses ...</h4>
																			<span>Added on 5 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-3.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">محمد</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																انتظار
															</td>
															<td>
																<a href="#" className="btn btn-outline-secondary btn-sm">رفض</a>
																<a href="#" className="btn btn-success btn-sm me-2">تمت الموافقة عليه</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown15" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown15">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
														<tr>
															<td>
																<a href="#" className="text-inherit">
																	<div className="d-flex align-items-center">
																		<div>
																			<img src="../../assets/images/course/course-angular.jpg" alt="" className="img-4by3-lg rounded" />
																		</div>
																		<div className="ms-3">
																			<h4 className="mb-1 text-primary-hover">Get Start with Angular...</h4>
																			<span>Added on 3 July, 2023</span>
																		</div>
																	</div>
																</a>
															</td>
															<td>
																<div className="d-flex align-items-center">
																	<img src="../../assets/images/avatar/avatar-4.jpg" alt="" className="rounded-circle avatar-xs me-2" />
																	<h5 className="mb-0 tajawal-bold">يونس</h5>
																</div>
															</td>
															<td>
																<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
																انتظار
															</td>
															<td>
																<a href="#" className="btn btn-outline-secondary btn-sm">رفض</a>
																<a href="#" className="btn btn-success btn-sm me-2">تمت الموافقة عليه</a>
															</td>
															<td>
																<span className="dropdown dropstart">
																	<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown16" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																		<i className="fe fe-more-vertical"></i>
																	</a>
																	<span className="dropdown-menu" aria-labelledby="courseDropdown16">
																		<span className="dropdown-header">الإعدادات</span>
																		<Link className="dropdown-item" href="/admin/formations-edit">
																			<i className="fe fe-edit dropdown-item-icon"></i>
																			تعديل
																		</Link>
																		<Link className="dropdown-item" href="#">
																			<i className="fe fe-x-circle dropdown-item-icon"></i>
																			رفض مع تقرير
																		</Link>
																	</span>
																</span>
															</td>
														</tr>
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
								{/*  Card Footer  */}
								<div className="card-footer">
									<nav>
										<ul className="pagination justify-content-center mb-0">
											<li className="page-item disabled">
												<a className="page-link mx-1 rounded" href="#">
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
					
				</section>
						</div>

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
							<div className="modal-title tajawal-bold">تعديل المسابقات</div>
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


			<AddCompetitionsPopup show={showAddCompetitionsPopup} handleClose={handleCloseAddCompetitionsPopup} />


					</div>
				</section>
			</main>

		</div>
	)
}

export default Page