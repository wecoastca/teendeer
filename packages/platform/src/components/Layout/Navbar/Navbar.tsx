import { Button, Divider } from 'antd';
import cn from 'classnames';
import { Footer } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import styles from './Navbar.module.less';
import { ClearOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

export const Navbar: FC = () => {
  const TABS = [
    { name: 'Афиша', pathname: '/afisha', icon: <ClearOutlined /> },
    { name: 'Достижения', pathname: '/achieve', icon: <ClearOutlined /> },
    {
      name: 'Челенджи',
      pathname: '/challenges',
      icon: <ClearOutlined />,
      target: true,
    },
    { name: 'Магазин', pathname: '/store', icon: <ClearOutlined /> },
    { name: 'Профиль', pathname: '/profile', icon: <ClearOutlined /> },
  ];

  return (
    <Footer className={styles.navbar}>
      <div className={styles.buttonContainer}>
        {TABS.map((tab) => (
          <NavLink
            to={tab.pathname}
            activeClassName={cn(styles.active)}
            className={cn(styles.navbarButton, {
              [styles.target]: tab.target,
            })}>
            {tab.icon}
            {tab.name}
          </NavLink>
        ))}
      </div>
    </Footer>
  );
};
