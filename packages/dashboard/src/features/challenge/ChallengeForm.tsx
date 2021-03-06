import React from 'react';
import { Challenge } from '@teendeer/types';
import { Button, Card, Form, Input, Spin } from 'antd';
import { useForm } from 'antd/lib/form/Form';
import FormItem from 'antd/lib/form/FormItem';
import { useAppDispatch, useAppSelector } from '../../tools/hooks';
import { addChallenge, selectChallengeStatus } from './challengeSlice';
// import AchievementAutocomplete from './AchievementAutocomplete';

type Props = {
  challenge?: Challenge;
};

const ChallengeForm = ({ challenge }: Props) => {
  const status = useAppSelector(selectChallengeStatus);
  const dispatch = useAppDispatch();
  const [form] = useForm<Partial<Challenge>>();

  const handleSubmit = () => {
    const challenge = form.getFieldsValue();
    dispatch(addChallenge(challenge));
  };

  return (
    <Spin spinning={status === 'loading'}>
      <Card title="Создание челенджа">
        <Form name="form" form={form} initialValues={challenge}>
          <FormItem name="challenge_name" label="Название">
            <Input />
          </FormItem>
          <FormItem name="image_url" label="URL картинки">
            <Input />
          </FormItem>
          <FormItem name="description" label="Описание">
            <Input.TextArea />
          </FormItem>
          <FormItem
            name="req_talent_level"
            label="Уровень навыка для прохождения">
            <Input type="number" />
          </FormItem>
          <FormItem name="talent_id" label="ID таланта">
            <Input type="number" />
          </FormItem>
          <FormItem name="achievement_id" label="ID ачивки">
            <Input type="number" />
            {/* <AchievementAutocomplete /> */}
          </FormItem>
          <Button type="primary" onClick={handleSubmit}>
            Добавить
          </Button>
        </Form>
      </Card>
    </Spin>
  );
};

export default ChallengeForm;
