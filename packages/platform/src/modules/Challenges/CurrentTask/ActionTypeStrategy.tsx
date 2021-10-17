import { Carousel, Upload, Input, Row, Col, DatePicker, TimePicker, Result, Button } from 'antd';
import React, { FC, useState } from 'react';
import front from 'assets/front.png';
import conf from 'assets/conf.jpeg';
import { InboxOutlined, SmileOutlined } from '@ant-design/icons';

const { Dragger } = Upload;
const { TextArea } = Input;

export interface ActionTypeStrategyPropsType {
    actionType: string;
}

export enum ActionType {
    CHECK_EXAMPLES = 'checkExamples',
    UPLOAD = "upload",
    WRITE_TEXT = "writeText",
    PUBLISH = "publish",
    TASK_SUCCESS = "taskSuccess"
};

//TODO: Изоляция логики каждого компонента
export const ActionTypeStrategy: FC<ActionTypeStrategyPropsType> = ({ actionType }) => {
    const [publishDate, setPublishDate] = useState();

    return (
        <div style={{ marginBottom: '20px' }}>
            {(() => {
                switch (actionType) {
                    case ActionType.CHECK_EXAMPLES:
                        return (
                            <Carousel>
                                <img alt="carousel item" src={front} />
                                <img alt="carousel item" src={conf} />
                                <img alt="carousel item" src={front} />
                            </Carousel>
                        );
                    case ActionType.PUBLISH:
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
                    case ActionType.TASK_SUCCESS:
                        return (
                            <Result
                                icon={<SmileOutlined />}
                                title="Вы успешно завершили все шаги, поздравляем!"
                                extra={<Button type="primary">К челенджам!</Button>}
                            />
                        );
                    case ActionType.UPLOAD:
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
                    case ActionType.WRITE_TEXT:
                        return (<TextArea rows={4} />);
                    default:
                        return null;

                }
            })()}
        </div>
    );
};