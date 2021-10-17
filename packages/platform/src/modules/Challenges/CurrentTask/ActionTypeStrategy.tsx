import { Carousel, Upload, Input, Row, Col, DatePicker, TimePicker, Result, Button, Card, Spin } from 'antd';
import React, { FC, useState } from 'react';
import { InboxOutlined, SmileOutlined } from '@ant-design/icons';
import { StepAction, Step } from '@teendeer/types';
import { NavLink } from 'react-router-dom';

const { Dragger } = Upload;
const { TextArea } = Input;

// Энергия: как всегда быть на волне?
// Момент слабости: что делать, когда хочется бросить все?
// Сложный выбор: от чего пришлось отказаться ради успеха?
// На кого я ровняюсь? Кто мой кумир?
// Мой наставник: с кем я могу поговорить и обсудить свое развитие?
// Вера в себя: почему важно вставать после падения?

const randomQuestions = [{
    id: 1,
    text: 'Почему мой выбор – этот вид деятельности?'
}, {
    id: 2,
    text: 'Моя первая победа!',
}, {
    id: 4,
    text: 'Мое первое поражение!',
}, {
    id: 5,
    text: 'Кто помогает мне развивать свой талант и всегда оказывает поддержку?',
}, {
    id: 6,
    text: 'Моя команда!',
}, {
    id: 7,
    text: 'Моя роль в команде!',
}, {
    id: 8,
    text: 'Точка "сейчас": где я нахожусь с точки зрения развития навыков?',
}, {
    id: 9,
    text: 'Мой план: где я хочу находиться через год?',
}, {
    id: 10,
    text: 'Моя мечта!',
}, {
    id: 11,
    text: 'Когда я впервые почувствовал, что это мое?',
}, {
    id: 12,
    text: 'Где сейчас мой фокус внимания?',
}, {
    id: 13,
    text: 'Кто может помочь на пути развития?',
}, {
    id: 14,
    text: 'Как ускорить развитие навыка?',
}, {
    id: 15,
    text: 'Синдром самозванца: что делать, если кажется, что ты недостаточно хорош?',
}, {
    id: 16,
    text: 'Что меня вдохновляет?',
}, {
    id: 17,
    text: 'Мои лайфхаки',
}, {
    id: 18,
    text: 'Выдержка и дисциплина: как не сдаваться?',
}, {
    id: 19,
    text: 'Моя рутина: что я делаю для поддержания таланта?',
}, {
    id: 20,
    text: 'Что пригодится новичку в моей области развития? ',
}, {
    id: 21,
    text: 'Разбор ошибок – какие уроки можно извлечь?',
}, {
    id: 22,
    text: 'Главный факап – почему не стыдно делиться неудачами?',
}, {
    id: 23,
    text: 'Запрос совета со стороны аудитории: спорная ситуация, в которой я оказался',
}, {
    id: 24,
    text: 'Как спланировать свое развитие?',
}];

export interface ActionTypeStrategyPropsType {
    actionType?: string;
    step?: Step
};

//TODO: Изоляция логики каждого компонента
export const ActionTypeStrategy: FC<ActionTypeStrategyPropsType> = ({ actionType, step }) => {
    const [publishDate, setPublishDate] = useState();

    return (
        <div style={{ marginBottom: '20px' }}>
            {(() => {
                switch (actionType) {
                    case StepAction.CHECK_EXAMPLES:
                        return (
                            <Carousel>
                                <img alt="carousel item" src={step?.image_url} />
                                <img alt="carousel item" src={step?.image_url} />
                                <img alt="carousel item" src={step?.image_url} />
                            </Carousel>
                        );
                    case StepAction.PUBLISH:
                        return (
                            <Row gutter={[16, 16]}>
                                <Col span={12}>
                                    <DatePicker onChange={(value: any) => setPublishDate(value)} />
                                </Col>
                                <Col span={12}>
                                    <TimePicker onChange={(value: any) => setPublishDate(value)} />
                                </Col>
                            </Row>
                        );
                    case StepAction.TASK_SUCCESS:
                        return (
                            <Result
                                icon={<SmileOutlined />}
                                title="Вы успешно завершили все шаги, поздравляем!"
                                extra={
                                    <Button type="primary">
                                        <NavLink to={`/challenges`}>К челенджам!</NavLink>
                                    </Button>
                                }
                            />
                        );
                    case StepAction.UPLOAD:
                        return (
                            <Dragger
                                style={{ maxHeight: '20%', marginTop: '10px' }}
                                name="diploma"
                                multiple={true}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76" >
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                            </Dragger>
                        );
                    case StepAction.WRITE_TEXT:
                        return (<TextArea rows={4} />);
                    case StepAction.RANDOM:
                        return (
                            <Card>
                                {randomQuestions?.[Math.floor(Math.random() * 23) + 1]?.text}
                            </Card>
                        );
                    default:
                        return null;

                }
            })()}
        </div>
    );
};