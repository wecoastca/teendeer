import { User } from '@teendeer/types';
import { message, Spin, Card, Form, Input, Button } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../tools/hooks';
import { selectUserStatus, addUser } from './userSlice';

const UserForm = () => {
  const status = useAppSelector(selectUserStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'failed') {
      message.error('Request failed');
    }
  }, [status]);

  const [form] = useForm<User>();

  const handleSubmit = () => {
    const note = form.getFieldsValue();
    dispatch(addUser(note));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание пользователя">
        <Form name="form" form={form}>
          <FormItem name="title" label="Название">
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
