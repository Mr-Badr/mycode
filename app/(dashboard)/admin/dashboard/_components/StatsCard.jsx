import React from 'react';
import { Card, Typography, Row, Col } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;

const StatsCard = ({ title, value, icon, trend, trendText }) => {
  const renderTrendIcon = (trend) => {
    if (trend === 'success') {
      return <ArrowUpOutlined className="text-success" />;
    }
    return <ArrowDownOutlined className="text-danger" />;
  };

  return (
    <Card className="mb-4">
      <div className="d-flex align-items-center justify-content-between mb-3 lh-1">
        <div>
          <Text className="fs-6 text-uppercase tajawal-bold ls-md">{title}</Text>
        </div>
        <div>
          <span className={`fe fe-${icon} fs-3 text-primary`}></span>
        </div>
      </div>
      <Title level={2} className="tajawal-bold mb-1">{value}</Title>
      <div className="d-flex align-items-center">
        <Text className={`text-${trend} tajawal-bold me-1`}>
          {renderTrendIcon(trend)}
          {trendText}
        </Text>
        <Text className="tajawal-medium">عدد {title}</Text>
      </div>
    </Card>
  );
};

export default StatsCard;
