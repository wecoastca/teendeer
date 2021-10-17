import { Talent, TalentInfo, User } from '@teendeer/types';
import { Spin, Table, Progress } from 'antd';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectTalents } from '../talent/talentSlice';
import { selectUserStatus, selectUsers } from './userSlice';

const COLORS = {
  1: '#086788',
  2: '#07A0C3',
  3: '#F0C808',
  4: '#FFF1D0',
  5: '#DD1C1A',
};

const getColor = (id: number) => {
  switch (id) {
    case 1:
      return COLORS[1];
    case 2:
      return COLORS[2];
    case 3:
      return COLORS[3];
    case 4:
      return COLORS[4];
    case 5:
      return COLORS[5];
  }
};
const applyRandomTalentInfo =
  (talents: Talent[]) =>
  (user: User): User => ({
    ...user,
    talent_info: Array.from({ length: Math.random() * talents.length }, () => ({
      talent_id: Math.floor(Math.random() * talents.length + 1),
      talent_points: Math.floor(Math.random() * 10000),
      talent_level: Math.floor(Math.random() * 10),
    })),
  });

const applyRandomUserLevel = (user: User): User => ({
  ...user,
  user_level: Math.floor(Math.random() * 30),
});

const applyModify = (users: User[], talents: Talent[]) =>
  users.map(applyRandomTalentInfo(talents)).map(applyRandomUserLevel);

const getTalentName = (talents: Talent[], id: number) =>
  talents.find((talent) => talent.id === id)?.name;

const UserSearch = () => {
  const talents = useAppSelector(selectTalents);
  const users = useAppSelector(selectUsers);
  const changed_users = applyModify(users, talents);

  const status = useAppSelector(selectUserStatus);

  const columns = [
    {
      title: 'Полное имя',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (text: string) => <b>{text}</b>,
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Дата рождения',
      dataIndex: 'date_of_birth',
      key: 'date_of_birth',
    },
    {
      title: 'Подписчики',
      dataIndex: 'vk_subscribers',
      key: 'vk_subscribers',
    },
    {
      title: 'Уровень',
      dataIndex: 'user_level',
      key: 'user_level',
    },
    {
      title: 'Геопозиция',
      dataIndex: 'geo',
      key: 'geo',
    },
    {
      title: 'Био',
      dataIndex: 'bio',
      key: 'bio',
      render: (text: string) => <p>{text?.slice(0, 100)}</p>,
    },
    {
      title: 'Баллы',
      key: 'talent_info',
      dataIndex: 'talent_info',
      render: (talent_info: TalentInfo[]) =>
        talent_info.map((info) => (
          <React.Fragment>
            {getTalentName(talents, info.talent_id) || 'Неизвестно'}
            <Progress
              showInfo={false}
              strokeColor={getColor(info.talent_id)}
              percent={info.talent_points / 100}
              size="small"
            />
          </React.Fragment>
        )),
    },
  ];

  return (
    <Spin spinning={status === 'loading'}>
      <Table columns={columns} dataSource={changed_users} />
    </Spin>
  );
};

export default UserSearch;
