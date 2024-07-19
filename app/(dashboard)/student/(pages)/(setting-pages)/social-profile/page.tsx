"use client"
import React, { useState } from 'react'
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react'
import Link from 'next/link';
import Header from "../../../../../../app/(dashboard)/student/_components/Header";
import Navbar from "../../../../../../app/(dashboard)/student/_components/Navbar";
import ComponentHeader from "../../../../../../app/(dashboard)/student/_components/ComponentHeader";

function SocialProfile() {
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
									<h3 className="mb-0 tajawal-bold">وسائل التواصل الاجتماعي</h3>
									<p className="mb-0">أضف روابط ملفك الشخصي الاجتماعي في الحسابات الاجتماعية أدناه.</p>
								</div>
								{/*  Card body  */}
								<div className="card-body">
									<div className="row mb-5">
										{/*  Twitter  */}
										<div className="col-lg-3 col-md-4 col-12">
											<h5>Twitter</h5>
										</div>
										<div className="col-lg-9 col-md-8 col-12">
											<input type="text" className="form-control mb-1" placeholder="Twitter Profile Name" />
											<small>أضف اسم مستخدم تويتر الخاص بك (مثل Mohammed).</small>
										</div>
									</div>
									{/*  Facebook  */}
									<div className="row mb-5">
										<div className="col-lg-3 col-md-4 col-12">
											<h5>Facebook</h5>
										</div>
										<div className="col-lg-9 col-md-8 col-12">
											<input type="text" className="form-control mb-1" placeholder="Facebook Profile Name" />
											<small>أضف اسم مستخدم فيسبوك الخاص بك (مثل Mohammed).</small>
										</div>
									</div>
									{/*  Instagram  */}
									<div className="row mb-5">
										<div className="col-lg-3 col-md-4 col-12">
											<h5>Instagram</h5>
										</div>
										<div className="col-lg-9 col-md-8 col-12">
											<input type="text" className="form-control mb-1" placeholder="Instagram Profile Name" />
											<small>أضف اسم مستخدم Instagram الخاص بك (مثل Mohammed).</small>
										</div>
									</div>
									{/*  Linked in  */}
									<div className="row mb-5">
										<div className="col-lg-3 col-md-4 col-12">
											<h5>LinkedIn Profile URL</h5>
										</div>
										<div className="col-lg-9 col-md-8 col-12">
											<input type="text" className="form-control mb-1" placeholder="LinkedIn Profile URL" />
											<small>أضف ملفك الشخصي على LinkedIn.</small>
										</div>
									</div>
									{/*  Youtube  */}
									<div className="row mb-3">
										<div className="col-lg-3 col-md-4 col-12">
											<h5>YouTube</h5>
										</div>
										<div className="col-lg-9 col-md-8 col-12">
											<input type="text" className="form-control mb-1" placeholder="YouTube URL" />
											<small>أضف ملفك الشخصي على اليوتيوب.</small>
										</div>
									</div>
									{/*  Button  */}
									<div className="row">
										<div className="offset-lg-3 col-lg-6 col-12">
											<a href="#" className="btn btn-primary">حفظ الملف الشخصي</a>
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

export default SocialProfile
