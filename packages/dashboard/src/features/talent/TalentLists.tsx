import { Card, Spin } from 'antd';
import React from 'react';
import TalentsSelect from '../../components/TalentsSelect/TalentsSelect';
import { useAppSelector } from '../../tools/hooks';
import { selectTalentsStatus, selectTalents } from './talentSlice';

const TalentList = () => {
  const talents = useAppSelector(selectTalents);
  const status = useAppSelector(selectTalentsStatus);

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Список талантов">
        <TalentsSelect talents={talents} />
      </Card>
    </Spin>
  );
};

export default TalentList;
