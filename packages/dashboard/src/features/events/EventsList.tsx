import { Spin, Space, Card, Typography, Divider, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectEventsStatus, selectEvents } from './eventsSlice';

const { Title } = Typography;

const EventsList = () => {
  const events = useAppSelector(selectEvents);
  const status = useAppSelector(selectEventsStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Divider />
      <Title level={3}>Список событий</Title>
      <Space wrap={true}>
        {events.map((event) => (
          <Card
            cover={<img alt={event.product_name} src={event.image_url} />}
            actions={[
              <Tag color="default">Геолокация: {event.geo}</Tag>,
              <Tag color="blue">Цена: {event.price}</Tag>,
              <a href={event.url} target="_blank" rel="noreferrer">
                Ссылка
              </a>,
            ]}
            key={event.id}
            style={{ width: 400 }}>
            <Meta title={event.product_name} description={event.description} />
          </Card>
        ))}
      </Space>
    </Spin>
  );
};

export default EventsList;
