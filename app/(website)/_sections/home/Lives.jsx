import React from 'react'

function Lives() {
	return (
		<section className="py-lg-8 py-6 " dir='rtl'>
			<div className="container my-lg-8">
				<div className="row">
					<div className="col-xl-6 col-md-12 col-12">
						<div className="mb-lg-8 mb-6">
							<h1 className="tajawal-bold">
								<u className="text-warning"><span className="text-primary">البثوث المباشرة التعليمية القادمة</span></u>
							</h1>
							<p className="lead mb-0">لا تفوتوا فرص حضور البثوث المباشرة التعليمية القادمة للاستفادة من أحدث المعلومات والتفاعل مع الخبراء مباشرة.</p>
						</div>

					</div>
				</div>
				<div className="table-responsive-xl pb-6">
					<div className="row row-cols-lg-3 row-cols-1 flex-nowrap">
						<div className="col">
							<div className="card mb-4 mb-xl-0 card-hover border rounded-3">
								<div className='p-3'>
									<a href="#!">

										<img src="../../../assets/images/teachers/9.jpg" alt="webinar-1" className="img-fluid w-100 rounded-3" />
									</a>
								</div>
								<div className="card-body">
									<h3 className="mb-4 text-truncate">
										<a href="#!" className="text-inherit">إعداد ونشر النسخة التعليمية</a>
									</h3>
									<div className="mb-4">
										<div className="mb-3 lh-1">
											<span className="me-1">
												<i className="bi bi-calendar-check"></i>
											</span>
											<span>الخميس، 10 نوفمبر 2023</span>
										</div>
										<div className="lh-1">
											<span className="align-text-top me-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
													<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
													<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
												</svg>
											</span>
											<span>6:00 مساءً – 8:00 مساءً بتوقيت غرينتش</span>
										</div>
									</div>
									<a href="formations" className="btn btn-light-primary text-primary">سجل الآن</a>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card mb-4 mb-xl-0 card-hover border rounded-3">
								<div className='p-3'>

									<a href="#!">
										<img src="../../../assets/images/teachers/10.jpg" alt="webinar-2" className="img-fluid w-100 rounded-3" />
									</a>
								</div>
								<div className="card-body">
									<h3 className="mb-4 text-truncate">
										<a href="#!" className="text-inherit">بناء فصل دراسي تعاوني</a>
									</h3>
									<div className="mb-4">
										<div className="mb-3 lh-1">
											<span className="me-1">
												<i className="bi bi-calendar-check"></i>
											</span>
											<span>26 يونيو 2023</span>
										</div>
										<div className="lh-1">
											<span className="align-text-top me-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
													<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
													<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
												</svg>
											</span>
											<span>8:00 صباحاً بتوقيت المحيط الهادئ</span>
										</div>
									</div>
									<a href="formations" className="btn btn-light-primary text-primary">سجل الآن</a>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-hover border rounded-3">
								<div className='p-3'>

									<a href="#!">
										<img src="../../../assets/images/teachers/11.jpg" alt="webinar-3" className="img-fluid w-100 rounded-3" />
									</a>
								</div>
								<div className="card-body">
									<h3 className="mb-4 text-truncate">
										<a href="#!" className="text-inherit">زيادة مهارات القراءة واللغة</a>
									</h3>
									<div className="mb-4">
										<div className="mb-3 lh-1">
											<span className="me-1">
												<i className="bi bi-calendar-check"></i>
											</span>
											<span>10 نوفمبر 2023</span>
										</div>
										<div className="lh-1">
											<span className="align-text-top me-1">
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16">
													<path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"></path>
													<path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"></path>
												</svg>
											</span>
											<span>10:00 مساءً بتوقيت الهند القياسي</span>
										</div>
									</div>
									<a href="formations" className="btn btn-light-primary text-primary">سجل الآن</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default Lives