import React, { FC } from 'react';
import logo from 'assets/logo.svg';
import styles from './Header.module.less';
import { Header as AntHeader } from 'antd/lib/layout/layout';

export const Header: FC = () => {
  return (
    <AntHeader className={styles.header}>
      <img src={logo} className={styles.logo} alt="logo" />
      <div className={styles.brand}>TEENDEER</div>
    </AntHeader>
  )
}