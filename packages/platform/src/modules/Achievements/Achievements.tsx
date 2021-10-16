import React, { FC, useState } from 'react'
import { Menu } from 'antd';
import { FireTwoTone, ContainerTwoTone } from '@ant-design/icons';
import { AchieveTab } from './AchieveTab';
import { DiplomasTab } from './DiplomasTab';

export const Achievements: FC = () => {
    const [activeTab, setActiveTab] = useState('achieve');
    const handleMenuClick = (e: any) => {
        setActiveTab(e.key);
    }
    return (
        <>
            <Menu onClick={handleMenuClick} selectedKeys={[activeTab]} mode={'horizontal'} style={{ justifyContent: "space-around" }}>
                <Menu.Item key="achieve" icon={<FireTwoTone twoToneColor="#520339" />} >
                    Ачивки
                </Menu.Item>
                <Menu.Item key="diplomas" icon={<ContainerTwoTone twoToneColor="#520339" />}>
                    Грамоты
                </Menu.Item>
            </Menu>
            {activeTab === 'achieve' ? <AchieveTab /> : <DiplomasTab />}
        </>

    )
}