
"use client"
//import DarkModeToggle from '@/components/DarkModeToggle'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import SimpleBar from 'simplebar-react'
//import { logout } from "@/actions/logout";

function Navbar() {
	const pathname = usePathname()
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	/* const signout = () => {
    logout();
  }; */

	return (
		<nav className="navbar navbar-expand-md shadow-sm mb-4 mb-lg-0 sidenav">
			{/*  Menu  */}
			<a className="d-xl-none d-lg-none d-md-none text-inherit tajawal-bold" href="#">Menu</a>
			{/*  Button  */}
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
			{/*  *Collapse  */}
			<div className="collapse navbar-collapse" id="sidenav">
				<div className="navbar-nav flex-column">
					<span className="navbar-header">لوحة التحكم</span>
					<ul className="list-unstyled ms-n2 mb-4">

						{/*  Nav item  */}
						<li className={pathname === '/teacher' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher" className="nav-link">
								<i className="fe fe-home nav-icon"></i>
								<span className={pathname === '/teacher' ? 'tajawal-bold' : ''}>
									لوحتي الخاصة
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/formations' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/formations" className="nav-link">
								<i className="fe fe-layers nav-icon"></i>
								<span className={pathname === '/teacher/formations' ? 'tajawal-bold' : ''}>
									الدورات
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/courses' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/courses" className="nav-link">
								<i className="fe fe-book nav-icon"></i>
								<span className={pathname === '/teacher/courses' ? 'tajawal-bold' : ''}>
									الدروس
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/students' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/students" className="nav-link">
								<i className="fe fe-users nav-icon"></i>
								<span className={pathname === '/teacher/students' ? 'tajawal-bold' : ''}>
									الطلاب
								</span>
							</Link>
						</li>


						{/*  Nav item  */}
						<li className={pathname === '/teacher/questions' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/questions" className="nav-link">
								<i className="fe fe-help-circle nav-icon"></i>
								<span className={pathname === '/teacher/questions' ? 'tajawal-bold' : ''}>
									الأسئلة
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/exercices' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/exercices" className="nav-link">
								<i className="fe fe-edit nav-icon"></i>
								<span className={pathname === '/teacher/exercices' ? 'tajawal-bold' : ''}>
									التمارين
								</span>
							</Link>
						</li>

{/* Nav item */}
<li className={pathname === '/teacher/competitions' ? 'nav-item tajawal-bold active' : 'nav-item'}>
    <Link href="/teacher/competitions" className="nav-link">
        <i className="fe fe-award nav-icon"></i> {/* Icon for Competitions */}
        <span className={pathname === '/teacher/competitions' ? 'tajawal-bold' : ''}>
            المسابقات
        </span>
    </Link>
</li>

{/* Nav item */}
<li className={pathname === '/teacher/quiz' ? 'nav-item tajawal-bold active' : 'nav-item'}>
    <Link href="/teacher/quiz" className="nav-link">
        <i className="fe fe-edit nav-icon"></i> {/* Icon for Quizzes */}
        <span className={pathname === '/teacher/quiz' ? 'tajawal-bold' : ''}>
            الإختبارات
        </span>
    </Link>
</li>


						{/*  Nav item  */}
						<li className={pathname === '/teacher/competitions-result' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/competitions-result" className="nav-link">
								<i className="fe fe-clipboard nav-icon"></i>
								<span className={pathname === '/teacher/competitions-result' ? 'tajawal-bold' : ''}>
									نتيجة المسابقة
								</span>
							</Link>
						</li>


						{/*  Nav item  */}
						<li className={pathname === '/teacher/payments' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/payments" className="nav-link">
								<i className="fe fe-dollar-sign nav-icon"></i>
								<span className={pathname === '/teacher/payments' ? 'tajawal-bold' : ''}>
									الدفوعات
								</span>
							</Link>
						</li>

					</ul>
					{/*  Navbar header  */}
					<span className="navbar-header">إعدادات الحساب</span>
					<ul className="list-unstyled ms-n2 mb-0">


						{/*  Nav item  */}
						<li className={pathname === '/teacher/profile-edit' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/profile-edit" className="nav-link">
								<i className="fe fe-settings nav-icon"></i>
								<span className={pathname === '/teacher/profile-edit' ? 'tajawal-bold' : ''}>
									تعديل الملف الشخصي
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/security' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/security" className="nav-link">
								<i className="fe fe-shield nav-icon"></i>
								<span className={pathname === '/teacher/security' ? 'tajawal-bold' : ''}>
									الحماية
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/social-profile' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/social-profile" className="nav-link">
								<i className="fe fe-refresh-cw nav-icon"></i>
								<span className={pathname === '/teacher/social-profile' ? 'tajawal-bold' : ''}>
									الصفحات الاجتماعية
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/notifications' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/notifications" className="nav-link">
								<i className="fe fe-bell nav-icon"></i>
								<span className={pathname === '/teacher/notifications' ? 'tajawal-bold' : ''}>
									إشعارات
								</span>
							</Link>
						</li>

						{/*  Nav item  */}
						<li className={pathname === '/teacher/linked-accounts' ? 'nav-item tajawal-bold active' : 'nav-item'}>
							<Link href="/teacher/linked-accounts" className="nav-link">
								<i className="fe fe-link nav-icon"></i>
								<span className={pathname === '/teacher/linked-accounts' ? 'tajawal-bold' : ''}>
									الحسابات المتصلة
								</span>
							</Link>
						</li>

						<li className="nav-item">
							<Link className="nav-link" href='#' onClick={handleShow}>
								<i className="fe fe-power nav-icon"></i>
								تسجيل الخروج
							</Link>
						</li>
					</ul>
				</div>
			</div>

			{/* Model Popup */}
      {show && <div className="fade modal-backdrop show"></div>}
      <div
        role="dialog"
        aria-modal="true"
        className={`fade modal ${show ? "show" : ""}`}
        tabIndex="-1"
        style={{ paddingRight: "17px", display: show ? "block" : "none", marginTop: "18%" }}
      >
        <div className="modal-dialog">
          <div className="modal-content text-start">
            <div className="modal-header">
              <div className="modal-title tajawal-bold">تسجيل الخروج</div>
              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={handleClose}
              ></button>
            </div>
            <div className="modal-body">
              <form className="">
                <div className="row">
                  <div className="col-12">
										<h2 className='tajawal-bold'>هل تريد تسجيل الخروج ؟</h2>
									</div>
                </div>
              </form>
            </div>
            <div className="modal-footer" dir='ltr'>
              <button
                type="button"
                className="btn btn-secondary w-20"
                onClick={handleClose}
              >
                إغلاق
              </button>
              <button
                type="button"
                className="btn btn-danger w-20"
                /* onClick={signout} */
              >
                تأكيد
              </button>
            </div>
          </div>
        </div>
      </div>


		</nav>
	)
}

export default Navbar