
"use client"
//import DarkModeToggle from '@/components/DarkModeToggle'
import Image from 'next/image'
import React, { useState } from 'react'
import SimpleBar from 'simplebar-react'
//import { logout } from "@/actions/logout";
import Link from 'next/link'

function Navbar() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	/* const signout = () => {
		logout();
	}; */
	return (
		<nav className="navbar navbar-expand-lg">
			<div className="container-fluid px-0">
				<Link className="navbar-brand" href="../index.html">
					<Image src="/assets/images/lgg.png" width={35} height={35} alt='' />
				</Link>
				{/*  Mobile view nav wrap  */}
				<div className="ms-auto d-flex align-items-center order-lg-3">
					{/* <DarkModeToggle /> */}
					<ul className="navbar-nav navbar-right-wrap ms-2 flex-row d-none d-md-block">
						<li className="dropdown d-inline-block stopevent position-static">
							<a
								className="btn btn-light btn-icon rounded-circle indicator indicator-primary"
								href="#"
								role="button"
								id="dropdownNotificationSecond"
								data-bs-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								<i className="fe fe-bell"></i>
							</a>
							<div className="dropdown-menu dropdown-menu-end dropdown-menu-lg position-absolute mx-3 my-5" aria-labelledby="dropdownNotificationSecond">
								<div>
									<div className="border-bottom px-3 pb-3 d-flex justify-content-between align-items-center">
										<span className="h5 mb-0">إشعارات</span>
										<a href="#">
											<span className="align-middle"><i className="fe fe-settings me-1"></i></span>
										</a>
									</div>
									<SimpleBar style={{ maxHeight: 300 }}>
										<ul className="list-group list-group-flush">
											<li className="list-group-item bg-light">
												<div className="row">
													<div className="col">
														<a className="text-body" href="#">
															<div className="d-flex">
																<img src="../assets/images/avatar/avatar-1.jpg" alt="" className="avatar-md rounded-circle" />
																<div className="ms-3">
																	<h5 className="tajawal-bold mb-1">مراد:</h5>
																	<p className="mb-3 text-body">Krisitn Watsan like your comment on course Javascript Introduction!</p>
																	<span className="fs-6">
																		<span>
																			<span className="fe fe-thumbs-up text-success me-1"></span>
																			2 hours ago,
																		</span>
																		<span className="ms-1">2:19 PM</span>
																	</span>
																</div>
															</div>
														</a>
													</div>
													<div className="col-auto text-center me-2">
														<a href="#" className="badge-dot bg-info" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as read"></a>
														<div>
															<a href="#" className="bg-transparent" data-bs-toggle="tooltip" data-bs-placement="top" title="Remove">
																<i className="fe fe-x"></i>
															</a>
														</div>
													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="row">
													<div className="col">
														<a className="text-body" href="#">
															<div className="d-flex">
																<img src="../assets/images/avatar/avatar-2.jpg" alt="" className="avatar-md rounded-circle" />
																<div className="ms-3">
																	<h5 className="tajawal-bold mb-1">كريمة</h5>
																	<p className="mb-3 text-body">Just launched a new Courses React for Beginner.</p>
																	<span className="fs-6">
																		<span>
																			<span className="fe fe-thumbs-up text-success me-1"></span>
																			Oct 9,
																		</span>
																		<span className="ms-1">1:20 PM</span>
																	</span>
																</div>
															</div>
														</a>
													</div>
													<div className="col-auto text-center me-2">
														<a href="#" className="badge-dot bg-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as unread"></a>
													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="row">
													<div className="col">
														<a className="text-body" href="#">
															<div className="d-flex">
																<img src="../assets/images/avatar/avatar-3.jpg" alt="" className="avatar-md rounded-circle" />
																<div className="ms-3">
																	<h5 className="tajawal-bold mb-1">محمد</h5>
																	<p className="mb-3 text-body">Krisitn Watsan like your comment on course Javascript Introduction!</p>
																	<span className="fs-6">
																		<span>
																			<span className="fe fe-thumbs-up text-info me-1"></span>
																			Oct 9,
																		</span>
																		<span className="ms-1">1:56 PM</span>
																	</span>
																</div>
															</div>
														</a>
													</div>
													<div className="col-auto text-center me-2">
														<a href="#" className="badge-dot bg-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as unread"></a>
													</div>
												</div>
											</li>
											<li className="list-group-item">
												<div className="row">
													<div className="col">
														<a className="text-body" href="#">
															<div className="d-flex">
																<img src="../assets/images/avatar/avatar-4.jpg" alt="" className="avatar-md rounded-circle" />
																<div className="ms-3">
																	<h5 className="tajawal-bold mb-1">هناء</h5>
																	<p className="mb-3 text-body">You earn new certificate for complete the Javascript Beginner course.</p>
																	<span className="fs-6">
																		<span>
																			<span className="fe fe-award text-warning me-1"></span>
																			Oct 9,
																		</span>
																		<span className="ms-1">1:56 PM</span>
																	</span>
																</div>
															</div>
														</a>
													</div>
													<div className="col-auto text-center me-2">
														<a href="#" className="badge-dot bg-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Mark as unread"></a>
													</div>
												</div>
											</li>
										</ul>
									</SimpleBar>
									<div className="border-top px-3 pt-3 pb-0">
										<a href="https://geeksui.codescandy.com/geeks-rtl/pages/notification-history.html" className="text-link tajawal-bold">See all إشعارات</a>
									</div>
								</div>
							</div>
						</li>

						<li className="dropdown ms-2 d-inline-block position-static">
							<a className="rounded-circle" href="#" data-bs-toggle="dropdown" data-bs-display="static" aria-expanded="false">
								<div className="avatar avatar-md avatar-indicators avatar-online">
									<img alt="avatar" src="../assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
								</div>
							</a>
							<div className="dropdown-menu dropdown-menu-end position-absolute mx-3 my-5">
								<div className="dropdown-item">
									<div className="d-flex">
										<div className="avatar avatar-md avatar-indicators avatar-online">
											<img alt="avatar" src="../assets/images/avatar/avatar-1.jpg" className="rounded-circle" />
										</div>
										<div className="ms-3 lh-1">
											<h5 className="mb-1">محمد علي</h5>
											<p className="mb-0">mohamed@gmail.com</p>
										</div>
									</div>
								</div>
								<div className="dropdown-divider"></div>
								<ul className="list-unstyled">
									<li>
										<a className="dropdown-item" href="/teacher/profile-edit">
											<i className="fe fe-user me-2"></i>
											الملف الشخصي
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/teacher/notifications">
											<i className="fe fe-star me-2"></i>
											الإشعارات
										</a>
									</li>
									<li>
										<a className="dropdown-item" href="/teacher/profile-privacy">
											<i className="fe fe-settings me-2"></i>
											إعدادات الخصوصية
										</a>
									</li>
								</ul>
								<div className="dropdown-divider"></div>
								<ul className="list-unstyled">
									<li>
										<a className="dropdown-item" href='#' onClick={handleShow}>
											<i className="fe fe-power me-2"></i>
											تسجيل خروج
										</a>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
				<div>
					{/*  Button  */}
					<button
						className="navbar-toggler collapsed ms-2"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbar-default"
						aria-controls="navbar-default"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</button>
				</div>
				{/*  Collapse  */}
				<div className="collapse navbar-collapse" id="navbar-default">

					<form className="mt-3 mt-lg-0 ms-lg-3 d-flex align-items-center">
						<span className="position-absolute ps-3 search-icon">
							<i className="fe fe-search"></i>
						</span>
						<label htmlFor="search" className="visually-hidden"></label>
						<input type="search" id="search" className="form-control ps-6" placeholder="البحث عن الدورات" />
					</form>
				</div>
			</div>

			{/* Model Popup */}
			{show && <div className="fade modal-backdrop show"></div>}
			<div
				role="dialog"
				aria-modal="true"
				className={`fade modal ${show ? "show" : ""}`}
				tabIndex="-1"
				style={{ paddingRight: "17px", display: show ? "block" : "none", marginTop: "18%" }}
			>
				<div className="modal-dialog">
					<div className="modal-content text-start">
						<div className="modal-header">
							<div className="modal-title tajawal-bold">تسجيل الخروج</div>
							<button
								type="button"
								className="btn-close"
								aria-label="Close"
								onClick={handleClose}
							></button>
						</div>
						<div className="modal-body">
							<form className="">
								<div className="row">
									<div className="col-12">
										<h2 className='tajawal-bold'>هل تريد تسجيل الخروج ؟</h2>
									</div>
								</div>
							</form>
						</div>
						<div className="modal-footer" dir='ltr'>
							<button
								type="button"
								className="btn btn-secondary w-20"
								onClick={handleClose}
							>
								إغلاق
							</button>
							<button
								type="button"
								className="btn btn-danger w-20"
								/* onClick={signout} */
							>
								تأكيد
							</button>
						</div>
					</div>
				</div>
			</div>

		</nav>
	)
}

export default Navbar