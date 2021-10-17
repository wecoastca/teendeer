import { Spin, Space, Card, Typography, Divider, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectTaskStatus, selectTask } from './taskSlice';

const { Title } = Typography;

const TasksList = () => {
  const tasks = useAppSelector(selectTask);
  const status = useAppSelector(selectTaskStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Divider />
      <Title level={3}>Список задач</Title>
      <Space wrap={true}>
        {tasks.map((task) => (
          <Card
            cover={<img alt={task.task_name} src={task.image_url} />}
            actions={[
              <Tag color="default">Челендж: {task.challenge_id}</Tag>,
              <Tag color="blue">Позиция: {task.task_number}</Tag>,
              <Tag color="blue">Награда: {task.task_points}</Tag>,
            ]}
            key={task.id}
            style={{ width: 400 }}>
            <Meta title={task.task_name} description={task.description} />
          </Card>
        ))}
      </Space>
    </Spin>
  );
};

export default TasksList;
