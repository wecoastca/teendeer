import React from 'react';
import { Step, StepAction } from '@teendeer/types';
import { Button, Card, Form, Input, Radio, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addStep, selectStepStatus } from './stepSlice';
import { getStepActionName } from './utils';

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
          <FormItem name="action" label="Тип шага">
            <Radio.Group>
              {Object.values(StepAction).map((value) => (
                <Radio value={value}>{getStepActionName(value)}</Radio>
              ))}
            </Radio.Group>
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
