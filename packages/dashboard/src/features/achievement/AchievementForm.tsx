import React from 'react';
import { Achievement } from '@teendeer/types';
import { Button, Card, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addAchievement, selectAchievementsStatus } from './achievementSlice';

const AchivementForm = () => {
  const status = useAppSelector(selectAchievementsStatus);
  const dispatch = useAppDispatch();

  const [form] = useForm<Partial<Achievement>>();

  const handleSubmit = () => {
    const achievement = form.getFieldsValue();
    dispatch(addAchievement(achievement));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание ачивки">
        <Form
          name="form"
          form={form}
          initialValues={{ achievement_type: 'reward' }}>
          <FormItem name="name" label="Название">
            <Input />
          </FormItem>
          <FormItem name="image_url" label="URL картинки">
            <Input />
          </FormItem>
          <FormItem name="description" label="Описание">
            <Input.TextArea />
          </FormItem>
          <FormItem name="achievement_type" label="Тип">
            <Input disabled />
          </FormItem>
          <FormItem name="talent_points" label="Награда за прохождение">
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
