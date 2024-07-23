"use client";
import React, { useState } from "react";
import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import Link from "next/link";
import Image from "next/image";
import Header from "./_components/Header";
import Navbar from "../student/_components/Navbar";
import ComponentHeader from "../student/_components/ComponentHeader";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import ReactApexChart from "react-apexcharts";
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token


function Student() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const sectionClassName = show ? "container-fluid p-4 bg-white modal-open" : "container-fluid p-4";
	const sectionStyle = show ? { overflow: "hidden", paddingRight: "17px", maxWidth: "75%" } : { maxWidth: "75%" };

	/* Diagram start */
	const chartOptions = {
		chart: {
			type: 'pie',
		},
		labels: ['ممتاز', 'جيد جداً', 'جيد', 'مقبول', 'ضعيف'],
		responsive: [{
			breakpoint: 480,
			options: {
				chart: {
					width: 200
				},
				legend: {
					position: 'bottom'
				}
			}
		}]
	};

	const chartSeries = [44, 55, 13, 43, 22]; // Example data
	/* Diagram end */

	return (
		<div dir="rtl">
			<Header />

			<main>
				<section className="pt-5 pb-5">
					<div className={sectionClassName} style={sectionStyle}>
						<ComponentHeader />

						{/* My Section */}
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
												<span className="fs-6 text-uppercase tajawal-bold"> الدورات الملتحق بها</span>
												<h2 className="mt-4 tajawal-bold mb-1 d-flex align-items-center h1 lh-1">5</h2>
												<span className="d-flex justify-content-between align-items-center">
													<span>دورات حالية</span>
													<span className="badge bg-info ms-2">2 جديدة</span>
												</span>
											</div>
										</div>
									</div>
									{/*  Card  */}
									<div className="col-lg-4 col-md-12 col-12">
										<div className="card mb-4">
											<div className="p-4">
												<span className="fs-6 text-uppercase tajawal-bold">سجل الحضور</span>
												<h2 className="mt-4 tajawal-bold mb-1 d-flex align-items-center h1 lh-1">95%</h2>
												<span className="d-flex justify-content-between align-items-center">
													<span>نسبة الشهر</span>
													<span className="badge bg-success ms-2">+5%</span>
												</span>
											</div>
										</div>
									</div>

									{/*  Card  */}
									<div className="col-lg-4 col-md-12 col-12">
										<div className="card mb-4">
											<div className="p-4">
												<span className="fs-6 text-uppercase tajawal-bold">ملخص الدرجات</span>
												<h2 className="mt-4 tajawal-bold mb-1 d-flex align-items-center h1 lh-1">A+</h2>
												<span className="d-flex justify-content-between align-items-center">
													<span>المعدل التراكمي</span>
													<span className="badge bg-primary ms-2">ممتاز</span>
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
											<ReactApexChart options={chartOptions} series={chartSeries} type="pie" height={350} />
										</div>
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
	);
}

export default Student;
