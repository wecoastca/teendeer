import React from 'react';
import { UserOutlined, LaptopOutlined, StarFilled } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { useHistory } from 'react-router-dom';

const { SubMenu } = Menu;
const { Sider } = Layout;

const AppSider = () => {
  const history = useHistory();

  const handleSelect = (info: { key: string }) => {
    history.push(info?.key);
  };

  return (
    <Sider width={200}>
      <Menu
        mode="inline"
        onSelect={handleSelect}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['users', 'challenges']}
        style={{ height: '100%' }}>
        <SubMenu key="users" icon={<UserOutlined />} title="Пользователи">
          <Menu.Item key="/users">Список пользователей</Menu.Item>
          <Menu.Item key="/talents">Таланты</Menu.Item>
          <Menu.Item key="/achievements">Достижения</Menu.Item>
        </SubMenu>
        <SubMenu key="challenges" icon={<LaptopOutlined />} title="Челенджи">
          <Menu.Item key="/challenges">Список челенджей</Menu.Item>
          <Menu.Item key="/tasks">Задачи</Menu.Item>
          <Menu.Item key="/steps">Шаги</Menu.Item>
        </SubMenu>
        <SubMenu
          key="challenges"
          icon={<StarFilled />}
          style={{
            fontWeight: 'bold',
            color: '#520339',
            borderTop: '2px solid #520339',
          }}
          title="Таланты">
          <Menu.Item
            key="/search"
            disabled={false}
            style={{ fontWeight: 'normal' }}>
            Поиск талантов
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default AppSider;
