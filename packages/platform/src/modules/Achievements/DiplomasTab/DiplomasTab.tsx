import React, { FC } from "react";
import { Upload, List, Avatar } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import styles from './DiplomasTab.module.less';

const { Dragger } = Upload;

const data = [
    {
        title: 'Грамота 1',
        description: 'Дата загрузки: 31.05.2020',
        key: "1",
    },
    {
        title: 'Грамота 2',
        description: 'Дата загрузки: 31.05.2020',
        key: "2",
    },
    {
        title: 'Грамота 3',
        description: 'Дата загрузки: 31.05.2020',
        key: "3",
    },
    {
        title: 'Грамота 4',
        description: 'Дата загрузки: 31.05.2020',
        key: "4",
    },
    {
        title: 'Грамота 5',
        description: 'Дата загрузки: 31.05.2020',
        key: "5",
    }
]

export const DiplomasTab: FC = () => {
    return (
        <>
            <Dragger className={styles.upload} name="diploma" multiple={true} action="https://www.mocky.io/v2/5cc8019d300000980a055e76" >
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Загрузите ваши грамоты</p>
            </Dragger>
            <List
                itemLayout="horizontal"
                dataSource={data}
                rowKey={(item) => item?.key || ''}
                renderItem={(item, i) => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src="https://icons.iconarchive.com/icons/goescat/macaron/128/text-editor-icon.png" />}
                            title={<a href="">{item?.title}</a>}
                            description={item?.description}
                        />
                    </List.Item>
                )}
            />
        </>
    )
}