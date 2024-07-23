import React from 'react';
import { Modal, Form, Input, DatePicker, Button, Select } from 'antd';
import moment from 'moment';

const { Option } = Select;

const EditModal = ({ visible, student, classes = [], onClose }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (student) {
      form.setFieldsValue({
        first_name: student.first_name,
        last_name: student.last_name,
        email: student.user.email,
        date_birth: student.user.date_birth ? moment(student.user.date_birth) : null,
        phone: student.user.phone,
        address: student.user.address,
        city: student.user.city,
        classe_name: student.classe ? student.classe.name : undefined,
        description: student.classe ? student.classe.description : '',
      });
    }
  }, [student, form]);

  const handleSave = () => {
    form.validateFields()
      .then(values => {
        console.log('Form Values:', values);
        onClose();
      });
  };

  return (
    <Modal
      title="تعديل الطالب"
      visible={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>إلغاء</Button>,
        <Button key="save" type="primary" onClick={handleSave}>حفظ</Button>
      ]}
      style={{ direction: 'rtl' }} 
      width={900} 
    >
      <Form form={form} layout="vertical">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="first_name" 
              label="الاسم الأول" 
              rules={[{ required: true, message: 'الرجاء إدخال الاسم الأول' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="last_name" 
              label="الاسم الأخير" 
              rules={[{ required: true, message: 'الرجاء إدخال الاسم الأخير' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="email" 
              label="البريد الإلكتروني" 
              rules={[{ required: true, type: 'email', message: 'الرجاء إدخال بريد إلكتروني صحيح' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="date_birth" 
              label="تاريخ الميلاد" 
              rules={[{ required: true, message: 'الرجاء إدخال تاريخ الميلاد' }]}
            >
              <DatePicker style={{ width: '100%' }} />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="phone" 
              label="الهاتف" 
              rules={[{ required: true, message: 'الرجاء إدخال الهاتف' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="address" 
              label="العنوان" 
              rules={[{ required: true, message: 'الرجاء إدخال العنوان' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 calc(50% - 20px)', boxSizing: 'border-box' }}>
            <Form.Item 
              name="city" 
              label="المدينة" 
              rules={[{ required: true, message: 'الرجاء إدخال المدينة' }]}
            >
              <Input />
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 100%', boxSizing: 'border-box' }}>
            <Form.Item 
              name="classe_name" 
              label="الصف" 
              rules={[{ required: true, message: 'الرجاء اختيار الصف' }]}
            >
              <Select placeholder="اختيار الصف">
                {Array.isArray(classes) && classes.length > 0 ? (
                  classes.map(cl => (
                    <Option key={cl.name} value={cl.name}>
                      {cl.name}
                    </Option>
                  ))
                ) : (
                  <Option key="no-options" disabled>لا توجد صفوف</Option>
                )}
              </Select>
            </Form.Item>
          </div>
          <div style={{ flex: '1 1 100%', boxSizing: 'border-box' }}>
            <Form.Item 
              name="description" 
              label="الوصف" 
              rules={[{ required: true, message: 'الرجاء إدخال الوصف' }]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </div>
        </div>
      </Form>
    </Modal>
  );
};

export default EditModal;
