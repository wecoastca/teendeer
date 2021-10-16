import React, { useEffect } from 'react';
import { Talent } from '@teendeer/types';
import { Button, Card, Form, Input, message, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addTalent, selectTalentsStatus } from './talentSlice';

const TalentForm = () => {
  const status = useAppSelector(selectTalentsStatus);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'failed') {
      message.error('Request failed');
    }
  }, [status]);

  const [form] = useForm<Talent>();

  const handleSubmit = () => {
    const note = form.getFieldsValue();
    dispatch(addTalent(note));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание таланта">
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

export default TalentForm;
