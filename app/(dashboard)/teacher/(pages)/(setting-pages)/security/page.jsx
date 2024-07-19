"use client"
import React, { useState } from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import Link from 'next/link';
import Header from "../../../../../../app/(dashboard)/teacher/_components/Header";
import Navbar from "../../../../../../app/(dashboard)/teacher/_components/Navbar";
import ComponentHeader from "../../../../../../app/(dashboard)/teacher/_components/ComponentHeader";

function Security() {
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
							{/*  Card  */}
							<div className="card">
								{/*  Card header  */}
								<div className="card-header">
									<h3 className="mb-0 tajawal-bold">الحماية</h3>
									<p className="mb-0">قم بتحرير إعدادات حسابك وقم بتغيير كلمة المرور الخاصة بك هنا.</p>
								</div>
								{/*  Card body  */}
								<div className="card-body">
									<h4 className="mb-0 tajawal-bold">عنوان البريد الإلكتروني</h4>
									<p>
										عنوان بريدك الإلكتروني الحالي هو
										<span className="text-success mx-1">test@gmail.com</span>
									</p>
									<form className="row needs-validation" noValidate="">
										<div className="mb-3 col-lg-6 col-md-12 col-12">
											<label className="form-label" htmlFor="email">عنوان البريد الإلكتروني الجديد</label>
											<input id="email" type="email" name="email" className="form-control" placeholder="" required />
											<div className="invalid-feedback">Please Enter email address</div>
											<button type="submit" className="btn btn-primary mt-2">تحديث التفاصيل</button>
										</div>
									</form>
									<hr className="my-5" />
									<div>
										<h4 className="mb-0 tajawal-bold">تغيير كلمة المرور</h4>
										<p>سنرسل إليك تأكيدًا عبر البريد الإلكتروني عند تغيير كلمة المرور الخاصة بك، لذا يرجى توقع وصول هذه الرسالة الإلكترونية بعد الإرسال.</p>
										{/*  Form  */}
										<form className="row needs-validation" noValidate="">
											<div className="col-lg-6 col-md-12 col-12">
												{/*  Current password  */}
												<div className="mb-3">
													<label className="form-label" htmlFor="currentpassword">كلمة السر الحالية</label>
													<input id="currentpassword" type="password" name="currentpassword" className="form-control" placeholder="" required />
													<div className="invalid-feedback">Please enter current password.</div>
												</div>
												{/*  New password  */}
												<div className="mb-3 password-field">
													<label className="form-label" htmlFor="newpassword">كلمة المرور الجديدة</label>
													<input id="newpassword" type="password" name="newpassword" className="form-control mb-2" placeholder="" required />
													<div className="invalid-feedback">Please enter new password.</div>
													<div className="row align-items-center g-0">
														<div className="col-6">
															<span data-bs-toggle="tooltip" data-placement="right" data-bs-original-title="Test it by typing a password in the field below. To reach full strength, use at least 6 characters, a capital letter and a digit, e.g. 'Test01'">
																قوة كلمة المرور
																<i className="fe fe-help-circle ms-1"></i>
															</span>
														</div>
													</div>
												</div>
												<div className="mb-3">
													{/*  Confirm new password  */}
													<label className="form-label" htmlFor="confirmpassword">تأكيد كلمة المرور الجديدة</label>
													<input id="confirmpassword" type="password" name="confirmpassword" className="form-control mb-2" placeholder="" required />
													<div className="invalid-feedback">Please enter confirm new password.</div>
												</div>
												{/*  Button  */}
												<button type="submit" className="btn btn-primary">حفظ كلمة المرور</button>
												<div className="col-6"></div>
											</div>
											<div className="col-12 mt-4">
												<p className="mb-0">
													لا تستطيع تذكر كلمة المرور الحالية الخاصة بك؟
													<a href="#" className='mx-1'>إعادة تعيين كلمة المرور الخاصة بك عبر البريد الإلكتروني</a>
												</p>
											</div>
										</form>
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

export default Security
