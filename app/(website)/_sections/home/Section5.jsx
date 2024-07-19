import Image from 'next/image'
import React from 'react'

function Section5() {
	return (
		<section className="bg-primary" dir='rtl'>
			<div className="container">
				{/* row */}
				<div className="row align-items-center g-0">
					<div className="col-xl-6 col-lg-6 col-md-12">
						{/* heading */}
						<div className="py-6 py-lg-0">
							<h1 className="text-white display-4 fw-bold pe-lg-8">انضم إلى فريقنا وشكّل مستقبل التعليم الإلكتروني</h1>
							{/* text */}
							<p className="text-white my-4 lead">
								إذا كنت متحمسًا وجاهزًا للانخراط، فنحن نرحب بلقائك. نحن ملتزمون بدعم و تطوير رحلتك التعليمية بأحدث الطرق و الوسائل.
							</p>
							{/* btn */}
							<a href="/auth/register" className="btn btn-dark">إنضم إلينا</a>
						</div>
					</div>
					{/* img */}
					<div className="col-xl-6 col-lg-6 col-md-12 text-lg-end text-center py-6" style={{ borderRadius: "50%" }}>
						<Image src="/assets/images/teachers/cta1.jpeg" alt="صورة البطل" className="img-fluid" width={800} height={800} ></Image>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Section5