import React from 'react';

const Hero2 = () => {
	return (
		<>
		
		<section className="py-lg-8 py-7 bg-white" dir='rtl'>
			<div className="container my-lg-8">
				{/* Hero Section */}
				<div className="row">
					<div className="col-xl-6 col-lg-6 col-md-12" style={{
						display: "flex",
						alignItems: "center",
					}}>
						<div className="mb-4 mb-xl-0 text-center text-md-start">
							{/* Caption */}
							<h1 className="display-2 fw-bold mb-3 ls-sm">كن جزءًا من مدرستنا الافتراضية</h1>
							<p className="mb-4 lead">انضم إلينا في رحلة التعلم واكتسب مهارات جديدة مع دوراتنا المميزة.</p>
							{/* List */}
							<div className="mb-6 mb-0">
								<ul className="list-unstyled fs-4">
									<li className="mb-2">
										<span className="me-2"><i className="fe fe-clock text-primary"></i></span>
										<span className="align-text-top">المدة: أكثر من 100 ساعة </span>
									</li>
									<li className="mb-2">
										<span className="me-2"><i className="fe fe-video text-primary"></i></span>
										<span className="align-text-top">عدد الفيديوهات: أكثر من 84 فيديو</span>
									</li>
									<li className="mb-2">
										<span className="me-2"><i className="fe fe-users text-primary"></i></span>
										<span className="align-text-top">عدد المشاركين: أكثر من 10,234 مشترك</span>
									</li>
								</ul>
							</div>
							<a href="/auth/register" className="glightbox btn btn-outline-primary btn-lg fs-4"> إنضم إلينا</a>
						</div>
					</div>
					<div className="col-xx	l-5 col-lg-6 col-md-12">
						{/* Card */}
						<div className="card smooth-shadow-md" style={{ zIndex: 1 }}>
							{/* Card body */}
							<div className="card-body p-xl-6">
								<div className="mb-4">
									<h1 className="mb-4 lh-1 fw-bold">أنشئ حسابًا مجانيًا</h1>
									<div className="mt-3 mb-5 row g-2">
										{/* btn group */}
										<div className="btn-group mb-2 mb-md-0 col-md-4" role="group" aria-label="socialButton">
											<button type="button" className="btn btn-light shadow-sm">
												<span className="me-1 align-text-bottom">
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-google text-danger" viewBox="0 0 16 16">
														<path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"></path>
													</svg>
												</span>
												<span>Google</span>
											</button>
										</div>
										{/* btn group */}
										<div className="btn-group mb-2 mb-md-0 col-md-4" role="group" aria-label="socialButton">
											<button type="button" className="btn btn-light shadow-sm">
												<span className="me-1 align-text-bottom">
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-twitter text-info" viewBox="0 0 16 16">
														<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path>
													</svg>
												</span>
												<span>Twitter</span>
											</button>
										</div>
										{/* btn group */}
										<div className="btn-group col-md-4" role="group" aria-label="socialButton">
											<button type="button" className="btn btn-light shadow-sm">
												<span className="me-1 align-text-bottom">
													<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-facebook text-primary" viewBox="0 0 16 16">
														<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"></path>
													</svg>
												</span>
												<span>Facebook</span>
											</button>
										</div>
									</div>
								</div>
								<div className="mb-4">
									<div className="border-bottom"></div>
									<div className="text-center mt-n2 lh-1">
										<span className="bg-white px-2 fs-6 rounded">أو</span>
									</div>
								</div>
								{/* Form */}
								<form className="needs-validation" noValidate="">
									{/* Username */}
									<div className="mb-3">
										<label htmlFor="email" className="form-label visually-hidden">البريد الإلكتروني</label>
										<input type="email" id="email" className="form-control" name="email" placeholder="البريد الإلكتروني" required="" style={{
											direction: "rtl"
										}}/>
										<div className="invalid-feedback">الرجاء إدخال بريد إلكتروني صالح.</div>
									</div>
									{/* Password */}
									<div className="mb-3">
										<label htmlFor="password" className="form-label visually-hidden">كلمة المرور</label>
										<input type="password" id="password" className="form-control" name="password" placeholder="كلمة المرور" required="" />
										<div className="invalid-feedback">الرجاء إدخال كلمة مرور صحيحة.</div>
									</div>
									{/* Remember me */}
									<div className="mb-3 form-check">
										<input type="checkbox" id="remember" className="form-check-input" name="remember" />
										<label htmlFor="remember" className="form-check-label">تذكرني</label>
									</div>
									{/* Submit */}
									<button type="submit" className="btn btn-primary btn-lg w-100">تسجيل الدخول</button>
								</form>
								{/* Divider */}
								<div className="mt-4 mb-2 border-bottom"></div>
								{/* Link */}
								<div className="d-flex justify-content-center mt-4 fs-6">
									<p className="mb-0">ليس لديك حساب؟ <a href="/auth/register" className="ms-1 fw-semibold">سجل الآن</a></p>
								</div>
							</div>
						</div>
						<div className="position-relative" dir='ltr'>
								<div className="position-absolute bottom-0 end-0 me-md-n3 mb-md-n6 me-lg-n4 mb-lg-n4 me-xl-n6 mb-xl-n8 d-none d-md-block">
									<img src="../../../assets/images/pattern/dots-pattern.svg" alt="" className="opacity-25" />
								</div>
							</div>
					</div>
				</div>
			</div>
		</section>

		<section className="py-4 shadow-sm position-relative bg-white" dir='rtl'>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-md-6 col-12" style={{
				display: "flex",
				justifyContent: "center"
			}}>
        {/*  Feature  */}
        <div className="text-dark fw-semibold lh-1 fs-4 mb-3 mb-lg-0">
          <span className="icon-shape icon-xs rounded-circle text-center me-2" style={{backgroundColor: "#f76dad28"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check" style={{ color: '#e82782' }} viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>
          </span>
          <span className="align-middle">شهادة قابلة للمشاركة</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12" style={{
				display: "flex",
				justifyContent: "center"
			}}>
        {/*  Feature  */}
        <div className="text-dark fw-semibold lh-1 fs-4 mb-3 mb-lg-0">
				<span className="icon-shape icon-xs rounded-circle text-center me-2" style={{backgroundColor: "#f76dad28"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check" style={{ color: '#e82782' }} viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>
          </span>
          <span className="align-middle">مواعيد مرنة</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12" style={{
				display: "flex",
				justifyContent: "center"
			}}>
        {/*  Feature  */}
        <div className="text-dark fw-semibold lh-1 fs-4 mb-3 mb-md-0">
				<span className="icon-shape icon-xs rounded-circle text-center me-2" style={{backgroundColor: "#f76dad28"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check" style={{ color: '#e82782' }} viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>
          </span>
          <span className="align-middle">دورات 100% عبر الإنترنت</span>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-12" style={{
				display: "flex",
				justifyContent: "center"
			}}>
        {/*  Feature  */}
        <div className="text-dark fw-semibold lh-1 fs-4">
				<span className="icon-shape icon-xs rounded-circle text-center me-2" style={{backgroundColor: "#f76dad28"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check" style={{ color: '#e82782' }} viewBox="0 0 16 16">
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
            </svg>
          </span>
          <span className="align-middle">حوالي 24 ساعة</span>
        </div>
      </div>
    </div>
  </div>
</section>

</>
	);
};

export default Hero2;


