import { User } from '@teendeer/types';
import { Spin, Card, Form, Input, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React from 'react';
import { useAppSelector, useAppDispatch } from '../../tools/hooks';
import { selectUserStatus, addUser } from './userSlice';

const UserForm = () => {
  const status = useAppSelector(selectUserStatus);
  const dispatch = useAppDispatch();

  const [form] = useForm<Pick<User, 'login' | 'fullname'>>();

  const handleSubmit = () => {
    const user = form.getFieldsValue();
    dispatch(addUser(user));
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
          <Button type="primary" onClick={handleSubmit}>
            Добавить
          </Button>
        </Form>
      </Card>
    </Spin>
  );
};

export default UserForm;
