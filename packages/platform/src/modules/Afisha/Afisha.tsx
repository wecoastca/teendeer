import { Card, Col, Row } from 'antd'
import React, { FC } from 'react'
import styles from './Afisha.module.less';
import img from 'assets/conf.jpeg';

const { Meta } = Card;

export const Afisha: FC = () => {
    return (
        <>
            <Row>
                <h1>Конференции</h1>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card className={styles.cardEvent} hoverable cover={<img alt="conf" src={img} />}>
                        <Meta title={"Событие"} description="Описание события" />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className={styles.cardEvent} hoverable cover={<img alt="conf" src={img} />}>
                        <Meta title={"Событие"} description="Описание события" />
                    </Card>
                </Col>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card className={styles.cardEvent} hoverable cover={<img alt="conf" src={img} />}>
                        <Meta title={"Событие"} description="Описание события" />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className={styles.cardEvent} hoverable cover={<img alt="conf" src={img} />}>
                        <Meta title={"Событие"} description="Описание события" />
                    </Card>
                </Col>
            </Row>
            <Row>
                <h1>Конференции</h1>
            </Row>
            <Row gutter={16}>
                <Col span={12}>
                    <Card className={styles.cardEvent} hoverable cover={<img alt="conf" src={img} />}>
                        <Meta title={"Событие"} description="Описание события" />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card className={styles.cardEvent} hoverable cover={<img alt="conf" src={img} />}>
                        <Meta title={"Событие"} description="Описание события" />
                    </Card>
                </Col>
            </Row>
        </>
    )
}