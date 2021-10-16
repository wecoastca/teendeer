import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import UserForm from '../../features/user/UserForm';
import UsersList from '../../features/user/UsersList';

const Users = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Пользователи" />
      <UserForm />
      <UsersList />
    </React.Fragment>
  );
};

export default Users;
