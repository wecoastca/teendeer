import React from 'react';
import { Step } from '@teendeer/types';
import { Button, Card, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addStep, selectStepStatus } from './stepSlice';

const StepForm = () => {
  const status = useAppSelector(selectStepStatus);
  const dispatch = useAppDispatch();

  const [form] = useForm<Partial<Step>>();

  const handleSubmit = () => {
    const step = form.getFieldsValue();
    dispatch(addStep(step));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание шага">
        <Form
          name="form"
          form={form}
          initialValues={{
            action: 'plain',
            image_url: 'https://picsum.photos/200',
          }}>
          <FormItem name="step_name" label="Название">
            <Input />
          </FormItem>
          <FormItem name="image_url" label="URL картинки">
            <Input />
          </FormItem>
          <FormItem name="step_text" label="Описание">
            <Input.TextArea />
          </FormItem>
          <FormItem name="action" label="Тип экшена">
            <Input />
          </FormItem>
          <FormItem name="button_text" label="Текст кнопки">
            <Input />
          </FormItem>
          <FormItem name="meta_type" label="Тип мета">
            <Input />
          </FormItem>
          <FormItem name="meta_urls" label="Мета ссылки">
            <Input />
          </FormItem>
          <FormItem name="task_id" label="ID челенджа">
            <Input type="number" />
          </FormItem>
          <FormItem name="step_number" label="Очередь для выполнения">
            <Input type="number" />
          </FormItem>
          <Button type="primary" onClick={handleSubmit}>
            Добавить
          </Button>
        </Form>
      </Card>
    </Spin>
  );
};

export default StepForm;
