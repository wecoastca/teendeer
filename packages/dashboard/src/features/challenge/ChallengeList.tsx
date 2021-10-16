import { Card, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../tools/hooks';
import {
  selectChallengeStatus,
  getChallenges,
  selectChallenge,
} from './challengeSlice';

const ChallengeList = () => {
  const challenges = useAppSelector(selectChallenge);
  const status = useAppSelector(selectChallengeStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getChallenges());
  }, [dispatch]);

  return (
    <Spin spinning={status === 'loading'}>
      <Card>{JSON.stringify(challenges)}</Card>
    </Spin>
  );
};

export default ChallengeList;
