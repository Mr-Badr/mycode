import React from 'react';
import { Table, Avatar, Button, Dropdown, Menu, Modal } from 'antd';
import { DownOutlined, EyeOutlined } from '@ant-design/icons';

const StudentTable = ({ students, onEdit, onDelete }) => {
  const [selectedStudent, setSelectedStudent] = React.useState(null);
  const [selectedClass, setSelectedClass] = React.useState(null);

  const handleViewDetails = (student) => {
    setSelectedStudent(student);
  };

  const handleViewClassDetails = (classe) => {
    console.log('Selected Class:', classe); // Add this line to log the selected class
    setSelectedClass(classe);
  };
  

  const handleModalClose = () => {
    setSelectedStudent(null);
    setSelectedClass(null);
  };

  const columns = [
    {
      title: 'الإسم الكامل',
      dataIndex: 'fullName',
      key: 'fullName',
      render: (text, student) => (
        <div className="d-flex align-items-center">
          <Avatar src={student.user.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${student.user.image.replace('public/', '')}` : "/path/to/default/avatar.jpg"} className="me-2" />
          <span>{`${student.first_name} ${student.last_name}`}</span>
        </div>
      ),
    },
    {
      title: 'الفصل',
      dataIndex: 'classe',
      key: 'classe',
      render: (text, student) => (
        <span
          style={{ color: '#1890ff', cursor: 'pointer' }}
          onClick={() => handleViewClassDetails(student.classe)}
        >
          {student.classe.name}
        </span>
      ),
    },
    {
      title: 'المدينة',
      dataIndex: 'city',
      key: 'city',
      render: (text, student) => student.user.city,
    },
    {
      title: 'البريد الإلكتروني',
      dataIndex: 'email',
      key: 'email',
      render: (text, student) => student.user.email,
    },
    {
      title: 'الهاتف',
      dataIndex: 'phone',
      key: 'phone',
      render: (text, student) => student.user.phone,
    },
    {
      title: 'الجنس',
      dataIndex: 'gender',
      key: 'gender',
      render: (text, student) => student.user.sexe,
    },
    {
      title: 'الإجراءات',
      key: 'action',
      render: (text, student) => (
        <div style={{ display: 'flex', justifyContent: 'right', gap: '7px', alignItems: 'center' }}>
        <Button
          icon={<EyeOutlined />}
          onClick={() => handleViewDetails(student)}
        />
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item onClick={() => onEdit(student)}>
                تعديل
              </Menu.Item>
              <Menu.Item onClick={() => onDelete(student.id)}>
                حذف
              </Menu.Item>
            </Menu>
          }
        >
          <Button>
          <DownOutlined />
          </Button>
        </Dropdown>
      </div>
      ),
    },
  ];

  const imageUrl = selectedClass && selectedClass.image 
  ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${selectedClass.image.replace('public/', '')}` 
  : "/path/to/default/image.jpg";
  

  return (
    <>
      <Table columns={columns} dataSource={students} rowKey="id" />

      {/* Modal for viewing student details */}
      {selectedStudent && (
      <Modal
        visible={true}
        title={<div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>تفاصيل الطالب: {selectedStudent.first_name} {selectedStudent.last_name}</div>}
        onCancel={handleModalClose}
        footer={null}
        width={800}
        style={{ direction: 'rtl' }}
      >
        <div style={{ padding: '20px' }}>
          <div style={{ marginBottom: '20px' }}>
            <p><strong>الإسم الكامل:</strong> {`${selectedStudent.first_name} ${selectedStudent.last_name}`}</p>
            <p><strong>البريد الإلكتروني:</strong> {selectedStudent.user.email}</p>
            <p><strong>تاريخ الميلاد:</strong> {new Date(selectedStudent.user.date_birth).toLocaleDateString()}</p>
            <p><strong>الهاتف:</strong> {selectedStudent.user.phone}</p>
            <p><strong>العنوان:</strong> {selectedStudent.user.address}</p>
            <p><strong>المدينة:</strong> {selectedStudent.user.city}</p>
            <p><strong>الصف:</strong> {selectedStudent.classe.name}</p>
            <p><strong>الوصف:</strong> {selectedStudent.classe.description}</p>
          </div>
        </div>
      </Modal>
    )}
  

      {/* Modal for viewing class details */}
      {selectedClass && (
      <Modal
      visible={true}
      title={<div style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>تفاصيل الصف: {selectedClass.name}</div>}
      onCancel={handleModalClose}
      footer={null}
      width={800}
      style={{ direction: 'rtl' }}
    >
      <div style={{ display: 'flex', padding: '20px', alignItems: 'center' }}>
        <div style={{ flex: 1, paddingRight: '20px' }}>
          <p style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
            <strong>اسم الصف:</strong> {selectedClass.name}
          </p>
          <p style={{ fontSize: '16px', color: '#555' }}>
            <strong>الوصف:</strong> {selectedClass.description}
          </p>
        </div>
        <img 
          src={imageUrl} 
          alt={selectedClass.name} 
          style={{ width: '200px', height: 'auto', borderRadius: '8px', border: '1px solid #ddd' }}
        />
      </div>
    </Modal>
    )}
    </>
  );
};

export default StudentTable;
