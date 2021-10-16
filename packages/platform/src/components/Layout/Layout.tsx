import React, { FC } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Layout as AntLayout } from 'antd';
import styles from './Layout.module.less';
const { Content } = AntLayout;

export const Layout: FC = ({ children }) => {
    return (
        <AntLayout className={styles.appLayout}>
            <Header />
            <Content className={styles.mobileLayout}>
                <div className={styles.contentLayout}>{children}</div>
            </Content> 
            <Navbar />
        </AntLayout>
    )
}