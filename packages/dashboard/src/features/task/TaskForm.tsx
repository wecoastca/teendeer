import React from 'react';
import { Task } from '@teendeer/types';
import { Button, Card, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addTask, selectTaskStatus } from './taskSlice';

const AchivementForm = () => {
  const status = useAppSelector(selectTaskStatus);
  const dispatch = useAppDispatch();

  const [form] = useForm<Partial<Task>>();

  const handleSubmit = () => {
    const task = form.getFieldsValue();
    dispatch(addTask(task));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание задачи">
        <Form
          name="form"
          form={form}
          initialValues={{ image_url: 'https://picsum.photos/200' }}>
          <FormItem name="task_name" label="Название">
            <Input />
          </FormItem>
          <FormItem name="image_url" label="URL картинки">
            <Input />
          </FormItem>
          <FormItem name="description" label="Описание">
            <Input.TextArea />
          </FormItem>
          <FormItem name="task_number" label="Очередь выполнения">
            <Input type="number" />
          </FormItem>
          <FormItem name="challenge_id" label="ID челенджа">
            <Input type="number" />
          </FormItem>
          <FormItem name="task_points" label="Награда за прохождение">
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

export default AchivementForm;
