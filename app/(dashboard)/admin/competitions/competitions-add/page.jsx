"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const AddCompetitionPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date_start: '',
    date_end: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual JWT token or authentication header
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/competitions`, formData, config);
      console.log('Competition added successfully:', response.data);
      
      // If successful, show success toast
      toast.success('تم إضافة المسابقة بنجاح!', {
        position: "bottom-right"
      });
    } catch (error) {
      console.error('Error adding competition:', error);
      
      // If there's an error, show error toast
      toast.error('حدث خطأ أثناء إضافة المسابقة. الرجاء المحاولة مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  return (
    <section className="container-fluid p-4">
      <div className="row">
        {/*  Page header  */}
        <div className="col-lg-12 col-md-12 col-12">
          <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 tajawal-bold">إضافة مسابقة جديدة</h1>
              {/*  Breadcrumb  */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/admin">لوحة التحكم</Link>
                  </li>
                  <li className="breadcrumb-item"><a href="#">CMS</a></li>
                  <li className="breadcrumb-item active" aria-current="page">إضافة مسابقة جديدة</li>
                </ol>
              </nav>
            </div>
            <div>
              <Link href="/admin/competitions" className="btn btn-outline-secondary">العودة إلى كافة المسابقات</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-12 col-12 offset-xl-1 offset-lg-2">
          <div className="card border-0 mb-4">
            <div className="card-header">
              <h4 className="mb-0 tajawal-bold">تسجيل المسابقة</h4>
            </div>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="mb-3 col-md-9">
                  <label htmlFor="name" className="form-label">الإسم</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control text-dark"
                    placeholder="الإسم"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-md-9">
                  <label htmlFor="description" className="form-label">الوصف</label>
                  <textarea
                    rows="3"
                    id="description"
                    name="description"
                    className="form-control text-dark"
                    placeholder="الوصف"
                    value={formData.description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor="date_start" className="form-label">تاريخ البداية</label>
                  <input
                    type="date"
                    id="date_start"
                    name="date_start"
                    className="form-control text-dark"
                    value={formData.date_start}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-md-4">
                  <label htmlFor="date_end" className="form-label">تاريخ النهاية</label>
                  <input
                    type="date"
                    id="date_end"
                    name="date_end"
                    className="form-control text-dark"
                    value={formData.date_end}
                    onChange={handleChange}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary w-20">إضافة</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddCompetitionPage;
