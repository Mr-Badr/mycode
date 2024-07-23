"use client"
import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../../services/axiosInstance'; // Adjust path as per your project structure
import { toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';
import { Form, Input, Button, Select, Upload, Typography, Row, Col, Divider } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useRouter } from 'next/navigation'; // Use router for navigation
import styles from './AddFormationPage.module.css'; // Import the CSS module

const { Title } = Typography;

const AddFormationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    formation_type_id: null,
    description: '',
    status: 'active',
  });

  const [imageFile, setImageFile] = useState(null);
  const [formationTypes, setFormationTypes] = useState([]);
  const router = useRouter(); // Initialize router for navigation

  useEffect(() => {
    const fetchFormationTypes = async () => {
      try {
        const response = await axiosInstance.get('/formation-types');
        setFormationTypes(response.data.data);
      } catch (error) {
        console.error('Error fetching formation types:', error);
        toast.error('حدث خطأ أثناء تحميل أنواع الدورات.', {
          position: "bottom-right"
        });
      }
    };

    fetchFormationTypes();
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
    formDataToSend.append('name', formData.name);
    formDataToSend.append('formation_type_id', formData.formation_type_id);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('status', formData.status);
    if (imageFile) {
      formDataToSend.append('image', imageFile); // Append the image file
    }

    try {
      const response = await axiosInstance.post('/formations', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Ensure the content type is set
        },
      });

      console.log('Formation added successfully:', response.data);

      toast.success('تم إضافة الدورة بنجاح!', {
        position: "bottom-right"
      });
    } catch (error) {
      console.error('Error adding formation:', error.response ? error.response.data : error.message);

      toast.error('حدث خطأ أثناء إضافة الدورة. الرجاء المحاولة مرة أخرى.', {
        position: "bottom-right"
      });
    }
  };

  return (
    <section className="container-fluid p-4">
      <Row gutter={24}>
        <Col span={24} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexDirection: "row-reverse" }}>
          <Button type="default" onClick={() => router.push('/admin/formations')} className={styles.returnButton}>
            الرجوع إلى الدورات
          </Button>
          <Title level={3} className="tajawal-bold" style={{ textAlign: 'right' }}>
            إضافة دورة جديدة
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
          label="اسم الدورة"
          name="name"
          rules={[{ required: true, message: 'يرجى إدخال اسم الدورة!' }]}
        >
          <Input 
            placeholder="الإسم" 
            name="name"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="نوع الدورة"
          name="formation_type_id"
          rules={[{ required: true, message: 'يرجى تحديد نوع الدورة!' }]}
        >
          <Select
            placeholder="اختيار نوع الدورة"
            onChange={value => setFormData({ ...formData, formation_type_id: value })}
            className={styles.selectRtl} // Apply RTL class
          >
            {formationTypes.map(type => (
              <Select.Option key={type.id} value={type.id}>
                {type.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="الوصف"
          name="description"
          rules={[{ required: true, message: 'يرجى إدخال وصف الدورة!' }]}
        >
          <Input.TextArea 
            rows={4}
            placeholder="الوصف"
            name="description"
            onChange={handleChange}
          />
        </Form.Item>

        <Form.Item
          label="صورة الدورة"
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

export default AddFormationPage;
