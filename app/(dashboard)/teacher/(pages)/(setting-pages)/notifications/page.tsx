"use client"
import React, { useState } from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import Link from 'next/link';
import Header from "../../../../../../app/(dashboard)/teacher/_components/Header";
import Navbar from "../../../../../../app/(dashboard)/teacher/_components/Navbar";
import ComponentHeader from "../../../../../../app/(dashboard)/teacher/_components/ComponentHeader";

function Notifications() {
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
								<div className="card-header d-flex justify-content-between align-items-center">
									<div>
										{/*  Notification  */}
										<h3 className="mb-0 tajawal-bold">إشعارات</h3>
										<p className="mb-0">سوف تحصل على إشعار فقط بما تم تمكينه.</p>
									</div>
									<div>
										<div className="form-check form-switch">
											<input className="form-check-input" type="checkbox" id="checkAll" defaultChecked />
											<label className="form-check-label" htmlFor="checkAll"></label>
										</div>
									</div>
								</div>
								{/*  Card body  */}
								<div className="card-body">
									<div className="mb-5">
										<h4 className="mb-0 tajawal-bold">تنبيهات أمنية</h4>
										<p>سوف تحصل فقط على إشعار البريد الإلكتروني الذي تريده.</p>
										{/*  List group  */}
										<ul className="list-group list-group-flush">
											{/*  List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>أرسل لي بريدًا إلكترونيًا كلما واجهت نشاطًا غير عادي</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchOne" defaultChecked />
														<label className="form-check-label" htmlFor="switchOne"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>أرسل لي بريدًا إلكترونيًا إذا تم استخدام متصفح جديد لتسجيل الدخول</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchTwo" />
														<label className="form-check-label" htmlFor="switchTwo"></label>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div className="mb-5">
										<h4 className="mb-0 tajawal-bold">الأخبار</h4>
										<p>سوف تحصل فقط على إشعار البريد الإلكتروني الذي تريده.</p>
										{/*  List group */}
										<ul className="list-group list-group-flush">
											{/*  List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>أعلمني عبر البريد الإلكتروني عن المبيعات وآخر الأخبار</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchThree" defaultChecked />
														<label className="form-check-label" htmlFor="switchThree"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>أرسل لي بريدًا إلكترونيًا حول الميزات والتحديثات الجديدة</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchFour" />
														<label className="form-check-label" htmlFor="switchFour"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex align-items-center justify-content-between px-0 py-2">
												<div>أرسل لي رسالة عبر البريد الإلكتروني حول نصائح حول استخدام الحساب</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchFive" defaultChecked />
														<label className="form-check-label" htmlFor="switchFive"></label>
													</div>
												</div>
											</li>
										</ul>
									</div>
									<div>
										{/*  Content  */}
										<h4 className="mb-0 tajawal-bold">الدورات</h4>
										<p>سوف تحصل فقط على إشعار البريد الإلكتروني الذي تريده.</p>
										{/*  List group  */}
										<ul className="list-group list-group-flush mb-4">
											{/*  List group item  */}
											<li className="list-group-item d-flex justify-content-between px-0">
												<div>
													<h5 className="mb-0 tajawal-bold">تحديثات من الفصول الدراسية التي تحضرها</h5>
													<span className="text-body">الإعلانات والأحداث، والنصائح والحيل.</span>
												</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchSix" defaultChecked />
														<label className="form-check-label" htmlFor="switchSix"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex justify-content-between px-0">
												<div>
													<h5 className="mb-0 tajawal-bold">تحديثات من مناقشات المعلمين</h5>
													<span className="text-body">المناقشات العامة خارج الفصل والتي يشاركها المعلمون مع جميع متابعيهم.</span>
												</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchSeven" />
														<label className="form-check-label" htmlFor="switchSeven"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex justify-content-between px-0">
												<div>
													<h5 className="mb-0 tajawal-bold">توصيات فئة شخصية</h5>
													<span className="text-body">توصيات أسبوعية مصممة خصيصا لاهتماماتك.</span>
												</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchEight" />
														<label className="form-check-label" htmlFor="switchEight"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex justify-content-between px-0">
												<div>
													<h5 className="mb-0 tajawal-bold">محتوى متميز</h5>
													<p className="mb-0 text-body">نصائح حول الدورات التدريبية واستخدام لوحة المعلومات وورش العمل والكتب والبرامج التعليمية والعديد من المقالات الثاقبة.</p>
												</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchNine" />
														<label className="form-check-label" htmlFor="switchNine"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex justify-content-between px-0">
												<div>
													<h5 className="mb-0 tajawal-bold">تحديثات المنتج</h5>
													<p className="mb-0 text-body">سنرسل إليك رسالة إخبارية تعلن عن التحديثات الأساسية للمنتج.</p>
												</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchTen" />
														<label className="form-check-label" htmlFor="switchTen"></label>
													</div>
												</div>
											</li>
											{/*  List group item  */}
											<li className="list-group-item d-flex justify-content-between px-0">
												<div>
													<h5 className="mb-0 tajawal-bold">الأحداث والعروض</h5>
													<p className="mb-0 text-body">الإعلان عن العروض الترويجية والأحداث القادمة، مثل جلسات Ask Me Anything والندوات عبر الإنترنت.</p>
												</div>
												<div>
													<div className="form-check form-switch">
														<input type="checkbox" className="form-check-input" id="switchEleven" />
														<label className="form-check-label" htmlFor="switchEleven"></label>
													</div>
												</div>
											</li>
										</ul>
										{/*  Short note  */}
										<a href="#" className="text-danger mb-2 d-block">
											<u>إلغاء الاشتراك في كل ما سبق</u>
										</a>
										<p className="mb-0">يرجى ملاحظة: ستظل تتلقى رسائل البريد الإلكتروني الإدارية الهامة، مثل إعادة تعيين كلمة المرور.</p>
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

export default Notifications
