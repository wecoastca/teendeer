import { Card, Spin } from 'antd';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import {
  selectChallengeStatus,
  selectChallenge,
} from './challengeSlice';

const ChallengeList = () => {
  const challenges = useAppSelector(selectChallenge);
  const status = useAppSelector(selectChallengeStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Card>{JSON.stringify(challenges)}</Card>
    </Spin>
  );
};

export default ChallengeList;
