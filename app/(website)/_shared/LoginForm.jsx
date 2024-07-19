import React from 'react'


const Login = ({ email, password, setEmail, setPassword, handleSubmit, error }) => {
	return (
		<>
			<main>
				<section className="container d-flex flex-column vh-100">
					<div className="row align-items-center justify-content-center g-0 h-lg-100 py-8">
						<div className="col-lg-5 col-md-8 py-8 py-xl-0">

							<div className="card shadow">

								<div className="card-body p-6">
									<div className="mb-4">
										<a href="../index.html"><img src="../assets/images/brand/logo/logo-icon.svg" className="mb-4" alt="logo-icon" /></a>
										<h1 className="mb-1 tajawal-bold">Sign in</h1>
										<span>
											Don’t have an account?
											<a href="sign-up.html" className="ms-1">Sign up</a>
										</span>
									</div>

									<form className="needs-validation" onSubmit={handleSubmit}>

										<div className="mb-3">
											<label htmlFor="email" className="form-label">Username or email</label>
											<input type="email" id="email" className="form-control" name="email" placeholder="Email address here" value={email}
												onChange={(e) => setEmail(e.target.value)} required />
											<div className="invalid-feedback">Please enter valid username.</div>
										</div>

										<div className="mb-3">
											<label htmlFor="password" className="form-label">Password</label>
											<input type="password" id="password" className="form-control" name="password" placeholder="**************" value={password}
												onChange={(e) => setPassword(e.target.value)} required />
											<div className="invalid-feedback">Please enter valid password.</div>
										</div>

										<div>
											<div className="d-grid">
												<button type="submit" className="btn btn-primary">Sign in</button>
												{error && <p style={{ color: 'red' }}>{error}</p>}
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="position-absolute bottom-0 m-4">
					<div className="dropdown">
						<button className="btn btn-light btn-icon rounded-circle d-flex align-items-center" type="button" aria-expanded="false" data-bs-toggle="dropdown" aria-label="Toggle theme (auto)">
							<i className="bi theme-icon-active"></i>
							<span className="visually-hidden bs-theme-text">Toggle theme</span>
						</button>
						<ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bs-theme-text">
							<li>
								<button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light" aria-pressed="false">
									<i className="bi theme-icon bi-sun-fill"></i>
									<span className="ms-2">Light</span>
								</button>
							</li>
							<li>
								<button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="dark" aria-pressed="false">
									<i className="bi theme-icon bi-moon-stars-fill"></i>
									<span className="ms-2">Dark</span>
								</button>
							</li>
							<li>
								{error && <p style={{ color: 'red' }}>Error: {error}</p>}
								<button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="auto" aria-pressed="true">
									<i className="bi theme-icon bi-circle-half"></i>
									<span className="ms-2">Auto</span>
								</button>
							</li>
						</ul>
					</div>
				</div>
			</main>
		</>
	)
}

export default Login