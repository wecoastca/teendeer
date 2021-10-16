import { Button } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import React, { FC } from 'react';
import styles from './Navbar.module.less';
import { ClearOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

export const Navbar: FC = () => {

    return (
        <Footer className={styles.navbar}>
            <div className={styles.buttonContainer}>
                <Button icon={<ClearOutlined />} className={styles.navbarButton}>
                    <Link to="/afisha">Афиша</Link>
                </Button>
                <Button icon={<ClearOutlined />} className={styles.navbarButton}>
                    <Link to="/achieve">Достижения</Link>
                </Button>
                <Button icon={<ClearOutlined />} className={styles.navbarButton}>
                    <Link to="/challenges">Челенджи</Link>
                </Button>
                <Button icon={<ClearOutlined />} className={styles.navbarButton}>
                    <Link to="/store">Магазин</Link>
                </Button>
                <Button icon={<ClearOutlined />} className={styles.navbarButton}>
                    <Link to="/profile">Профиль</Link>
                </Button>

            </div>
        </Footer>
    )
}