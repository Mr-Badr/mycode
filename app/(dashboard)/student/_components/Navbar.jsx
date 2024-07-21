import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function Navbar() {
	const pathname = usePathname()

	return (
		<nav className="navbar navbar-expand-md shadow-sm mb-4 mb-lg-0 sidenav">

			<Link className="d-xl-none d-lg-none d-md-none text-inherit tajawal-bold" href="#">Menu</Link>

			<button
				className="navbar-toggler d-md-none icon-shape icon-sm rounded bg-primary text-light"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#sidenav"	
				aria-controls="sidenav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="fe fe-menu"></span>
			</button>

			<div className="collapse navbar-collapse" id="sidenav">
				<div className="navbar-nav flex-column">
					<span className="navbar-header">الإشتراك</span>
					<ul className="list-unstyled ms-n2 mb-4">
						{/*  Nav item  */}
						<li className={pathname === '/student' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student" className="nav-link">
								<i className="fe fe-home nav-icon"></i>
								<span className={pathname === '/student' ? 'tajawal-bold' : ''}>
									لوحتي الخاصة
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/formations' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/formations" className="nav-link">
								<i className="fe fe-layers nav-icon"></i>
								<span className={pathname === '/student/formations' ? 'tajawal-bold' : ''}>
									جميع الدورات
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/my-formations' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/my-formations" className="nav-link">
								<i className="fe fe-book-open nav-icon"></i>
								<span className={pathname === '/student/my-formations' ? 'tajawal-bold' : ''}>
									دوراتي
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						{/* <li className={pathname === '/student/courses' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/courses" className="nav-link">
							<i className="nav-icon fe fe-clipboard"></i>
								<span className={pathname === '/student/courses' ? 'tajawal-bold' : ''}>
									الدروس
								</span>
							</Link>
						</li> */}

						{/*  Nav item  */}
						<li className={pathname === '/student/subjects' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/subjects" className="nav-link">
								<i className="fe fe-grid nav-icon"></i>
								<span className={pathname === '/student/subjects' ? 'tajawal-bold' : ''}>
									المواد الدراسية
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						{/* <li className={pathname === '/student/exercices' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/exercices" className="nav-link">
								<i className="fe fe-edit nav-icon"></i>
								<span className={pathname === '/student/exercices' ? 'tajawal-bold' : ''}>
									التمارين
								</span>
							</Link>
						</li> */}

						{/*  Nav item  */}
						{/* <li className={pathname === '/student/exercices-solution' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/exercices-solution" className="nav-link">
								<i className="fe fe-check-square nav-icon"></i>
								<span className={pathname === '/student/exercices-solution' ? 'tajawal-bold' : ''}>
									حلول التمارين
								</span>
							</Link>
						</li> */}

						{/*  Nav item  */}
						<li className={pathname === '/student/teachers' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/teachers" className="nav-link">
								<i className="fe fe-user nav-icon"></i>
								<span className={pathname === '/student/teachers' ? 'tajawal-bold' : ''}>
									الأساتذة
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/competitions' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/competitions" className="nav-link">
								<i className="fe fe-award nav-icon"></i>
								<span className={pathname === '/student/competitions' ? 'tajawal-bold' : ''}>
									المسابقات
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/lives' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/lives" className="nav-link">
								<i className="fe fe-video nav-icon"></i>
								<span className={pathname === '/student/lives' ? 'tajawal-bold' : ''}>
									على المباشر 
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						{/* <li className={pathname === '/student/schedual-lives' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/schedual-lives" className="nav-link">
								<i className="fe fe-calendar nav-icon"></i>
								<span className={pathname === '/student/schedual-lives' ? 'tajawal-bold' : ''}>
									البثوث المبرمجة
								</span>
							</Link>
						</li> */}

						{/*  Nav item  */}
						<li className={pathname === '/student/payments' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/payments" className="nav-link">
								<i className="fe fe-dollar-sign nav-icon"></i>
								<span className={pathname === '/student/payments' ? 'tajawal-bold' : ''}>
									الدفوعات
								</span>
							</Link>
						</li>


					</ul>

					<span className="navbar-header">إعدادات الحساب</span>
					<ul className="list-unstyled ms-n2 mb-0">


						{/*  Nav item  */}
						<li className={pathname === '/student/profile-edit' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/profile-edit" className="nav-link">
								<i className="fe fe-settings nav-icon"></i>
								<span className={pathname === '/student/profile-edit' ? 'tajawal-bold' : ''}>
									تعديل الملف الشخصي
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/security' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/security" className="nav-link">
								<i className="fe fe-shield nav-icon"></i>
								<span className={pathname === '/student/security' ? 'tajawal-bold' : ''}>
									الحماية
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/social-profile' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/social-profile" className="nav-link">
								<i className="fe fe-refresh-cw nav-icon"></i>
								<span className={pathname === '/student/social-profile' ? 'tajawal-bold' : ''}>
									الصفحات الاجتماعية
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/notifications' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/notifications" className="nav-link">
								<i className="fe fe-bell nav-icon"></i>
								<span className={pathname === '/student/notifications' ? 'tajawal-bold' : ''}>
									إشعارات
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/student/linked-accounts' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/student/linked-accounts" className="nav-link">
								<i className="fe fe-link nav-icon"></i>
								<span className={pathname === '/student/linked-accounts' ? 'tajawal-bold' : ''}>
									الحسابات المتصلة
								</span>
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" href="../index.html">
								<i className="fe fe-power nav-icon"></i>
								تسجيل الخروج
							</Link>
						</li>
					</ul>
				</div>
			</div>




		</nav>
	)
}

export default Navbar