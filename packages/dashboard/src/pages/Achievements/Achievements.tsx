import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import AchivementForm from '../../features/achievement/AchievementForm';
import AchievementList from '../../features/achievement/AchievementList';

const Achievements = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Ачивки" />
      <AchivementForm />
      <AchievementList />
    </React.Fragment>
  );
};

export default Achievements;
