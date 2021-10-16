import React from 'react';
import { Layout, Menu } from 'antd';

import styles from './styles.module.less';

const { Header } = Layout;

const AppHeader = () => {
  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Главная</Menu.Item>
        <Menu.Item key="2">Пользователи</Menu.Item>
        <Menu.Item key="3">Аналитика</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
