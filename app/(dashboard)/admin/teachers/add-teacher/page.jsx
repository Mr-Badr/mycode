"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button, Upload, Typography, Row, Col, Divider, Select, InputNumber } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'; // Use router for navigation
import styles from './AddTeacherPage.module.css'; // Import the CSS module

const { Title } = Typography;
const { Option } = Select;

const AddTeacherPage = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    first_name: '',
    last_name: '',
    bio: '',
    hourly_rate: '',
    image: null,
  });

  const [imageFile, setImageFile] = useState(null);
  const [users, setUsers] = useState([]);
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    // Fetch users when the component mounts
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get('/users');
        setUsers(response.data.data); // Adjust based on the actual response structure
      } catch (error) {
        toast.error('فشل في تحميل قائمة المستخدمين. حاول مرة أخرى.', {
          position: "bottom-right"
        });
      }
    };
    fetchUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (info) => {
    if (info.file.status === 'done') {
      setImageFile(info.file.originFileObj); // Save the file object
    } else if (info.file.status === 'error') {
      toast.error('فشل تحميل الصورة. حاول مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  const handleSubmit = async (values) => {
    const formDataToSend = new FormData();
    formDataToSend.append('user_id', formData.user_id);
    formDataToSend.append('first_name', formData.first_name);
    formDataToSend.append('last_name', formData.last_name);
    formDataToSend.append('bio', formData.bio);
    formDataToSend.append('hourly_rate', formData.hourly_rate);
    if (imageFile) {
      formDataToSend.append('image', imageFile); // Append the image file
    }

    try {
      const response = await axiosInstance.post('/teachers', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the content type is set
        },
      });

      console.log('Teacher added successfully:', response.data);

      toast.success('تم إضافة المعلم بنجاح!', {
        position: "bottom-right"
      });
      router.push('/admin/teachers'); // Navigate to the teachers list page
    } catch (error) {
      console.error('Error adding teacher:', error.response ? error.response.data : error.message);

      toast.error('حدث خطأ أثناء إضافة المعلم. الرجاء المحاولة مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  return (
    <section className="container-fluid p-4">
      <Row gutter={24}>
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row-reverse" }}>
          <Button type="default" onClick={() => router.push('/admin/teachers')} className={styles.returnButton}>
            الرجوع إلى المعلمين
          </Button>
          <Title level={3} className="tajawal-bold" style={{ textAlign: 'right' }}>
            إضافة معلم جديد
          </Title>
        </Col>
      </Row>
      <Divider />
      <Form
        layout="vertical"
        onFinish={handleSubmit}
        initialValues={formData}
        className={styles.formContainer} // Apply the CSS module class
      >
        <Form.Item
          label="اختيار المستخدم"
          name="user_id"
          rules={[{ required: true, message: 'يرجى اختيار مستخدم!' }]}
        >
          <Select
            placeholder="اختر المستخدم"
            onChange={(value) => setFormData({ ...formData, user_id: value })}
            allowClear
          >
            {users.map(user => (
              <Option key={user.id} value={user.id}>
                {user.name}
              </Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="الإسم الأول"
          name="first_name"
          rules={[{ required: true, message: 'يرجى إدخال الاسم الأول!' }]}
        >
          <Input 
            placeholder="الإسم الأول" 
            name="first_name"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="الإسم الأخير"
          name="last_name"
          rules={[{ required: true, message: 'يرجى إدخال الاسم الأخير!' }]}
        >
          <Input 
            placeholder="الإسم الأخير" 
            name="last_name"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="السيرة الذاتية"
          name="bio"
        >
          <Input.TextArea 
            rows={4}
            placeholder="السيرة الذاتية"
            name="bio"
            onChange={handleChange}
          />
        </Form.Item>

<Form.Item
  label="الأجر بالساعة"
  name="hourly_rate"
  rules={[
    { 
      required: true, 
      message: 'يرجى إدخال الأجر بالساعة!' 
    },
    { 
      type: 'number', 
      min: 0, 
      message: 'يرجى إدخال رقم صحيح أكبر من أو يساوي 0!' 
    }
  ]}
>
  <InputNumber 
    placeholder="الأجر بالساعة" 
    name="hourly_rate"
    onChange={(value) => handleChange({ target: { name: 'hourly_rate', value } })}
    min={0}
    step={0.5} // Allows decimal input
    style={{ width: '100%' }} // Adjust the width here
  />
</Form.Item>


        <Form.Item
          label="صورة المعلم"
          name="image"
        >
          <Upload
            customRequest={({ file, onSuccess, onError }) => {
              setImageFile(file); // Set the file object
              onSuccess(); // Call onSuccess for file upload
            }}
            showUploadList={false}
            accept="image/*"
            onChange={handleImageChange}
          >
            <Button icon={<UploadOutlined />}>رفع صورة</Button>
          </Upload>
          {imageFile && (
            <div className={styles.imagePreview}>
              <img 
                src={URL.createObjectURL(imageFile)} 
                alt="Preview" 
                className={styles.previewImage}
              />
            </div>
          )}
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-100">
            إضافة
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddTeacherPage;
