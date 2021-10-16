import { Select, Card, Avatar, Spin } from 'antd'
import { useExecuteRequest } from 'hooks';
import React, { FC, useState } from 'react'
import { NavLink } from 'react-router-dom';

const { Meta } = Card;

const selectData = [{
    title: 'Шахматы',
    value: 'chess',
    key: '1'
},
{
    title: 'Баскетбол',
    value: 'basket',
    key: '2'
},
{
    title: 'Скрипка',
    value: 'skripka',
    key: '3'
},
{
    title: 'Скейтборд',
    value: 'skate',
    key: '4'
},
{
    title: 'Программирование',
    value: 'coding',
    key: '5'
},
{
    title: 'Изобразительное искусство',
    value: 'izo',
    key: '6'
},
{
    title: 'Футбол',
    value: 'value',
    key: '7'
}
];

const responseList = [{
    title: 'Как кататься на скейте',
    description: 'Учим тебя кататься на скейте',
    key: '1'
},
{
    title: 'Как кататься на скейте',
    description: 'Учим тебя кататься на скейте',
    key: '2'
},
{
    title: 'Как кататься на скейте',
    description: 'Учим тебя кататься на скейте',
    key: '3'
}
]


export const Challenges: FC = () => {
    const [chosenTags, setChosenTags] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { execute, value } = useExecuteRequest('endpoint');
    const onChange = (value: string[]) => {
        // setIsLoading(true);  
        const tagsLabels: string[] = value?.reduce<string[]>((acc, curr) => { acc.push(selectData?.find((x) => x?.value === curr)?.title || ''); return acc; }, [])
        setChosenTags(tagsLabels);
        // execute().finally(() => setIsLoading(false));
    }
    return (
        <Spin spinning={isLoading}>
            <Select mode="tags" style={{ width: '100%', marginBottom: '10px' }} placeholder="Выберите талант для обучения" onChange={onChange}>
                {
                    selectData.map((x) => (
                        <Select.Option key={x?.key} value={x?.value}>{x?.title}</Select.Option>
                    ))
                }

            </Select>
            <h1 style={{ marginTop: '0 10px', overflow: 'hidden', overflowWrap: 'break-word' }}>{chosenTags.join(',')}</h1>
            {
                responseList.map((x) => (
                    <Card
                        style={{ width: '100%', marginTop: 16 }}
                        key={x?.key}
                        hoverable
                    >
                        <NavLink to={`/challenges/${x?.key}`}>
                            <Meta
                                avatar={<Avatar />}
                                title={x?.title}
                                description={x?.description}
                            />
                        </NavLink>
                    </Card>
                ))
            }

        </Spin>
    )
}