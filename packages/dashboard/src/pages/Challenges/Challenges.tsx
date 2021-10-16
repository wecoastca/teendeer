import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import ChallengeForm from '../../features/challenge/ChallengeForm';
import ChallengeList from '../../features/challenge/ChallengeList';

const Challenges = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Список челенджей" />
      <ChallengeForm />
      <ChallengeList />
    </React.Fragment>
  );
};

export default Challenges;
