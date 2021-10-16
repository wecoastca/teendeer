import React from 'react';
import { Layout, Menu } from 'antd';

import styles from './styles.module.less';
import { useHistory } from 'react-router-dom';

const { Header } = Layout;

const AppHeader = () => {
  const history = useHistory();

  const handleSelect = (info: { key: string }) => {
    history.push(info?.key);
  };

  return (
    <Header className={styles.header}>
      <div className={styles.logo} />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        onSelect={handleSelect}>
        <Menu.Item key="/">Главная</Menu.Item>
        <Menu.Item key="/users">Пользователи</Menu.Item>
        <Menu.Item key="/404">Аналитика</Menu.Item>
      </Menu>
    </Header>
  );
};

export default AppHeader;
