import { Avatar, Card, Col, Row, Tag, Input } from 'antd';
import React, { FC } from 'react';

const { TextArea } = Input;
const { Meta } = Card;

const talants = [
    {
        title: 'личный бренд',
        color: 'magenta'
    },
    {
        title: 'спорт',
        color: 'red'
    },
    {
        title: 'образование',
        color: 'volcano'
    },
    {
        title: 'прикладное творчество',
        color: 'orange'
    },
    {
        title: 'сценическое искусство',
        color: 'gold'
    },
]

export const Profile: FC = () => {
    return (
        <>
            <h1>Профиль</h1>
            <Card
                style={{ border: 0 }}
            >
                <Meta
                    avatar={<Avatar size="large" src="https://icons.iconarchive.com/icons/goescat/macaron/128/gimp-icon.png" />}
                    title="Иван Иванов"
                    description={<p>МОУ СОШ 123 <br /> 7й класс <br /> Салехард, 16.10.1994</p>}

                />
            </Card>
            <h1>Мои таланты</h1>
            <Row gutter={[8, 8]}>
                {talants.map((x) => (
                    <Col>
                        <Tag color={x.color}>{x.title}</Tag>
                    </Col>
                ))}
            </Row>
            <h1>Обо мне</h1>
            <TextArea rows={4} value="Меня зовут Иван. Я играю в шахматы с 5 лет. Начинал еще в детском саду и продолжаю играть. Буду рад поучаствовать в мероприятиях.">

            </TextArea>

        </>
    )
}