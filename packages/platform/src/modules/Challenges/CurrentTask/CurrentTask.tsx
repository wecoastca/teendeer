import { Button, Card, Spin, Steps } from 'antd';
import { useExecuteRequest } from 'hooks';
import { Task } from 'modules';
import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { ActionType, ActionTypeStrategy } from './ActionTypeStrategy';
const { Step } = Steps;

interface StepDataType {
    description: string;
    stepName: string;
    actionType: ActionType;
}

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
    actionType: ActionType.TASK_SUCCESS
}
export const CurrentTask: FC = () => {
    const { id } = useParams<{ id: string }>();

    const [currentStep, setCurrentStep] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    //получение инфы о задании
    const { execute: getCurrentTask, value: currTask } = useExecuteRequest<{ id: string }, Task>('/getCurrentTask');
    //получение конкретного шага
    const { execute: getCurrentStep, value: stepData } = useExecuteRequest<{ step: number }, StepDataType>('/getCurrentStep');

    useEffect(() => {
        setIsLoading(true);
        getCurrentTask({ id });
        getCurrentStep({ step: currentStep }).finally(() => setIsLoading(false));
    }, [id, currentStep]);

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    }

    return (
        <Spin spinning={isLoading}>
            <Card title={currTask?.name || mockGetCurrentTask?.name} style={{ borderColor: 'black', marginBottom: '30px' }}>
                {currTask?.description || mockGetCurrentTask?.description}
                <Steps current={currentStep} onChange={(current) => setCurrentStep(current)} style={{ marginTop: '10px' }}>
                    {new Array(mockGetCurrentTask?.stepsNumber).fill(<Steps.Step />)}
                </Steps>
            </Card>
            <Card style={{ borderColor: 'black' }}>
                {stepData?.description || mockStepFirstData?.description}
                <h1>{stepData?.stepName || mockStepFirstData?.stepName}</h1>
                <ActionTypeStrategy actionType={stepData?.actionType || mockStepFirstData?.actionType} />
                {mockGetCurrentTask.stepsNumber === currentStep ?
                    (<Button onClick={() => setCurrentStep(currentStep + 1)}>
                        Далее
                    </Button>)
                    : null}
            </Card>
        </Spin>

    )
}