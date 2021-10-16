import React from 'react';
import { Layout } from 'antd';

import AppSider from '../AppSider/AppSider';
import AppBreadcrumbs from '../AppBreadcrumbs/AppBreadcrumbs';
import AppHeader from '../AppHeader/AppHeader';

import styles from './styles.module.less';
import AppFooter from '../AppFooter/AppFooter';

type Props = {
  children: React.ReactNode;
};

const { Content } = Layout;

const AppLayout = ({ children }: Props) => {
  return (
    <Layout>
      <AppHeader />
      <Content style={{ padding: '0 50px' }}>
        <AppBreadcrumbs />
        <Layout style={{ padding: '24px 0' }}>
          <AppSider />
          <Content className={styles['site-layout-background']}>
            {children}
          </Content>
        </Layout>
      </Content>
      <AppFooter />
    </Layout>
  );
};

export default AppLayout;
