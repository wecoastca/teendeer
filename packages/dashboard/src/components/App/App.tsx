import React from 'react';
import TalentForm from '../../features/talent/TalentForm';
import UserForm from '../../features/user/UserForm';
import AppLayout from '../AppLayout/AppLayout';

const App = () => {
  return (
    <AppLayout>
      <TalentForm />
      <UserForm />
    </AppLayout>
  );
};

export default App;
