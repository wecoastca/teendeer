import { Spin, Card } from 'antd';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import {
  selectAchievementsStatus,
  selectAchievements,
} from './achievementSlice';

const AchievementList = () => {
  const achievements = useAppSelector(selectAchievements);
  const status = useAppSelector(selectAchievementsStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Card>{JSON.stringify(achievements)}</Card>
    </Spin>
  );
};

export default AchievementList;
