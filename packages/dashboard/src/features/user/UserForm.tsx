import { Talent, User } from '@teendeer/types';
import { Spin, Card, Form, Input, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React, { useState } from 'react';
import TalentsSelect from '../../components/TalentsSelect/TalentsSelect';
import { useAppSelector, useAppDispatch } from '../../tools/hooks';
import { selectTalents } from '../talent/talentSlice';
import { selectUserStatus, addUser } from './userSlice';
import { convertToUserTalentInfo } from './utils';

const UserForm = () => {
  const [userTalents, setUserTalents] = useState<Talent[]>([]);
  const talents = useAppSelector(selectTalents);
  const status = useAppSelector(selectUserStatus);
  const dispatch = useAppDispatch();

  const [form] = useForm<Pick<User, 'login' | 'fullname'>>();

  const handleSubmit = () => {
    const user = {
      ...form.getFieldsValue(),
      talent_info: convertToUserTalentInfo(userTalents),
    };
    dispatch(addUser(user));
  };

  const handleTalentsSelect = (selectedTalents: Talent[]) => {
    setUserTalents(selectedTalents);
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Добавить пользователя">
        <Form name="form" form={form}>
          <FormItem name="login" label="Логин">
            <Input />
          </FormItem>
          <FormItem name="fullname" label="Полное имя">
            <Input />
          </FormItem>
          <FormItem label="Таланты">
            <TalentsSelect
              talents={talents}
              selected={[]}
              onFinish={handleTalentsSelect}
            />
          </FormItem>
          <Button type="primary" onClick={handleSubmit}>
            Добавить
          </Button>
        </Form>
      </Card>
    </Spin>
  );
};

export default UserForm;
