import { Spin, Space, Card, Typography, Divider, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectStepStatus, selectStep } from './stepSlice';

const { Title } = Typography;

const StepList = () => {
  const steps = useAppSelector(selectStep);
  const status = useAppSelector(selectStepStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Divider />
      <Title level={3}>Список шагов</Title>
      <Space wrap={true}>
        {steps.map((step) => (
          <Card
            cover={<img alt={step.step_name} src={step.image_url} />}
            actions={[
              <Tag color="default">Задача: {step.task_id}</Tag>,
              <Tag color="blue">Позиция: {step.step_number}</Tag>,
              <Tag color="blue">Экшен: {step.action}</Tag>,
            ]}
            key={step.id}
            style={{ width: 400 }}>
            <Meta title={step.step_name} description={step.step_text} />
          </Card>
        ))}
      </Space>
    </Spin>
  );
};

export default StepList;
