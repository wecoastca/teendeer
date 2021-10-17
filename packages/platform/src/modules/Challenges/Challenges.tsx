import { Select, Card, Avatar, Spin } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { listTalents, listChallenges } from "@teendeer/api";
import { Talent, Challenge } from '@teendeer/types/dist';

const { Meta } = Card;

export const Challenges: FC = () => {
    const [chosenTag, setChosenTag] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [talants, setTalants] = useState<Talent[]>([]);
    const [challenges, setChallenges] = useState<Challenge[]>([]);

    useEffect(() => {
        setIsLoading(true);
        listTalents().then((res) => setTalants(res)).finally(() => setIsLoading(false));
    },[])

    const onChange = (value: string[]) => {
        setChosenTag(value?.[0]);
        setIsLoading(true);
        listChallenges().then((res) => setChallenges(res)).finally(() => setIsLoading(false));
    }
    return (
        <Spin spinning={isLoading}>
            <Select mode="tags" style={{ width: '100%', marginBottom: '10px' }} placeholder="Выберите талант для обучения" onChange={onChange}>
                {
                    talants?.map((x) => (
                        <Select.Option key={x?.id} value={x?.name} >{x?.name}</Select.Option>
                    ))
                }

            </Select>
            <h1 style={{ marginTop: '0 10px', overflow: 'hidden', overflowWrap: 'break-word' }}>{chosenTag}</h1>
            {
                challenges?.map((x) => (
                    <Card
                        style={{ width: '100%', marginTop: 16, borderColor: 'black' }}
                        key={x?.id}
                        hoverable
                    >
                        <NavLink to={`/challenges/${x?.id}`}>
                            <Meta
                                avatar={<Avatar alt="avatar" src={x?.image_url} />}
                                title={x?.challenge_name}
                                description={x?.description}
                            />
                        </NavLink>
                    </Card>
                ))
            }

        </Spin>
    )
}