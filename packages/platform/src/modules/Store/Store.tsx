import { Card, Col, Row, Select } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import pled from 'assets/pled.jpeg';
import conf from 'assets/conf.jpeg';

const selectData = [{
    title: 'Мерч',
    value: 'merch',
    key: '1'
},
{
    title: 'События',
    value: 'events',
    key: '2'
},
{
    title: 'Еда',
    value: 'food',
    key: '3'
}
];

const mockStoreResponse = [
{
    id: '1',
    title: 'Плед',
    price: '113',
    imgSrc: pled
},
{
    id: '2',
    title: 'Билет',
    price: '80',
    imgSrc: pled
},
{
    id: '3',
    title: 'Шапка',
    price: '11',
    imgSrc: pled
},
{
    id: '4',
    title: 'Пицца',
    price: '1133',
    imgSrc: pled
},
{
    id: '5',
    title: 'Шарф',
    price: '3',
    imgSrc: pled
},
]
export const Store: FC = () => {
    return (
        <>
            <Card title="Магазин" style={{ borderColor: 'black', marginBottom: '20px    ' }}>
                <div style={{marginBottom: '10px'}}>Доступно: 1000 баллов</div>
                <Select mode="tags" style={{ width: '100%' }} placeholder="Выберите категории товаров" onChange={() => console.log(1)}>
                    {
                        selectData.map((x) => (
                            <Select.Option key={x?.key} value={x?.value}>{x?.title}</Select.Option>
                        ))
                    }

                </Select>
            </Card>
            <Row gutter={[16, 16]}>
                {mockStoreResponse.map((x) => (
                    <Col span={12} key={x?.id}>
                        <Card
                            hoverable
                            cover={<img alt="step-image" src={x?.imgSrc} />}
                            style={{ borderColor: 'black' }}
                        >
                            <NavLink to={''}>
                                <Meta title={x?.title + ' ' + x?.price} />
                            </NavLink>
                        </Card>
                    </Col>))
                }

            </Row>
        </>
    )
}