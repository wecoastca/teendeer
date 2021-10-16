import React from 'react';
import { UserOutlined, LaptopOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { SubMenu } = Menu;
const { Sider } = Layout;

const AppSider = () => {
  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['users', 'challenges']}
        style={{ height: '100%' }}>
        <SubMenu key="users" icon={<UserOutlined />} title="Пользователи">
          <Menu.Item key="1">Список</Menu.Item>
          <Menu.Item key="2">Таланты</Menu.Item>
          <Menu.Item key="3">Достижения</Menu.Item>
        </SubMenu>
        <SubMenu key="challenges" icon={<LaptopOutlined />} title="Челенджи">
          <Menu.Item key="5">Список</Menu.Item>
          <Menu.Item key="6">Задачи</Menu.Item>
          <Menu.Item key="7">Шаги</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AppSider;
