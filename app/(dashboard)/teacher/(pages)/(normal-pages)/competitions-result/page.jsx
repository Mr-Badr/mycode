"use client"
import Navbar from '../../../_components/Navbar';
import Header from '../../../_components/Header';
import React from 'react'
import ComponentHeader from '../../../_components/ComponentHeader';
import Link from 'next/link';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token


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
								{/*  Card body  */}
								<div className="card-header">
									<h3 className="mb-0 tajawal-bold">النتيجة - اختبار الواجهات الرئيسية</h3>
								</div>
								{/*  card  */}
								<div className="card-body border-bottom">
									{/*  row  */}
									<div className="row row-cols-lg-3 row-cols-1">
										<div className="col">
											{/*  card  */}
											<div className="card bg-gray-100 shadow-none mb-3 mb-lg-0">
												{/*  card body  */}
												<div className="card-body">
													<h4 className="mb-0 tajawal-bold">مشارك</h4>
													<div className="mt-5 d-flex justify-content-between align-items-center lh-1">
														<div>
															<span className="fs-3 text-dark tajawal-bold">27</span>
														</div>
														<div className="align-middle">
															<i className="fe fe-users h2 text-danger"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
										{/*  col  */}
										<div className="col">
											{/*  card  */}
											<div className="card bg-gray-100 shadow-none mb-3 mb-lg-0">
												{/*  card body  */}
												<div className="card-body">
													<h4 className="mb-0 tajawal-bold">الدرجة</h4>
													<div className="mt-5 d-flex justify-content-between align-items-center lh-1">
														<div>
															<span className="fs-3 text-dark tajawal-bold">82</span>
														</div>
														<div className="align-middle">
															<i className="fe fe-clipboard h2 text-primary"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
										<div className="col">
											{/*  card  */}
											<div className="card bg-gray-100 shadow-none mb-3 mb-lg-0">
												{/*  card body  */}
												<div className="card-body">
													<h4 className="mb-0 tajawal-bold">متوسط ​​الوقت</h4>
													<div className="mt-5 d-flex justify-content-between align-items-center lh-1">
														<div>
															<span className="fs-3 text-dark tajawal-bold">00:00:42</span>
														</div>
														<div className="align-middle">
															<i className="fe fe-clock h2 text-success"></i>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								{/*  card body  */}
								<div className="card-body border-bottom">
									<form className="row">
										<div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
											<input type="search" className="form-control" placeholder="البحث" />
										</div>
										<div className="col-lg-3 col-md-5 col-12">
											{/*  select  */}
											<select className="form-select">
												<option value="">الترتيب حسب</option>
												<option value="Newest">الأحدث</option>
												<option value="Oldest">الأقدم</option>
											</select>
										</div>
									</form>
								</div>
								{/*  table  */}
								<div className="table-responsive">
									<table className="table table-hover table-centered text-nowrap">
										<thead className="table-light">
											<tr>
												<th>طلاب</th>
												<th>النتيجة</th>
  <th>محاولة</th>
  <th>وقت الانتهاء</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-3.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">سميرة</h5>
														</div>
													</a>
												</td> 
												<td>75</td>
												<td>3 محاولات</td>
												<td>20 July, 9:39am</td>
											</tr>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-4.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">أنس</h5>
														</div>
													</a>
												</td>
												<td>42</td>
												<td>3 محاولات</td>
												<td>20 July, 10:39am</td>
											</tr>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-5.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">معاذ</h5>
														</div>
													</a>
												</td>
												<td>74</td>
												<td>5 محاولات</td>
												<td>20 July, 11:39am</td>
											</tr>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-6.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">مراد</h5>
														</div>
													</a>
												</td>
												<td>32</td>
												<td>3 محاولات</td>
												<td>20 July, 09:39am</td>
											</tr>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-7.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">Margare McGrath</h5>
														</div>
													</a>
												</td>
												<td>98</td>
												<td>3 محاولات</td>
												<td>19 July, 04:00am</td>
											</tr>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-8.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">Carlos Rhodes</h5>
														</div>
													</a>
												</td>
												<td>100</td>
												<td>3 محاولات</td>
												<td>19 July, 06:00am</td>
											</tr>
											<tr>
												<td>
													<a href="#">
														<div className="d-flex align-items-center">
															<img src="../assets/images/avatar/avatar-9.jpg" alt="avatar" className="rounded-circle avatar-sm me-2" />
															<h5 className="mb-0 tajawal-bold">Alice Marshالكل</h5>
														</div>
													</a>
												</td>
												<td>35</td>
												<td>2 محاولات</td>
												<td>19 July, 12:00pm</td>
											</tr>
										</tbody>
									</table>
								</div>

								<div className="card-footer">
									{/*  Pagination  */}
									<div className="d-md-flex align-items-center w-100 justify-content-between">
										<span>Showing 1 to 8 of 20 entries</span>
										<nav>
											<ul className="pagination mb-0 mt-3">
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