import Link from "next/link";
import React from "react";

function Section2() {
	const Background = "/assets/images/group.png";

	return (
		<section
			className="py-8"
			style={{
				paddingTop: "7rem",
				paddingBottom: "7rem",
				/* backgroundImage: `url(${Background})`,
				backgroundPosition: "center center",
				backgroundRepeat: "no-repeat",
				opacity: 0.9,
				backgroundSize: "cover", */
				position: "relative",
			}}
		>
			<div className="container">
				<div className="row">
					<div className="offset-xl-1 col-xl-10 col-md-12 col-12">
						<div className="row text-center">
							<div className="col-md-12 px-lg-8 mb-8 mt-6">
								<span className="text-uppercase text-primary tajawal-bold ls-md tajawal-bold">
									انضم إلينا
								</span>
								<h2 className="tajawal-bold mt-3 tajawal-bold">
									خطواتك نحو التفوق
								</h2>
							</div>
						</div>
						<div className="row gy-6">
							<div className="col-md-4 col-12">
								<div className="text-center">
									<div className="icon-shape icon-lg border border-primary fs-3 rounded-circle mb-4 process-line text-primary smooth-shadow-md">
										3
									</div>

									<h3 className='tajawal-bold'>اختر باقتك</h3>

									<p className="mb-0 px-4">
										انطلق في رحلتك التعليمية عبر الإنترنت من خلال إنشاء حسابك
										الشخصي معنا. املأ بياناتك وابدأ في الاستفادة من مجموعة من
										الموارد التعليمية المتاحة لك
									</p>
								</div>
							</div>

							<div className="col-md-4 col-12">
								<div className="text-center">
									<div className="icon-shape icon-lg border border-primary fs-3 rounded-circle mb-4 process-line text-primary smooth-shadow-md">
										2
									</div>

									<h3 className='tajawal-bold'>اكتشف برامجنا التعليمية</h3>

									<p className="mb-0 px-2">
										استكشف مجموعة واسعة من برامجنا التعليمية المميزة التي تغطي
										مختلف المجالات والمواضيع. اطلع على الدروس والمواد التعليمية
										المتاحة واختر ما يناسب احتياجاتك التعليمية
									</p>
								</div>
							</div>

							<div className="col-md-4 col-12">
								<div className="text-center">
									<div className="icon-shape icon-lg border border-primary fs-3 rounded-circle mb-4 text-primary smooth-shadow-md">
										1
									</div>

									<h3 className='tajawal-bold'> أنشئ حسابك</h3>

									<p className="mb-0 px-3">
										انطلق في رحلتك التعليمية عبر الإنترنت من خلال إنشاء حسابك
										الشخصي معنا. املأ بياناتك وابدأ في الاستفادة من مجموعة من
										الموارد التعليمية المتاحة لك
									</p>
								</div>
							</div>

							<div className="col-12 mt-8 text-center">
								<Link href="/auth/register" className="btn btn-primary tajawal-bold">
									اشترك الآن
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Section2;
