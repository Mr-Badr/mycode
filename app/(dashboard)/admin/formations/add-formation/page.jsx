"use client"
import Link from 'next/link'
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Import toast from react-toastify
import 'react-toastify/dist/ReactToastify.css';

const AddFormationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    formation_type_id: 15, // Replace with the appropriate formation_type_id
    description: '',
    status: 'active' // Assuming a default status
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = '1|SGXLsW9HyacjrgSkCTtwjBUPKrjkJeQQUsDNzFzs46923d0a'; // Replace with your actual JWT token or authentication header
      const config = {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      };

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/formations`, formData, config);
      console.log('Formation added successfully:', response.data);
      
      // If successful, show success toast
      toast.success('تم إضافة الدورة بنجاح!', {
        position: "bottom-right"
      });
    } catch (error) {
      console.error('Error adding formation:', error);
      
      // If there's an error, show error toast
      toast.error('حدث خطأ أثناء إضافة الدورة. الرجاء المحاولة مرة أخرى.', {
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
              <h1 className="mb-1 tajawal-bold">إضافة دورة جديدة</h1>
              {/*  Breadcrumb  */}
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/admin">لوحة التحكم</Link>
                  </li>
                  <li className="breadcrumb-item"><a href="#">CMS</a></li>
                  <li className="breadcrumb-item active" aria-current="page">إضافة دورة جديدة</li>
                </ol>
              </nav>
            </div>
            <div>
              <Link href="/admin/formations" className="btn btn-outline-secondary">العودة إلى كافة الدورات</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-12 col-12 offset-xl-1 offset-lg-2">
          <div className="card border-0 mb-4">
            <div className="card-header">
              <h4 className="mb-0 tajawal-bold">تسجيل الدورة</h4>
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

                <button type="submit" className="btn btn-primary w-20">إضافة</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddFormationPage;
