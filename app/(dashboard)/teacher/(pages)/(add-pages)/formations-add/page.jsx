'use client'

import { useEffect, useRef, useState } from 'react';
//import { CKEditor } from '@ckeditor/ckeditor5-react';
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { toast } from 'react-toastify'; // Import toast from react-toastify
const token = '2|cXHOtrdXzv72FdEtXSS292Ju9wcaxGWEY3wpSlGBc1d19d43'; // Replace with your actual token



const AddCoursePopup = ({ show, handleClose }) => {
  const [courseData, setCourseData] = useState({
    title: '',
    description: '',
    instructor: '',
    category: '',
    price: '',
    startDate: '',
    endDate: '',
    image: null,
    documents: [],
    videos: [],
    videoLink: '',
    resources: '',
    visibility: true,
    maxStudents: '',
    language: '',
    difficulty: '',
    prerequisites: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setCourseData((prevData) => ({
        ...prevData,
        [name]: files,
      }));
    } else {
      setCourseData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the courseData to the API
    console.log(courseData);
  };
  const [editorData, setEditorData] = useState('');

  return (
		<>
		{show && (
							<div className="fade modal-backdrop show"></div>
						)}
				 <div className={`modal ${show ? 'show' : ''}`} style={{ display: show ? 'block' : 'none' }}>
      <div className="modal-dialog" style={{ maxWidth: '70%', marginTop: "5%" }}>
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title tajawal-bold">إضافة دورة</h5>
            <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-lg-4">
                  <label className="form-label">عنوان الدورة</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    value={courseData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">اسم المحاضر</label>
                  <input
                    type="text"
                    className="form-control"
                    name="instructor"
                    value={courseData.instructor}
                    onChange={handleChange}
                    required
                  />
                </div>
								<div className="mb-3 col-lg-4">
                  <label className="form-label">الفئة</label>
                  <select className="form-select" name="category" value={courseData.category} onChange={handleChange} required>
                    <option value="">اختر الفئة</option>
                    <option value="Math">الرياضيات</option>
                    <option value="Science">العلوم</option>
                    <option value="Literature">الأدب</option>
                  </select>
                </div>
                <div className="mb-3 col-lg-12">
                  <label className="form-label">وصف الدورة</label>
                  {/* <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        config={{
          ckfinder: {
            uploadUrl: '/upload' // URL where the images will be uploaded
          },
          simpleUpload: {
            uploadUrl: 'https://your-server.com/upload', // URL for your image upload endpoint
            headers: {
              'X-CSRF-TOKEN': 'CSFR-Token',
              Authorization: 'Bearer <JSON Web Token>'
            }
          }
        }}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setEditorData(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      /> */}
                </div>
                
                <div className="mb-3 col-lg-4">
                  <label className="form-label">السعر</label>
                  <input
                    type="number"
                    className="form-control"
                    name="price"
                    value={courseData.price}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">تاريخ البدء</label>
                  <input
                    type="date"
                    className="form-control"
                    name="startDate"
                    value={courseData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">تاريخ الانتهاء</label>
                  <input
                    type="date"
                    className="form-control"
                    name="endDate"
                    value={courseData.endDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">تحميل صورة</label>
                  <input
                    type="file"
                    className="form-control"
                    name="image"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">تحميل المستندات</label>
                  <input
                    type="file"
                    className="form-control"
                    name="documents"
                    multiple
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">تحميل الفيديوهات</label>
                  <input
                    type="file"
                    className="form-control"
                    name="videos"
                    multiple
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">رابط الفيديو (يوتيوب/فيميو)</label>
                  <input
                    type="text"
                    className="form-control"
                    name="videoLink"
                    value={courseData.videoLink}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3 col-lg-4">
                  <label className="form-label">الحد الأقصى للطلاب</label>
                  <input
                    type="number"
                    className="form-control"
                    name="maxStudents"
                    value={courseData.maxStudents}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3 col-lg-4">
                  <label className="form-label">لغة الدورة</label>
                  <select className="form-select" name="language" value={courseData.language} onChange={handleChange} required>
                    <option value="">اختر اللغة</option>
                    <option value="Arabic">العربية</option>
                    <option value="English">الإنجليزية</option>
                  </select>
                </div>
								<div className="mb-3 col-lg-6">
                  <label className="form-label">الموارد الإضافية</label>
                  <textarea
                    className="form-control"
                    name="resources"
                    value={courseData.resources}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3 col-lg-6">
                  <label className="form-label">المتطلبات الأساسية</label>
                  <textarea
                    className="form-control"
                    name="prerequisites"
                    value={courseData.prerequisites}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleClose}>إغلاق</button>
                <button type="submit" className="btn btn-primary">إضافة دورة</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>		
		</>
   
  );
};	

export default AddCoursePopup