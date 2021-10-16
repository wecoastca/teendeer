import { Card, Spin } from 'antd';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../tools/hooks';
import { selectUserStatus, getUsers, selectUsers } from './userSlice';

const UsersList = () => {
  const users = useAppSelector(selectUsers);
  const status = useAppSelector(selectUserStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <Spin spinning={status === 'loading'}>
      <Card>{JSON.stringify(users)}</Card>
    </Spin>
  );
};

export default UsersList;
