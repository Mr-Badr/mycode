"use client";
import Link from "next/link";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token

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
		<section className="container-fluid p-4">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Page Header  */}
					<div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 tajawal-bold">الدورات</h1>
							{/*  Breadcrumb  */}
							<nav aria-label="breadcrumb">
								<ol className="breadcrumb">
									<li className="breadcrumb-item">
										<a href="admin-dashboard.html">لوحة التحكم</a>
									</li>
									<li className="breadcrumb-item">
										<a href="#">المصادقة على الدورات</a>
									</li>
									<li className="breadcrumb-item active" aria-current="page">
										الكل
									</li>
								</ol>
							</nav>
						</div>
						<div>
							<a href="/admin/formations-add" className="btn btn-primary">
								إضافة دورات جديدة
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12">
					{/*  Card  */}
					<div className="card rounded-3">
						{/*  Card header  */}
						<div className="card-header p-0">
							<div>
								{/*  Nav  */}
								<ul
									className="nav nav-lb-tab border-bottom-0"
									id="tab"
									role="tablist"
								>
									<li className="nav-item" role="presentation">
										<a
											className="nav-link active"
											id="courses-tab"
											data-bs-toggle="pill"
											href="#courses"
											role="tab"
											aria-controls="courses"
											aria-selected="true"
										>
											الكل
										</a>
									</li>
									<li className="nav-item" role="presentation">
										<a
											className="nav-link"
											id="approved-tab"
											data-bs-toggle="pill"
											href="#approved"
											role="tab"
											aria-controls="approved"
											aria-selected="false"
											tabIndex={-1}
										>
											تمت الموافقة عليه
										</a>
									</li>
									<li className="nav-item" role="presentation">
										<a
											className="nav-link"
											id="pending-tab"
											data-bs-toggle="pill"
											href="#pending"
											role="tab"
											aria-controls="pending"
											aria-selected="false"
											tabIndex={-1}
										>
											قيد الانتظار
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="p-4 row">
							{/*  Form  */}
							<form className="d-flex align-items-center col-12 col-md-12 col-lg-12">
								<span className="position-absolute ps-3 search-icon">
									<i className="fe fe-search"></i>
								</span>
								<input
									type="search"
									className="form-control ps-6"
									placeholder="البحث في الدورات"
									value={searchTerm}
									onChange={handleSearchChange} />
							</form>
						</div>
						<div>
							{/*  Table  */}
							<div className="tab-content" id="tabContent">
								{/* Tab pane  */}
								<div
									className="tab-pane fade show active"
									id="courses"
									role="tabpanel"
									aria-labelledby="courses-tab"
								>
									<div className="table-responsive border-0 overflow-y-hidden">
										<table className="table mb-0 text-nowrap table-centered table-hover">
											<thead className="table-light">
												<tr>
													<th>الدورات</th>
													<th>نوع الدورة</th>
													<th>الوصف</th>
													<th>الحالة</th>
													<th>الإجراءات</th>
												</tr>
											</thead>
											<tbody>
												{filtered.map((object) => (
													<tr key={object.id}>
														<td>
															<a href="#" className="text-inherit">
																<div className="d-flex align-items-center">
																	<div>
																		<img src={object.image ? object.image : "../../assets/images/avatar/avatar-12.jpg"} alt="" className="rounded-circle avatar-md me-2" />
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
								{/* Tab pane  */}
								<div
									className="tab-pane fade"
									id="approved"
									role="tabpanel"
									aria-labelledby="approved-tab"
								>
									<div className="table-responsive border-0 overflow-y-hidden">
										<table className="table mb-0 text-nowrap table-centered table-hover">
											<thead className="table-light">
												<tr>
													<th>الدورات</th>
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
																	<img
																		src="../../assets/images/course/course-javascript.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Courses JavaScript Heading Title ...
																	</h4>
																	<span>Added on 5 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-10.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">أميمة</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
														بث مباشر
													</td>
													<td>
														<a href="#" className="btn btn-secondary btn-sm">
															تغيير الوضع
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown9"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown9"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
																	<img
																		src="../../assets/images/course/course-node.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Get Start with Node Heading Title ...
																	</h4>
																	<span>Added on 5 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-1.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">Liston Zebon</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
														بث مباشر
													</td>
													<td>
														<a href="#" className="btn btn-secondary btn-sm">
															تغيير الوضع
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown10"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown10"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
																	<img
																		src="../../assets/images/course/course-laravel.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Get Start with Laravel...
																	</h4>
																	<span>Added on 5 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-4.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">يونس</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
														بث مباشر
													</td>
													<td>
														<a href="#" className="btn btn-secondary btn-sm">
															تغيير الوضع
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown11"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown11"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
																	<img
																		src="../../assets/images/course/course-react.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Get Start with React...
																	</h4>
																	<span>Added on 4 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-6.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">Reema Messlemn</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-success me-1 d-inline-block align-middle"></span>
														بث مباشر
													</td>
													<td>
														<a href="#" className="btn btn-secondary btn-sm">
															تغيير الوضع
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown12"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown12"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
								<div
									className="tab-pane fade"
									id="pending"
									role="tabpanel"
									aria-labelledby="pending-tab"
								>
									<div className="table-responsive border-0 overflow-y-hidden">
										<table className="table mb-0 text-nowrap table-centered table-hover">
											<thead className="table-light">
												<tr>
													<th>الدورات</th>
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
																	<img
																		src="../../assets/images/course/course-gatsby.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Revolutionize how you build the web...
																	</h4>
																	<span>Added on 7 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-7.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">خلود</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
														انتظار
													</td>
													<td>
														<a
															href="#"
															className="btn btn-outline-secondary btn-sm"
														>
															رفض
														</a>
														<a href="#" className="btn btn-success btn-sm me-2">
															تمت الموافقة عليه
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown13"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown13"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
																	<img
																		src="../../assets/images/course/course-graphql.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Guide to Static Sites with Gatsby...
																	</h4>
																	<span>Added on 6 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-6.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">كريمة</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
														انتظار
													</td>
													<td>
														<a
															href="#"
															className="btn btn-outline-secondary btn-sm"
														>
															رفض
														</a>
														<a href="#" className="btn btn-success btn-sm me-2">
															تمت الموافقة عليه
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown14"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown14"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
																	<img
																		src="../../assets/images/course/course-html.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		The Modern JavaScript Courses ...
																	</h4>
																	<span>Added on 5 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-3.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">محمد</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
														انتظار
													</td>
													<td>
														<a
															href="#"
															className="btn btn-outline-secondary btn-sm"
														>
															رفض
														</a>
														<a href="#" className="btn btn-success btn-sm me-2">
															تمت الموافقة عليه
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown15"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown15"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
																	<img
																		src="../../assets/images/course/course-angular.jpg"
																		alt=""
																		className="img-4by3-lg rounded"
																	/>
																</div>
																<div className="ms-3">
																	<h4 className="mb-1 text-primary-hover">
																		Get Start with Angular...
																	</h4>
																	<span>Added on 3 July, 2023</span>
																</div>
															</div>
														</a>
													</td>
													<td>
														<div className="d-flex align-items-center">
															<img
																src="../../assets/images/avatar/avatar-4.jpg"
																alt=""
																className="rounded-circle avatar-xs me-2"
															/>
															<h5 className="mb-0 tajawal-bold">يونس</h5>
														</div>
													</td>
													<td>
														<span className="badge-dot bg-warning me-1 d-inline-block align-middle"></span>
														انتظار
													</td>
													<td>
														<a
															href="#"
															className="btn btn-outline-secondary btn-sm"
														>
															رفض
														</a>
														<a href="#" className="btn btn-success btn-sm me-2">
															تمت الموافقة عليه
														</a>
													</td>
													<td>
														<span className="dropdown dropstart">
															<a
																className="btn-icon btn btn-ghost btn-sm rounded-circle"
																href="#"
																role="button"
																id="courseDropdown16"
																data-bs-toggle="dropdown"
																data-bs-offset="-20,20"
																aria-expanded="false"
															>
																<i className="fe fe-more-vertical"></i>
															</a>
															<span
																className="dropdown-menu"
																aria-labelledby="courseDropdown16"
															>
																<span className="dropdown-header">
																	الإعدادات
																</span>
																<Link
																	className="dropdown-item"
																	href="/admin/formations-edit"
																>
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
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="10"
												height="10"
												fill="currentColor"
												className="bi bi-chevron-left"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
												></path>
											</svg>
										</a>
									</li>
									<li className="page-item active">
										<a className="page-link mx-1 rounded" href="#">
											1
										</a>
									</li>
									<li className="page-item">
										<a className="page-link mx-1 rounded" href="#">
											2
										</a>
									</li>
									<li className="page-item">
										<a className="page-link mx-1 rounded" href="#">
											3
										</a>
									</li>
									<li className="page-item">
										<a className="page-link mx-1 rounded" href="#">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="10"
												height="10"
												fill="currentColor"
												className="bi bi-chevron-right"
												viewBox="0 0 16 16"
											>
												<path
													fill-rule="evenodd"
													d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
												></path>
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
									<div className="mb-3 col-lg-6 col-md-6">
										<label className="form-label"> موع الدورة</label>
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
	);
}

export default Page;
