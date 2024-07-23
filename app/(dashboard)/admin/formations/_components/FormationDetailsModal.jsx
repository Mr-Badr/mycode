import React from 'react';
import { Modal, Button, Typography, Image, Divider } from 'antd';

const { Title, Paragraph } = Typography;

const FormationDetailsModal = ({ visible, onClose, formation }) => {
  if (!formation) return null;

  return (
    <Modal
      visible={visible}
      onCancel={onClose}
      footer={null}
      width={800}
      centered
      style={{ direction: 'rtl' }} // Ensure RTL direction
    >
      <Title level={4} style={{ textAlign: 'center' }}>
        تفاصيل الدورة: {formation.name}
      </Title>

      <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{ marginRight: 20 }}>
          <Image
            src={formation.image ? `${process.env.NEXT_PUBLIC_STORAGE_URL}/${formation.image.replace('public/', '')}` : "../../assets/images/avatar/avatar-12.jpg"}
            alt={formation.name || "No image"}
            style={{ borderRadius: '8px', width: 150, height: 150, objectFit: 'cover' }}
            preview={false}
          />
          <Paragraph style={{ textAlign: 'center', marginTop: 8 }}><strong>صورة الدورة</strong></Paragraph>
        </div>
        <div style={{ flex: 1, marginRight: 30 }}>
          <Paragraph><strong>اسم الدورة:</strong> {formation.name}</Paragraph>
          <Paragraph><strong>نوع الدورة:</strong> {formation.formation_type.name}</Paragraph>
          <Paragraph><strong>الوصف:</strong> {formation.description}</Paragraph>
          <Paragraph><strong>الحالة:</strong> {formation.status}</Paragraph>
          <Paragraph><strong>تاريخ التسجيل:</strong> {formation.date_form ? new Date(formation.date_form).toLocaleDateString() : "لا يوجد تاريخ"}</Paragraph>
          <Paragraph><strong>تاريخ الإنشاء:</strong> {new Date(formation.created_at).toLocaleDateString()}</Paragraph>
          <Paragraph><strong>تاريخ التحديث:</strong> {new Date(formation.updated_at).toLocaleDateString()}</Paragraph>
        </div>
      </div>

      <Divider>تفاصيل إضافية</Divider>

      {formation.formation_details.length > 0 ? (
        formation.formation_details.map((detail, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: 20 }}>
            <div style={{ marginRight: 20 }}>
              {detail.file && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${detail.file.replace('public/', '')}`}
                  alt={detail.description || "Detail image"}
                  style={{ borderRadius: '8px', width: 150, height: 150, objectFit: 'cover' }}
                  preview={false}
                />
              )}
              {!detail.file && <Paragraph>لا توجد صورة</Paragraph>}
              <Paragraph style={{ textAlign: 'center', marginTop: 8 }}><strong>صورة التفاصيل</strong></Paragraph>
            </div>
            <div style={{ flex: 1, marginRight: 30 }}>
              <Paragraph><strong>رابط:</strong></Paragraph>
              <a 
                href={detail.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  display: 'block', 
                  backgroundColor: '#f0f0f0', 
                  padding: '8px', 
                  borderRadius: '4px', 
                  color: '#1890ff', 
                  textDecoration: 'none', 
                  marginTop: 4,
                  transition: 'background-color 0.3s, color 0.3s' 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#e6f7ff';
                  e.currentTarget.style.color = '#0050b3';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f0f0f0';
                  e.currentTarget.style.color = '#1890ff';
                }}
              >
                {detail.url}
              </a>
              <Paragraph style={{ marginTop: 8 }}><strong>وصف التفاصيل:</strong> {detail.description}</Paragraph>
            </div>
          </div>
        ))
      ) : (
        <Paragraph>لا توجد تفاصيل إضافية</Paragraph>
      )}

      <Button type="primary" onClick={onClose} style={{ width: '100%', marginTop: 20 }}>
        إغلاق
      </Button>
    </Modal>
  );
};

export default FormationDetailsModal;
