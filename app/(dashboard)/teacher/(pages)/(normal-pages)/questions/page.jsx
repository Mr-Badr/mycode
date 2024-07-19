"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import React from 'react'
import ComponentHeader from '../../../_components/ComponentHeader';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual token


function Page() {
	return (
		<div dir='rtl'>
			<Header />
			<main>
				<section className="pt-5 pb-5">
					<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
						{/*  User info  */}
						<ComponentHeader />

						<div className="row mt-0 mt-md-4">
							<div className="col-lg-3 col-md-4 col-12">
								<Navbar />
							</div>
							<div className="col-lg-9 col-md-8 col-12">
							{/*  Card  */}
							<div className="card mb-4">
								{/*  Card header  */}
								<div className="card-header d-lg-flex align-items-center justify-content-between">
									<div className="mb-3 mb-lg-0">
										<h3 className="mb-0 tajawal-bold">المراجعات</h3>
										<span>يمكنك الإطلاع على أسئلة الطلاب هنا</span>
									</div>
									{/* <div>
										<a href="#" className="btn btn-outline-primary btn-sm">تصدير بصيغة CSV ...</a>
									</div> */}
								</div>
								{/*  Card body  */}
								<div className="card-body">
									{/*  Form  */}
									<form className="row mb-4 gx-2">
										<div className="col-xl-7 col-lg-6 col-md-4 col-12 mb-2 mb-lg-0">
											<select className="form-select">
												<option value="">الكل</option>
												<option value="How to easily create a website">How to easily create a website</option>
												<option value="Grunt: The JavaScript Task...">Grunt: The JavaScript Task...</option>
												<option value="Vue js: The JavaScript Task...">Vue js: The JavaScript Task...</option>
											</select>
										</div>
										<div className="col-xl-2 col-lg-2 col-md-4 col-12 mb-2 mb-lg-0">
											{/*  Custom select  */}
											<select className="form-select">
												<option value="">تقييم</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
											</select>
										</div>
										<div className="col-xl-3 col-lg-3 col-md-4 col-12 mb-2 mb-lg-0">
											{/*  Custom select  */}
											<select className="form-select">
												<option value="">الترتيب حسب</option>
												<option value="Newest">الأحدث</option>
												<option value="Oldest">الأقدم</option>
											</select>
										</div>
									</form>
									{/*  List group  */}
									<ul className="list-group list-group-flush border-top">
										{/*  List group item  */}
										<li className="list-group-item px-0 py-4">
											<div className="d-flex">
												<img src="../assets/images/avatar/avatar-9.jpg" alt="avatar" className="rounded-circle avatar-lg" />
												<div className="ms-3 mt-2">
													<div className="d-flex align-items-center justify-content-between">
														<div>
															<h4 className="mb-0 tajawal-bold">سلمى</h4>
															<span>2 منذ ساعة</span>
														</div>
														<div>
															<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Report Abuse" data-bs-original-title="Report Abuse"><i className="fe fe-flag"></i></a>
														</div>
													</div>
													<div className="mt-2">
														<span className="fs-6 me-1 align-top">
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
														</span>

														<span className="me-1">for</span>
														<span className="h5">How to easily create a website with WordPress</span>
														<p className="mt-2">

														الدورة مثيرة للاهتمام للغاية وثاقبة. أعتقد أنه يجب أن يحتوي على المزيد من الموارد القابلة للتنزيل للنقاط التي يجب تذكرها أو نوع مستند التعلم الأساسي للرجوع إليه لاحقًا بعد الانتهاء من كل قسم.
														</p>
														<a href="#" className="btn btn-outline-secondary btn-sm">الرد</a>
													</div>
												</div>
											</div>
										</li>
										{/*  List group item  */}
										<li className="list-group-item px-0 py-4">
											<div className="d-flex">
												<img src="../assets/images/avatar/avatar-4.jpg" alt="avatar" className="rounded-circle avatar-lg" />
												<div className="ms-3 mt-2">
													<div className="d-flex align-items-center justify-content-between">
														<div>
															<h4 className="mb-0 tajawal-bold">محمد</h4>
															<span>2 منذ ساعة</span>
														</div>
														<div>
															<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Report Abuse" data-bs-original-title="Report Abuse"><i className="fe fe-flag"></i></a>
														</div>
													</div>
													<div className="mt-2">
														<span className="fs-6 me-1 align-top">
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
														</span>
														<span className="me-1">for</span>
														<span className="h5">Getting started - Grunt: The JavaScript Task...</span>
														<p className="mt-2">
														الدورة مثيرة للاهتمام للغاية وثاقبة. أعتقد أنه يجب أن يحتوي على المزيد من الموارد القابلة للتنزيل للنقاط التي يجب تذكرها أو نوع مستند التعلم الأساسي للرجوع إليه لاحقًا بعد الانتهاء من كل قسم.
														</p>
														<a href="#" className="btn btn-outline-secondary btn-sm">الرد</a>
													</div>
												</div>
											</div>
										</li>
										{/*  List group item  */}
										<li className="list-group-item px-0 py-4">
											<div className="d-flex">
												<img src="../assets/images/avatar/avatar-7.jpg" alt="avatar" className="rounded-circle avatar-lg" />
												<div className="ms-3 mt-2">
													<div className="d-flex align-items-center justify-content-between">
														<div>
															<h4 className="mb-0 tajawal-bold">كريمة</h4>
															<span>2 منذ ساعة</span>
														</div>
														<div>
															<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Report Abuse" data-bs-original-title="Report Abuse"><i className="fe fe-flag"></i></a>
														</div>
													</div>
													<div className="mt-2">
														<span className="fs-6 me-1 align-top">
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
														</span>
														<span className="me-1">for</span>
														<span className="h5">Getting started - Vue js: The JavaScript Task...</span>
														<p className="mt-2">
														الدورة مثيرة للاهتمام للغاية وثاقبة. أعتقد أنه يجب أن يحتوي على المزيد من الموارد القابلة للتنزيل للنقاط التي يجب تذكرها أو نوع مستند التعلم الأساسي للرجوع إليه لاحقًا بعد الانتهاء من كل قسم.
														</p>
														<a href="#" className="btn btn-outline-secondary btn-sm">الرد</a>
													</div>
												</div>
											</div>
										</li>
										{/*  List group item  */}
										<li className="list-group-item px-0 py-4">
											<div className="d-flex">
												<img src="../assets/images/avatar/avatar-1.jpg" alt="avatar" className="rounded-circle avatar-lg" />
												<div className="ms-3 mt-2">
													<div className="d-flex align-items-center justify-content-between">
														<div>
															<h4 className="mb-0 tajawal-bold">John Deo</h4>
															<span>1 منذ ساعة</span>
														</div>
														<div>
															<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Report Abuse" data-bs-original-title="Report Abuse"><i className="fe fe-flag"></i></a>
														</div>
													</div>
													<div className="mt-2">
														<span className="fs-6 me-1 align-top">
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
														</span>
														<span className="me-1">for</span>
														<span className="h5">Getting started - Gulp: The JavaScript Task...</span>
														<p className="mt-2">
														الدورة مثيرة للاهتمام للغاية وثاقبة. أعتقد أنه يجب أن يحتوي على المزيد من الموارد القابلة للتنزيل للنقاط التي يجب تذكرها أو نوع مستند التعلم الأساسي للرجوع إليه لاحقًا بعد الانتهاء من كل قسم.
														</p>
														<a href="#" className="btn btn-outline-secondary btn-sm">الرد</a>
													</div>
												</div>
											</div>
										</li>
										{/*  List group item  */}
										<li className="list-group-item px-0 pt-4 pb-0">
											<div className="d-flex">
												<img src="../assets/images/avatar/avatar-8.jpg" alt="avatar" className="rounded-circle avatar-lg" />
												<div className="ms-3 mt-2">
													<div className="d-flex align-items-center justify-content-between">
														<div>
															<h4 className="mb-0 tajawal-bold">خولة</h4>
															<span>3 منذ ساعة</span>
														</div>
														<div>
															<a href="#" data-bs-toggle="tooltip" data-placement="top" aria-label="Report Abuse" data-bs-original-title="Report Abuse"><i className="fe fe-flag"></i></a>
														</div>
													</div>
													<div className="mt-2">
														<span className="fs-6 me-1 align-top">
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
															<svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" fill="currentColor" className="bi bi-star-fill text-warning" viewBox="0 0 16 16">
																<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
															</svg>
														</span>
														<span className="me-1">for</span>
														<span className="h5">Getting started - HTML: The Foundations Task...</span>
														<p className="mt-2">
														الدورة مثيرة للاهتمام للغاية وثاقبة. أعتقد أنه يجب أن يحتوي على المزيد من الموارد القابلة للتنزيل للنقاط التي يجب تذكرها أو نوع مستند التعلم الأساسي للرجوع إليه لاحقًا بعد الانتهاء من كل قسم.
														</p>
														<a href="#" className="btn btn-outline-secondary btn-sm">الرد</a>
													</div>
												</div>
											</div>
										</li>
									</ul>
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