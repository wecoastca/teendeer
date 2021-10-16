import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import UserForm from '../../features/user/UserForm';

const Users = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Пользователи" />
      <UserForm />
    </React.Fragment>
  );
};

export default Users;
