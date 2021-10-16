import React, { FC } from "react";
import { List, Avatar } from 'antd';

const data = [
    {
        title: 'Достижение',
        description: 'Описание достижения',
        key: "1",
    },
    {
        title: 'Достижение',
        description: 'Описание достижения',
        key: "2",
    },
    {
        title: 'Достижение',
        description: 'Описание достижения',
        key: "3",
    },
    {
        title: 'Достижение',
        description: 'Описание достижения',
        key: "4",
    },
    {
        title: 'Достижение',
        description: 'Описание достижения',
        key: "5",
    }
]
export const AchieveTab: FC = () => {
    return (
        <List
            itemLayout="horizontal"
            dataSource={data}
            rowKey={(item) => item?.key || ''}
            renderItem={(item, i) => (
                <List.Item>
                    <List.Item.Meta
                        avatar={<Avatar src="https://icons.iconarchive.com/icons/goescat/macaron/128/calligra-krita-icon.png" />}
                        title={<a href="">{item?.title}</a>}
                        description={item?.description}
                    />
                </List.Item>
            )}
        />
    )
}