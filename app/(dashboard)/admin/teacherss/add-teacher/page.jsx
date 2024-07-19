"use client"

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactQuill from 'react-quill'; // Import react-quill
import 'react-quill/dist/quill.snow.css'; // Add styles for react-quill

const Page = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: '0', // Default to '0' as a string
    slug: ''
  });
  const [users, setUsers] = useState([]);

  // Fetch users when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setUsers(response.data.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is user_id or hourly_rate, parse it as a number
    if (name === 'user_id') {
      setFormData({ ...formData, [name]: parseFloat(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleIncrement = () => {
    setFormData((prevData) => ({
      ...prevData,
      hourly_rate: String(parseFloat(prevData.hourly_rate) + 1)
    }));
  };

  const handleDecrement = () => {
    const rate = parseFloat(formData.hourly_rate);
    if (rate > 0) {
      setFormData((prevData) => ({
        ...prevData,
        hourly_rate: String(rate - 1)
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post('/teachers', formData);
      console.log('Teacher added successfully:', response.data);
      toast.success('تمت الإضافة بنجاح!', { position: "bottom-right" });
    } catch (error) {
      console.error('Error adding teacher:', error);
      console.error('Response data:', error.response.data);
      toast.error('حدث خطأ أثناء الإضافة. الرجاء المحاولة مرة أخرى.', { position: "bottom-right" });
    }
  };

  return (
    <section className="container-fluid p-4">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-12">
          <div className="border-bottom pb-3 mb-3 d-md-flex align-items-center justify-content-between">
            <div className="mb-3 mb-md-0">
              <h1 className="mb-1 tajawal-bold">إضافة أستاذ جديد</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link href="/admin">لوحة التحكم</Link>
                  </li>
                  <li className="breadcrumb-item"><a href="#">CMS</a></li>
                  <li className="breadcrumb-item active" aria-current="page">إضافة أستاذ جديد</li>
                </ol>
              </nav>
            </div>
            <div>
              <Link href="/admin/teachers" className="btn btn-outline-secondary">العودة إلى كافة الأساتذة</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-xl-9 col-lg-8 col-md-12 col-12 offset-xl-1 offset-lg-2">
          <div className="card border-0 mb-4">
            <div className="card-header">
              <h4 className="mb-0 tajawal-bold">تسجيل الأستاذ</h4>
            </div>
            <form className="needs-validation" onSubmit={handleSubmit}>
              <div className="card-body">
                <div className="mb-3 col-md-9 position-relative">
                  <label htmlFor="user_id" className="form-label">المستخدم</label>
                  <div className="position-relative">
                    <select
                      id="user_id"
                      name="user_id"
                      className="form-select text-dark"
                      value={formData.user_id}
                      onChange={handleChange}
                      required
                    >
                      <option value="">اختر مستخدم</option>
                      {users.map((user) => (
                        <option key={user.id} value={user.id}>
                          {user.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-3 col-md-9">
                  <label htmlFor="first_name" className="form-label">الإسم الأول</label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    className="form-control text-dark"
                    placeholder="الإسم الأول"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-md-9">
                  <label htmlFor="last_name" className="form-label">الإسم الأخير</label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    className="form-control text-dark"
                    placeholder="الإسم الأخير"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3 col-md-9">
                  <label htmlFor="bio" className="form-label">السيرة الذاتية</label>
                  <ReactQuill
                  direction="rtl"
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    placeholder='المرجو كتابة الوصف ...'
                    onChange={(value) => setFormData({ ...formData, bio: value })}
                    modules={{
                      toolbar: [
                        [{ 'header': '1'}, {'header': '2'}],
                        [{ 'align': ['right', 'center'] }],
                        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                        [{ 'list': 'ordered'}, { 'list': 'bullet' }], 
                      ],
                    }}  
                    formats={[
                      'header', 'font', 'align', 'bold', 'italic', 'underline', 'strike', 'blockquote',
                      'list', 'bullet', 'link', 'image', 'video'
                    ]}
                    theme="snow"
                  />
                </div>

                <div className="mb-3 col-md-9">
                  <label htmlFor="hourly_rate" className="form-label">معدل الأجر بالساعة</label>
                  <div className="input-group">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleDecrement}
                      style={{ borderTopRightRadius: '0.25rem', borderBottomRightRadius: '0.25rem' }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      step="0.1" // Allow decimal steps
                      id="hourly_rate"
                      name="hourly_rate"
                      className="form-control text-dark text-center"
                      value={formData.hourly_rate}
                      onChange={handleChange}
                      required
                      min="0"
                    />
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={handleIncrement}
                      style={{ borderTopLeftRadius: '0.25rem', borderBottomLeftRadius: '0.25rem' }}
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="mb-3 col-md-9">
                  <label htmlFor="slug" className="form-label">السمة</label>
                  <input
                    type="text"
                    id="slug"
                    name="slug"
                    className="form-control text-dark"
                    placeholder="السمة"
                    value={formData.slug}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="m-1 btn btn-primary w-10">إضافة</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;



