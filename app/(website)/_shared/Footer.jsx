"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

function Footer() {

  return (
    <footer className="pt-lg-8 pt-5 footer bg-white" dir="rtl">
      <div className="container mt-lg-2">
        <div className="row">
          <div className="offset-lg-1 col-lg-4 col-md-6 col-12">
            <div className="mb-4">
              <Image
                src="/assets/images/lgg.png"
                width={40}
                height={40}
                className="logo-inverse"
                alt=""
              />

              <div className="mt-4">
                <p>
                  منصة تساعدك على النجاح و التميز وتسهل عليك الوصول إلى محتوى
                  مستواك الدراسي من دروس ، تطبيقات، ملخصات، امتحانات وفروض من
                  خلال ملفات و قنوات يوتيوب لعدة أساتذة
                </p>
                <div
                  className="fs-4 mt-4"
                  style={{
                    display: "flex",
                  }}
                >
                  {/* Facebook */}
                  <div
                    id="footer-links"
                    className="cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border rounded-md"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      padding: ".2rem",
                      marginLeft: ".5rem",
                      borderColor: "#b3b3b344"
                    }}
                  >
                    <a
                      href="https://www.facebook.com/clicschoolsba/?locale=ar_AR"
                      target="_blank"
                    >
                      <FaFacebookF className="align-middle" />
                    </a>
                  </div>

                  {/* Instagram */}
                  <div
                    id="footer-links"
                    className="cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border rounded-md"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      padding: ".2rem",
                      marginLeft: ".5rem",
                      borderColor: "#b3b3b344"
                    }}
                  >
                    <a
                      href="https://www.instagram.com/clic.school.sba/"
                      target="_blank"
                    >
                      <FaInstagram className="align-middle" />
                    </a>
                  </div>

                  {/* Telegram */}
                  <div
                    id="footer-links"
                    className="cursor-pointer inline-flex items-center justify-center tracking-wide align-middle duration-500 text-base text-center border rounded-md"
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      padding: ".2rem",
                      marginLeft: ".5rem",
                      borderColor: "#b3b3b344"
                    }}
                  >
                    <a
                      href="https://t.me/clic_school_sba"
                      target="_blank"
                    >
                      <FaTelegramPlane className="align-middle" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <div className="mb-4">
              <h3 className="tajawal-bold mb-3">الصفحات</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                <li>
                  <Link href="/home" className="nav-link">
                    الرئيسية
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="nav-link">
                    من نحن
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="nav-link">
                    اتصل بنا
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-6">
            <div className="mb-4">
              <h3 className="tajawal-bold mb-3">روابط مفيدة</h3>
              <ul className="list-unstyled nav nav-footer flex-column nav-x-0">
                <li>
                  <Link href="/auth/login" className="nav-link">
                    تسجيل الدخول
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="nav-link">
                    اشتراك
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-12">
            <div className="mb-4">
              <h3 className="tajawal-bold mb-3">تواصل معنا</h3>
              <p>
                12 شارع باقي محمد، سيدي الجيلالي / سيدي بلعباس (خلف ثانوية حسيني
                حسين ومسجد معاذ بن جبل), Sidi Bel Abbès, Algeria
              </p>
              <p className="mb-1" dir="rtl">
                البريد اللإلكتروني:
                <span className="text-dark tajawal-bold mx-1">
                  clicschoolsba@gmail.com
                </span>
              </p>
              <p dir="rtl">
                الهاتف:
                <span className="text-dark tajawal-bold mx-1" dir="ltr">
                  +213 541 60 24 59
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-center g-0 border-top py-2 mt-6">
          <div className="col-md-10 col-12">
            <div className="d-lg-flex align-items-center">
              <div className="me-4">
                <span>
                © 2024 Click School . كل الحقوق محفوظة
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
