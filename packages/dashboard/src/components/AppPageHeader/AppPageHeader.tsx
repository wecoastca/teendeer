import { PageHeader } from 'antd';
import React from 'react';
import { useHistory } from 'react-router';

type Props = {
  title?: string;
};

const AppPageHeader = ({ title }: Props) => {
  const history = useHistory();

  const handleBack = () => {
    history.goBack();
  };

  return <PageHeader title={title} onBack={handleBack} />;
};

export default AppPageHeader;
