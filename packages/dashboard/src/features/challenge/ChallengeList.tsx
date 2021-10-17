import { Card, Divider, Space, Spin, Tag, Typography } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import { useAppSelector } from '../../tools/hooks';
import { selectChallengeStatus, selectChallenge } from './challengeSlice';

const { Title } = Typography;

const ChallengeList = () => {
  const history = useHistory();
  const location = useLocation();

  const challenges = useAppSelector(selectChallenge);
  const status = useAppSelector(selectChallengeStatus);

  const handleClick = (id: number) => () => {
    console.log(id);
    history.push(`${location.pathname}/${id}`);
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Divider />
      <Title level={3}>Список челенджей</Title>
      <Space wrap={true}>
        {challenges.map((challenge) => (
          <Card
            cover={
              <img alt={challenge.challenge_name} src={challenge.image_url} />
            }
            onClick={handleClick(challenge.id)}
            actions={[
              <Tag color="default">Уровень: {challenge.req_talent_level}</Tag>,
              <Tag color="blue">Талант: {challenge.talent_id}</Tag>,
            ]}
            key={challenge.id}
            style={{ width: 240 }}>
            <Meta
              title={challenge.challenge_name}
              description={challenge.description}
            />
          </Card>
        ))}
      </Space>
    </Spin>
  );
};

export default ChallengeList;
