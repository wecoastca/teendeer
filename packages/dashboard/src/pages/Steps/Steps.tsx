import React from 'react';
import AppPageHeader from '../../components/AppPageHeader/AppPageHeader';
import StepForm from '../../features/step/StepForm';
import StepList from '../../features/step/StepList';

const Steps = () => {
  return (
    <React.Fragment>
      <AppPageHeader title="Шаги" />
      <StepForm />
      <StepList />
    </React.Fragment>
  );
};

export default Steps;
