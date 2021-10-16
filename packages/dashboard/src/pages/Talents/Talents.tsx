import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import TalentForm from '../../features/talent/TalentForm';
import TalentLists from '../../features/talent/TalentLists';

const Talents = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Таланты" />
      <TalentForm />
      <TalentLists />
    </React.Fragment>
  );
};

export default Talents;
