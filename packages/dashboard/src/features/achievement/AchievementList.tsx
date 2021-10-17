import { Spin, Space, Card, Typography, Divider, Tag } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import {
  selectAchievementsStatus,
  selectAchievements,
} from './achievementSlice';

const { Title } = Typography;

const AchievementList = () => {
  const achievements = useAppSelector(selectAchievements);
  const status = useAppSelector(selectAchievementsStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Divider />
      <Title level={3}>Список ачивок</Title>
      <Space wrap={true}>
        {achievements.map((achievement) => (
          <Card
            cover={<img alt={achievement.name} src={achievement.image_url} />}
            actions={[
              <Tag color="default">{achievement.achievement_type}</Tag>,
              <Tag color="blue">{achievement.talent_points}</Tag>,
            ]}
            title={achievement.id}
            style={{ width: 240 }}>
            <Meta
              title={achievement.name}
              description={achievement.description}
            />
          </Card>
        ))}
      </Space>
    </Spin>
  );
};

export default AchievementList;
