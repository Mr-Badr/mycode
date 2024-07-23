"use client"
import Navbar from '../../(dashboard)/teacher/_components/Navbar';
import Header from '../../(dashboard)/teacher/_components/Header';
import React, { useState } from 'react'
import ComponentHeader from './_components/ComponentHeader';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactApexChart from 'react-apexcharts';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token


function Teacher() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px", maxWidth: "75%" } : { maxWidth: "75%" };

	/* Diagram start */
  const chartData = {
    series: [
      {
        name: 'A',
        data: [10, 15, 25, 30, 22, 18, 15, 28, 20, 12], // Example data: replace with actual data
      },
      {
        name: 'B',
        data: [15, 20, 30, 35, 27, 25, 20, 32, 25, 18], // Example data: replace with actual data
      },
      {
        name: 'C',
        data: [20, 25, 35, 40, 32, 28, 25, 38, 30, 22], // Example data: replace with actual data
      },
      {
        name: 'D',
        data: [25, 30, 40, 45, 37, 35, 30, 42, 35, 28], // Example data: replace with actual data
      },
      {
        name: 'F',
        data: [30, 35, 45, 50, 42, 38, 35, 48, 40, 32], // Example data: replace with actual data
      },
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      stroke: {
        width: 1,
        colors: ['#fff'],
      },
      title: {
        text: 'توزيع الدرجات',
        align: 'center',
        style: {
          fontSize: '16px',
          color: '#666',
					fontFamily: 'tajawal-bold', // Apply the custom font family class
        },
      },
      xaxis: {
        categories: ['أيلول', 'تشرين الأول', 'تشرين الثاني', 'كانون الأول', 'كانون الثاني', 'شباط', 'آذار', 'نيسان', 'أيار', 'حزيران'],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
      yaxis: {
        title: {
          text: 'عدد الطلاب',
          style: {
            fontSize: '14px',
          },
					offsetX: -35,
					offsetY: 0
        },
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val + ' طالب';
          },
        },
      },
      fill: {
        opacity: 1,
      },
      legend: {
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 40,
      },
    },
  };
	/* Diagram end */
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
							<div className="col-lg-9 col-md-8 col-12">
								<div className="row">

									{/*  Card  */}
									<div className="col-lg-4 col-md-12 col-12">
										<div className="card mb-4">
											<div className="p-4">
												<span className="fs-6 text-uppercase tajawal-bold">عدد الطلاب</span>
												<h2 className="mt-4 tajawal-bold mb-1 d-flex align-items-center h1 lh-1">150</h2>
												<span className="d-flex justify-content-between align-items-center">
													<span>طلاب جدد هذا الشهر</span>
													<span className="badge bg-info ms-2">10+</span>
												</span>
											</div>
										</div>
									</div>

									{/*  Card  */}
									<div className="col-lg-4 col-md-12 col-12">
										<div className="card mb-4">
											<div className="p-4">
												<span className="fs-6 text-uppercase tajawal-bold">معدل الحضور</span>
												<h2 className="mt-4 tajawal-bold mb-1 d-flex align-items-center h1 lh-1">85%</h2>
												<span className="d-flex justify-content-between align-items-center">
													<span>هذا الشهر</span>
													<span className="badge bg-success ms-2">+5%</span>
												</span>
											</div>
										</div>
									</div>


									{/*  Card  */}
									<div className="col-lg-4 col-md-12 col-12">
										<div className="card mb-4">
											<div className="p-4">
												<span className="fs-6 text-uppercase tajawal-bold">متوسط الدرجات</span>
												<h2 className="mt-4 tajawal-bold mb-1 d-flex align-items-center h1 lh-1">78%</h2>
												<span className="d-flex justify-content-between align-items-center">
													<span>هذا الشهر</span>
													<span className="badge bg-primary ms-2">+3%</span>
												</span>
											</div>
										</div>
									</div>


								</div>
								{/*  Card  */}
								<div className="card mb-4">
									{/*  Card header  */}
									<div className="card-header">
										<h3 className="mb-0 tajawal-bold">توزيع الدرجات الكلي</h3>
									</div>
									{/*  Card body  */}
									<div className="card-body">
										<div id="chart" className="apex-charts">
										<ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
										</div>
									</div>
								</div>

								<div className="card mb-4">
									{/*  Card header  */}
									<div className="card-header">
										<h3 className="mb-0 tajawal-bold">أحدث الدورات</h3>
									</div>
									{/*  Table  */}
									<div className="table-responsive">
										<table className="table mb-0 table-hover table-centered text-nowrap">
											{/*  Table Head  */}
											<thead className="table-light">
												<tr>
													<th>الدورات</th>
													<th>العدد</th>
													<th>الثمن</th>
													<th></th>
												</tr>
											</thead>
											{/*  Table Body  */}
											<tbody>
												<tr>
													<td>
														<a href="#">
															<div className="d-flex align-items-center">
																<img src="../assets/images/course/course-laravel.jpg" alt="course" className="rounded img-4by3-lg" />
																<h5 className="ms-3 text-primary-hover mb-0">Building Scalable APIs with GraphQL</h5>
															</div>
														</a>
													</td>
													<td>34</td>
													<td>$3,145.23</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown1" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown1">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" onClick={handleShow}>
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<a href="#">
															<div className="d-flex align-items-center">
																<img src="../assets/images/course/course-sass.jpg" alt="course" className="rounded img-4by3-lg" />
																<h5 className="ms-3 text-primary-hover mb-0">HTML5 Web Front End Development</h5>
															</div>
														</a>
													</td>
													<td>30</td>
													<td>$2,611.82</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown2" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown2">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<a href="#">
															<div className="d-flex align-items-center">
																<img src="../assets/images/course/course-vue.jpg" alt="course" className="rounded img-4by3-lg" />
																<h5 className="ms-3 text-primary-hover mb-0">Learn JavaScript Courses from Scratch</h5>
															</div>
														</a>
													</td>
													<td>26</td>
													<td>$2,372.19</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown3" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown3">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
															</span>
														</span>
													</td>
												</tr>
												<tr>
													<td>
														<a href="#">
															<div className="d-flex align-items-center">
																<img src="../assets/images/course/course-react.jpg" alt="course" className="rounded img-4by3-lg" />
																<h5 className="ms-3 text-primary-hover mb-0">Get Started: React Js Courses</h5>
															</div>
														</a>
													</td>
													<td>20</td>
													<td>$1,145.23</td>
													<td>
														<span className="dropdown dropstart">
															<a className="btn-icon btn btn-ghost btn-sm rounded-circle" href="#" role="button" id="courseDropdown4" data-bs-toggle="dropdown" data-bs-offset="-20,20" aria-expanded="false">
																<i className="fe fe-more-vertical"></i>
															</a>
															<span className="dropdown-menu" aria-labelledby="courseDropdown4">
																<span className="dropdown-header">الإعدادات</span>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-edit dropdown-item-icon"></i>
																	تعديل
																</a>
																<a className="dropdown-item" href="#">
																	<i className="fe fe-trash dropdown-item-icon"></i>
																	حذف
																</a>
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

export default Teacher