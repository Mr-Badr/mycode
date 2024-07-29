import React from 'react';
import { Modal, Typography, List, Divider, Row, Col } from 'antd';
import { FileImageOutlined, LinkOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const FormationDetailsModal = ({ visible, onCancel, formation }) => {
  if (!formation) return null;

  const { name, description, image, status, created_at, updated_at, formation_participants, formation_type, formation_details } = formation;

  return (
    <Modal
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={900}
      bodyStyle={{ direction: 'rtl' }} // RTL support
      centered
      title={
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>تفاصيل الدورة</span>
        </div>
      }
      closeIcon={<span style={{ fontSize: '20px', color: '#1890ff' }}>&times;</span>} // Customize close button
    >
      <Row gutter={16}>
        <Col span={24}>
          <div className="d-flex align-items-center mb-4">
            <img
              src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${image.replace('public/', '')}`}
              alt="دورة"
              style={{ width: '180px', height: 'auto', marginLeft: '20px', borderRadius: '8px' }} // Improved image styling
            />
            <div>
              <Title level={3}>{name}</Title>
              <Text style={{ display: 'block', marginBottom: '8px' }}><strong>الوصف:</strong> {description}</Text>
              <Text style={{ display: 'block', marginBottom: '8px' }}><strong>حالة الدورة:</strong> {status}</Text>
              <Text style={{ display: 'block', marginBottom: '8px' }}><strong>تاريخ الإنشاء:</strong> {new Date(created_at).toLocaleDateString()}</Text>
              <Text style={{ display: 'block' }}><strong>تاريخ التحديث:</strong> {new Date(updated_at).toLocaleDateString()}</Text>
            </div>
          </div>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={5}><FileImageOutlined /> تفاصيل الدورة</Title>
          <List
            itemLayout="vertical"
            size="large"
            dataSource={formation_details}
            renderItem={item => (
              <List.Item key={item.id} style={{ padding: '16px', border: '1px solid #f0f0f0', borderRadius: '8px', marginBottom: '16px', display: 'flex', alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, marginRight: '16px' }}>
                  <img
                    src={`${process.env.NEXT_PUBLIC_STORAGE_URL}/${item.file.replace('public/', '')}`}
                    alt="تفاصيل الدورة"
                    style={{ width: '150px', height: 'auto', borderRadius: '8px', marginLeft: '20px' }}
                  />
                </div>
                <div>
                <a 
  href={item.url} 
  target="_blank" 
  rel="noopener noreferrer" 
  style={{
    display: 'block',
    marginBottom: '8px',
    padding: '10px 15px',
    fontSize: '16px',
    color: '#1890ff',
    backgroundColor: '#f5f5f5', // Light gray background
    borderRadius: '4px', // Rounded corners
    textDecoration: 'none', // Remove underline
    border: '1px solid #d9d9d9', // Light border
    transition: 'background-color 0.3s, border-color 0.3s', // Smooth transition
    maxWidth: '100%', // Prevents overflow within parent container
    boxSizing: 'border-box', // Ensures padding and border are included in the element's total width and height
    overflow: 'hidden', // Ensures content does not overflow
    textOverflow: 'ellipsis', // Adds ellipsis for overflowed text
    whiteSpace: 'nowrap', // Prevents text from wrapping to the next line
    maxWidth: '50%' // Adjust this value if needed to fit within card margins
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#e6e6e6'; // Darker gray on hover
    e.currentTarget.style.borderColor = '#bfbfbf'; // Darker border on hover
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#f5f5f5'; // Original gray background
    e.currentTarget.style.borderColor = '#d9d9d9'; // Original border color
  }}
>
  <Text style={{ marginRight: '8px', display: 'inline-block' }}>
    <LinkOutlined />
  </Text>
  {item.url}
</a>

                  <Text style={{ display: 'block', marginBottom: '8px' }}>{item.description}</Text>
                </div>
              </List.Item>
            )}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={5}><UserOutlined /> عدد المشتركين</Title>
          <Text>{formation_participants.length} مشترك</Text>
        </Col>
      </Row>
      <Divider />
      <Row gutter={16}>
        <Col span={24}>
          <Title level={5}>نوع الدورة</Title>
          <Text>{formation_type.name}</Text><br />
          <Text>{formation_type.description}</Text>
        </Col>
      </Row>
    </Modal>
  );
};

export default FormationDetailsModal;
