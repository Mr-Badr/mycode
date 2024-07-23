import React, { useState } from 'react';
import { Table, Button, Tooltip, Popconfirm } from 'antd';
import { TiPlus } from 'react-icons/ti';
import { EyeOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons'; // Import Ant Design icons
import FormationDetailsModal from './FormationDetailsModal'; // Import the new modal component

const FormationsTable = ({ filtered, searchTerm, handleSearchChange, handleShowAddFormationPopup, handleEdit, handleDelete }) => {
  const [visible, setVisible] = useState(false);
  const [selectedFormation, setSelectedFormation] = useState(null);

  const showDetails = (record) => {
    setSelectedFormation(record);
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
    setSelectedFormation(null);
  };

  const columns = [
    {
      title: 'الصورة واسم الدورة',
      key: 'image_name',
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <img 
            src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}`} 
            alt="" 
            style={{ width: '100px', height: 'auto', marginRight: '10px', borderRadius: "5px" }} 
          />
          <div>
            <h5 className="mb-0 tajawal-bold me-2">{record.name}</h5>
          </div>
        </div>
      ),
      width: '30%' // Adjust width as needed
    },
    {
      title: 'الوصف',
      key: 'description',
      render: (text, record) => (
        <div>
          {record.description.length > 100 ? (
            <div>
              <p>{record.description.substring(0, 100)}...</p>
              <Button type="link" onClick={() => showDetails(record)}>قراءة المزيد</Button>
            </div>
          ) : (
            <p>{record.description}</p>
          )}
        </div>
      ),
      width: '25%' // Adjust width as needed
    },
    {
      title: 'عدد المشتركين',
      key: 'participants',
      render: (text, record) => record.formation_participants.length,
      width: '15%' // Adjust width as needed
    },
    {
      title: 'نوع الدورة',
      dataIndex: 'formation_type',
      key: 'formation_type',
      render: (text) => text.name,
      width: '15%' // Adjust width as needed
    },
    {
      title: 'التفاصيل',
      key: 'details',
      render: (text, record) => (
        <Tooltip title="عرض التفاصيل">
          <Button 
            icon={<EyeOutlined />} 
            onClick={() => showDetails(record)} 
          />
        </Tooltip>
      ),
      width: '15%' // Adjust width as needed
    },
    {
      title: 'الإجراءات',
      key: 'actions',
      render: (text, record) => (
        <div className="d-flex">
          <Tooltip title="تعديل">
            <Button 
              icon={<EditOutlined />} 
              onClick={() => handleEdit(record.id)} 
              className="me-2" 
            />
          </Tooltip>
          <Tooltip title="حذف">
            <Popconfirm
              title="هل أنت متأكد أنك تريد حذف هذه الدورة؟"
              onConfirm={() => handleDelete(record.id)}
              okText="نعم"
              cancelText="لا"
            >
              <Button 
                icon={<DeleteOutlined />} 
                danger 
              />
            </Popconfirm>
          </Tooltip>
        </div>
      ),
      width: '15%' // Adjust width as needed
    }
  ];

  return (
    <div className="card mb-4">
      <div className='card px-4 shadow-sm rounded-top-0 rounded-bottom-0 rounded-bottom-md-2'>
        <div className="d-flex align-items-center justify-content-between">
          <div className="card-header border-bottom-0">
            <h3 className="mb-0 tajawal-bold">الدورات</h3>
            <span>نظرة عامة وسريعة على جميع الدورات الحالية.</span>
          </div>
          {/* <div className="card-header border-bottom-0 d-flex align-items-center justify-content-center">
            <Button type="primary" onClick={handleShowAddFormationPopup} icon={<TiPlus />}>
              إضافة دورة
            </Button>
          </div> */}
        </div>
      </div>
      <div className="table-responsive">
        <div className="card-body">
          <form className="row gx-3">
            <div className="col-lg-9 col-md-7 col-12 mb-lg-0 mb-2">
              <input
                type="search"
                className="form-control"
                placeholder="ابحث في الدورات الخاصة بك"
                value={searchTerm}
                onChange={handleSearchChange}
              />
            </div>
            <div className="col-lg-3 col-md-5 col-12">
              <select className="form-select">
                <option value="">تاريخ الإنشاء</option>
                <option value="Newest">الأحدث</option>
                <option value="High Rated">تقييم عالي</option>
                <option value="Law Rated">تصنيف منخفض</option>
                <option value="High Earned">مكاسب عالية</option>
              </select>
            </div>
          </form>
        </div>
        <Table
          columns={columns}
          dataSource={filtered}
          rowKey="id"
          pagination={false}
          className="mb-0 text-nowrap table-centered table-hover"
        />
      </div>
      <FormationDetailsModal
        visible={visible}
        onCancel={handleCancel}
        formation={selectedFormation}
      />
    </div>
  );
};

export default FormationsTable;
