import { Button, Card, Spin, Steps } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ActionTypeStrategy } from './ActionTypeStrategy';
import { Step, StepAction, Task } from "@teendeer/types";
import { getStepsByTaskId, listTasks } from "@teendeer/api"; 

const mockGetCurrentTask = {
    id: '1',
    name: 'Задание по программированию', // task_name
    challenge: '3', // Challenge id?
    description: 'Задание по программированию для особо одаренных детей',
    image_url: 'string',
    points: 4,
    task_order: 1, // task_number,
    finished: false,
    stepsNumber: 5,
}

const mockStepFirstData = {
    description: 'Это шаг рассказывающий про то почему не стоит начинать изучать программированию с js, так как иначе ученик станет фронтендером.',
    stepName: 'Впишите ваши идеи, почему фронтенд не для вас',
    actionType: StepAction.WRITE_TEXT
}
export const CurrentTask: FC = () => {
    const { id } = useParams<{ id: string }>();

    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [stepData, setStepData] = useState<Step[]>();
    const [currentTask, setCurrentTask] = useState<Task>();

    useEffect(() => {
        setIsLoading(true);
        listTasks().then((x) => setCurrentTask(x?.find((y) => String(y?.id) === id))).finally(() => setIsLoading(false));
    }, [id]);

    useEffect(() => {
        setIsLoading(true);
        getStepsByTaskId(Number(id)).then((x) => setStepData(x)).finally(() => setIsLoading(false));
    }, [id]);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    return (
        <Spin spinning={isLoading}>
            <Card title={currentTask?.task_name} style={{ borderColor: 'black', marginBottom: '30px' }}>
                {currentTask?.description}
                <Steps current={currentStep} onChange={(current) => setCurrentStep(current)} style={{ marginTop: '10px' }}>
                    {new Array(stepData?.length).fill(<Steps.Step />)}
                </Steps>
            </Card>
            <Card style={{ borderColor: 'black' }}>
                {{}|| mockStepFirstData?.description}
                <h1>{{} || mockStepFirstData?.stepName}</h1>
                <ActionTypeStrategy actionType={ '' || mockStepFirstData?.actionType} />
                {mockGetCurrentTask.stepsNumber !== currentStep ?
                    (<Button onClick={() => setCurrentStep(currentStep + 1)}>
                        Далее
                    </Button>)
                    : null}
            </Card>
        </Spin>

    )
}