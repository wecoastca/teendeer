import { Carousel, Upload, Input, Row, Col, DatePicker, TimePicker, Result, Button } from 'antd';
import React, { FC, useState } from 'react';
import { InboxOutlined, SmileOutlined } from '@ant-design/icons';
import { StepAction, Step } from '@teendeer/types';
import { NavLink } from 'react-router-dom';

const { Dragger } = Upload;
const { TextArea } = Input;

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
                    default:
                        return null;

                }
            })()}
        </div>
    );
};