import React from 'react';
import { Talent } from '@teendeer/types';
import { Button, Card, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addTalent, selectTalentsStatus } from './talentSlice';

const TalentForm = () => {
  const status = useAppSelector(selectTalentsStatus);
  const dispatch = useAppDispatch();

  const [form] = useForm<Partial<Talent>>();

  const handleSubmit = () => {
    const talent = form.getFieldsValue();
    dispatch(addTalent(talent));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание таланта">
        <Form name="form" form={form}>
          <FormItem name="name" label="Название">
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
