"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button, Select, Typography, Row, Col, Divider, InputNumber } from 'antd';
import { useRouter } from 'next/navigation'; // Use router for navigation
import styles from './AddStudentPage.module.css'; // Import the CSS module

const { Title } = Typography;
const { Option } = Select;

const AddStudentPage = () => {
  const [formData, setFormData] = useState({
    user_id: '',
    classe_id: '',
    first_name: '',
    last_name: '',
  });

  const [users, setUsers] = useState([]);
  const [classes, setClasses] = useState([]);
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    // Fetch users and classes when the component mounts
    const fetchData = async () => {
      try {
        const [userResponse, classResponse] = await Promise.all([
          axiosInstance.get('/users'),
          axiosInstance.get('/classes') // Adjust endpoint if necessary
        ]);
        setUsers(userResponse.data.data); // Adjust based on the actual response structure
        setClasses(classResponse.data.data); // Adjust based on the actual response structure
      } catch (error) {
        toast.error('فشل في تحميل قائمة المستخدمين أو الأقسام. حاول مرة أخرى.', {
          position: "bottom-right"
        });
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axiosInstance.post('/students', formData);
      console.log('Student added successfully:', response.data);

      toast.success('تم إضافة الطالب بنجاح!', {
        position: "bottom-right"
      });
      router.push('/admin/students'); // Navigate to the students list page
    } catch (error) {
      console.error('Error adding student:', error.response ? error.response.data : error.message);

      toast.error('حدث خطأ أثناء إضافة الطالب. الرجاء المحاولة مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  return (
    <section className="container-fluid p-4">
      <Row gutter={24}>
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row-reverse" }}>
          <Button type="default" onClick={() => router.push('/admin/students')} className={styles.returnButton}>
            الرجوع إلى الطلاب
          </Button>
          <Title level={3} className="tajawal-bold" style={{ textAlign: 'right' }}>
            إضافة طالب جديد
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
          label="اختيار القسم"
          name="classe_id"
          rules={[{ required: true, message: 'يرجى اختيار القسم!' }]}
        >
          <Select
            placeholder="اختر القسم"
            onChange={(value) => setFormData({ ...formData, classe_id: value })}
            allowClear
          >
            {classes.map(classe => (
              <Option key={classe.id} value={classe.id}>
                {classe.name}
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

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-100">
            إضافة
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
};

export default AddStudentPage;
