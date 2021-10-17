import { Card, Col, Progress, Row, Spin } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router";
import conf from 'assets/conf.jpeg';
import { NavLink } from "react-router-dom";
import { listTasks, listChallenges } from "@teendeer/api";
import { Challenge, Task } from '@teendeer/types/dist';

const { Meta } = Card;

export const CurrentChallenge: FC = () => {
    const { id } = useParams<{ id: string }>();

    const [currentChallenge, setCurrentChallenge] = useState<Challenge>();
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        setIsLoading(true);
        listChallenges()
            .then((x) => setCurrentChallenge(x?.find((y) => String(y?.id) == id)))
            .finally(() => setIsLoading(false));
    }, [id]);

    useEffect(() => {
        setIsLoading(true);
        listTasks()
            .then((x) => setTasks(x))
            .finally(() => setIsLoading(false));
    }, [id]);

    return (
        <Spin spinning={isLoading}>
            <Card title={currentChallenge?.challenge_name } size="small" style={{ marginBottom: '15px', borderColor: 'black' }} >
                {currentChallenge?.description }
                <Progress percent={30} />
            </Card>
            <Row gutter={[16, 16]}>
                {(tasks).map((x, i) => (
                    <Col span={12} key={x?.id} style={i === 2 ? { opacity: '30%' } : undefined}>
                        <Card
                            hoverable
                            cover={<img alt="step-image" src={x?.image_url || conf} />}
                            style={{ borderColor: 'black' }}
                        >
                            <NavLink to={`/tasks/${x?.id}`}>
                                <Meta title={x?.task_name} description={x?.description} />
                            </NavLink>
                        </Card>
                    </Col>))
                }

            </Row>

        </Spin >

    );
}