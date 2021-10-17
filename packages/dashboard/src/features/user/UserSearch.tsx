import { TalentInfo } from '@teendeer/types';
import { Spin, Table, Progress } from 'antd';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectTalents } from '../talent/talentSlice';
import { selectUserStatus, selectUsers } from './userSlice';
import { applyModify, getTalentName, getColor } from './utils';

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
