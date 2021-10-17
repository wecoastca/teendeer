import { Spin, Table, Tag } from 'antd';
import React from 'react';
import { useAppSelector } from '../../tools/hooks';
import { selectUserStatus, selectUsers } from './userSlice';

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
    title: 'Пол',
    dataIndex: 'user_sex',
    key: 'user_sex',
  },
  {
    title: 'Школа',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'ВКонтакте',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Направления',
    key: 'organizations',
    dataIndex: 'organizations',
    render: (tags: string) => (
      <>
        {tags?.split(',').map((tag) => {
          return (
            <Tag color="default" key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

const UsersList = () => {
  const users = useAppSelector(selectUsers);
  const status = useAppSelector(selectUserStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Table columns={columns} dataSource={users} />
    </Spin>
  );
};

export default UsersList;
