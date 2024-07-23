"use client";
import React, { useState } from 'react';
import { Table, Dropdown, Menu, Button, Modal } from 'antd';
import { DownOutlined, EditOutlined, DeleteOutlined, InfoCircleOutlined } from '@ant-design/icons';
import FormationDetailsModal from './FormationDetailsModal'; // Import the modal component

const FormationsTable = ({ formations, formationTypes = [], handleEditClick, handleDeleteClick }) => {
  const [selectedFormation, setSelectedFormation] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const getFormationTypeName = (typeId) => {
    const type = formationTypes.find(type => type.id === typeId);
    return type ? type.name : 'غير معروف';
  };

  const handleShowDetails = (formation) => {
    setSelectedFormation(formation);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedFormation(null);
  };

  const columns = [
    {
      title: 'الإسم',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <div className="d-flex align-items-center">
          <img
            src={record.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${record.image.replace('public/', '')}` : "../../assets/images/avatar/avatar-12.jpg"}
            alt={record.name || "No image"}
            className="rounded-circle avatar-md me-2"
            style={{ width: 40, height: 40 }}
          />
          <span>{text || "No name"}</span>
        </div>
      )
    },
    {
      title: 'نوع الدورة',
      dataIndex: 'formation_type_id',
      key: 'formation_type_id',
      render: (text) => getFormationTypeName(text)
    },
    {
      title: 'الوصف',
      dataIndex: 'description',
      key: 'description',
      render: (text) => (
        <span style={{ display: 'block', maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {text || "No description"}
        </span>
      )
    },
    {
      title: 'الحالة',
      dataIndex: 'status',
      key: 'status',
      render: (text) => text || "Unknown status"
    },
    {
      title: 'تاريخ الإنشاء',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (text) => text ? new Date(text).toLocaleDateString() : "لا يوجد تاريخ"
    },
    {
      title: 'عدد المشاركين',
      dataIndex: 'formation_participants',
      key: 'formation_participants',
      render: (text) => text.length || "0"
    },
    {
      title: 'تفاصيل الدورة',
      key: 'details',
      render: (text, record) => (
        <Button type="link" icon={<InfoCircleOutlined />} onClick={() => handleShowDetails(record)}>
          عرض التفاصيل
        </Button>
      )
    },
    {
      title: 'الإجراءات',
      key: 'actions',
      render: (text, record) => (
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="edit" icon={<EditOutlined />} onClick={() => handleEditClick(record)}>
                تعديل
              </Menu.Item>
              <Menu.Item key="delete" icon={<DeleteOutlined />} onClick={() => handleDeleteClick(record.id)}>
                حذف
              </Menu.Item>
            </Menu>
          }
          trigger={['click']}
        >
          <Button>
            <DownOutlined />
          </Button>
        </Dropdown>
      )
    }
  ];

  return (
    <div className="table-responsive">
      <Table
        columns={columns}
        dataSource={formations}
        rowKey="id"
        pagination={false}
      />

      {/* Formation Details Modal */}
      <FormationDetailsModal
        visible={showModal}
        onClose={handleCloseModal}
        formation={selectedFormation}
      />
    </div>
  );
};

export default FormationsTable;
