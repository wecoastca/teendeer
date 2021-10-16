import { Card, Spin } from 'antd';
import React, { useEffect } from 'react';
import TalentsSelect from '../../components/TalentsSelect/TalentsSelect';
import { useAppSelector, useAppDispatch } from '../../tools/hooks';
import { selectTalentsStatus, getTalents, selectTalents } from './talentSlice';

const TalentList = () => {
  const talents = useAppSelector(selectTalents);
  const status = useAppSelector(selectTalentsStatus);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getTalents());
  // }, [dispatch]);

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Список талантов">
        <TalentsSelect talents={talents} />
      </Card>
    </Spin>
  );
};

export default TalentList;
