"use client"
import React, { useState } from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import Link from 'next/link';
import Header from "../../../../../../app/(dashboard)/teacher/_components/Header";
import Navbar from "../../../../../../app/(dashboard)/teacher/_components/Navbar";
import ComponentHeader from "../../../../../../app/(dashboard)/teacher/_components/ComponentHeader";

function BillingInfo() {
  const [isChecked, setIsChecked] = useState(false)

	return (
		
		<div dir='rtl'>
				<Header />
		
		<main>
			<section className="pt-5 pb-5">
				<div className="container-fluid p-4" style={{maxWidth: "75%"}}>
				<ComponentHeader />


					
{/* My Section */}
					<div className="row mt-0 mt-md-4">
						<div className="col-lg-3 col-md-4 col-12">
							
						<Navbar />
						</div>
						<div className="col-lg-9 col-md-8 col-12">
							{/*Card */}
							<div className="card border-0">
								{/*Card header */}
								<div className="card-header d-lg-flex justify-content-between align-items-center">
									<div className="mb-3 mb-lg-0">
										<h3 className="mb-0 tajawal-bold">إشتراكاتي</h3>
										<p className="mb-0">فيما يلي قائمة بالحزمة/المنتج الذي اشتركت فيه.</p>
									</div>
									<div>
										<Link href="pricing.html" className="btn btn-success btn-sm">قم بالترقية الآن – 39.00 دولارًا</Link>
									</div>
								</div>
								{/*Card body */}
								<div className="card-body">
									<div className="border-bottom pt-0 pb-5">
										<div className="row mb-4">
											<div className="col-lg-6 col-md-8 col-7 mb-2 mb-lg-0">
												<span className="d-block">
													<span className="h4">شهريا</span>
													<span className="badge bg-success ms-2">نشط</span>
												</span>
												<p className="mb-0 fs-6">رمز الإشتراك: #100010002</p>
											</div>
											<div className="col-lg-3 col-md-4 col-5 mb-2 mb-lg-0">
												{/*Custom Switch */}
												<span>التجديد التلقائي</span>
												<div className="form-check form-switch">
													<input type="checkbox" className="form-check-input" id="customSwitch1" checked={isChecked} />
													<label className="form-check-label" htmlFor="customSwitch1"></label>
												</div>
											</div>
											<div className="col-lg-3 col-md-12 col-12 d-lg-flex align-items-start justify-content-end">
												<Link href="#" className="btn btn-outline-primary btn-sm">تغيير الخطة</Link>
											</div>
										</div>
										{/*Pricing data */}
										<div className="row">
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">بدأ في</span>
												<h6 className="mb-0">Oct 1, 2020</h6>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">السعر</span>
												<h6 className="mb-0">شهريا</h6>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">إمكانية الوصول</span>
												<h6 className="mb-0">الوصول إلى كافة الدورات</h6>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">تاريخ الفواتير</span>
												<h6 className="mb-0">الفاتورة القادمة في 1 أكتوبر 2020</h6>
											</div>
										</div>
									</div>
									<div className="pt-5">
										<div className="row mb-4">
											<div className="col mb-2 mb-lg-0">
												<span className="d-block">
													<span className="h4">خطة مجانية</span>
													<span className="badge bg-danger ms-2">منتهي</span>
												</span>
												<p className="mb-0 fs-6">رمز الإشتراك: #100010001</p>
											</div>
											<div className="col-auto">
												<Link href="#" className="btn btn-light btn-sm disabled">معطل</Link>
											</div>
										</div>
										<div className="row">
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">بدأ في</span>
												<h6 className="mb-0">Sept 1, 2020</h6>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">السعر</span>
												<h6 className="mb-0">مجاني - تجربة شهر</h6>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">إمكانية الوصول</span>
												<h6 className="mb-0">الوصول إلى كافة الدورات</h6>
											</div>
											<div className="col-lg-3 col-md-3 col-6 mb-2 mb-lg-0">
												<span className="fs-6">تاريخ الفواتير</span>
												<h6 className="mb-0">الفاتورة القادمة في 1 أكتوبر 2020</h6>
											</div>
										</div>
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

export default BillingInfo
