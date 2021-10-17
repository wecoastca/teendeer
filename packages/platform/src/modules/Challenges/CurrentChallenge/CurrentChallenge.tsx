import { Card, Col, Progress, Row, Spin } from "antd";
import { Status, useExecuteRequest } from "hooks";
import React, { FC, useEffect } from "react";
import { useParams } from "react-router";
import conf from 'assets/conf.jpeg';
import { NavLink } from "react-router-dom";

type ChallengeResponseType = {
    challenge_name: string;
    image_url: string | null;
    req_talent_level: string;
    description: string | null;
    talent_id: number;
    currentStep: number;
    totalSteps: number;
}

export type Task = {
    id: string;
    name: string; // task_name
    challenge: string; // Challenge id?
    description: string;
    image_url: string;
    points: number;
    task_order: number; // task_number,
    finished: boolean;
}

type ChallengeTasksResponseType = Task[];

const mockGetChallenge = {
    challenge_name: 'Челендж 1',
    image_url: 'localhost',
    req_talent_level: '30',
    description: 'Очень длинное описание челенджа',
    talent_id: '3',
    currentStep: 5,
    totalSteps: 10
};

const mockGetTasks = [{
    id: '1',
    name: 'Добавить фолловеров', // task_name
    challenge: '1', // Challenge id?
    description: '5 шагов',
    image_url: undefined,
    points: 5,
    task_order: 1, // task_number
    finished: false
},
{
    id: '1',
    name: 'Добавить фолловеров', // task_name
    challenge: '1', // Challenge id?
    description: '5 шагов',
    image_url: undefined,
    points: 5,
    task_order: 1, // task_number
    finished: true
},
{
    id: '1',
    name: 'Добавить фолловеров', // task_name
    challenge: '1', // Challenge id?
    description: '5 шагов',
    image_url: undefined,
    points: 5,
    task_order: 1, // task_number
    finished: false
}];

const { Meta } = Card;

export const CurrentChallenge: FC = () => {
    const { execute: getChallenge, value: challengeInfo, status: statusChallenge } = useExecuteRequest<{ id: string }, ChallengeResponseType>('/getChallenge');
    const { execute: getChallengeTasks, value: tasks, status: statusTasks } = useExecuteRequest<{ id: string }, ChallengeTasksResponseType>('/getChallengeTask');
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        getChallenge({ id });
        getChallengeTasks({ id });
    }, [id]);

    return (
        <Spin spinning={statusChallenge === Status.PENDING || statusTasks === Status.PENDING}>
            <Card title={challengeInfo?.challenge_name || mockGetChallenge?.challenge_name} size="small" style={{ marginBottom: '15px', borderColor: 'black' }} >
                {challengeInfo?.description || mockGetChallenge?.description}
                <Progress percent={(challengeInfo?.currentStep || mockGetChallenge?.currentStep) / (challengeInfo?.totalSteps || mockGetChallenge?.totalSteps) * 100} />
            </Card>
            <Row gutter={[16, 16]}>
                {(tasks || mockGetTasks).map((x) => (
                    <Col span={12} key={x?.id} style={x?.finished ? { opacity: '30%' } : undefined}>
                        <Card
                            hoverable
                            cover={<img alt="step-image" src={x?.image_url || conf} />}
                            style={{ borderColor: 'black' }}
                        >
                            <NavLink to={`/tasks/${x?.id}`}>
                                <Meta title={x?.description} description={x?.name} />
                            </NavLink>
                        </Card>
                    </Col>))
                }

            </Row>

        </Spin >

    );
}