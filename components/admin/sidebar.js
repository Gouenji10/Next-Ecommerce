
import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    InboxOutlined,
    TeamOutlined,
    ShopOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
export default function SidebarAdmin() {
    const { Sider } = Layout;
    const [collapsed, setCollapsed] = useState(false);
    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem((<Link href="/admin/dashboard">Dashboard</Link>), '1', <DashboardOutlined />),
        getItem('Ecommerce', 'sub1', <ShopOutlined />, [
            getItem('Orders', '2'),
            getItem('Refunds', '3'),
            getItem('Shipping', '4'),
            getItem('Settings', '5')
        ]),
        getItem('Marketing', 'sub2', <InboxOutlined />, [
            getItem('Coupons', '6'),
        ]),
        getItem('Products', 'sub3', <InboxOutlined />, [
            getItem((<Link href="/admin/products/">All Products</Link>), '7'),
            getItem((<Link href="/admin/products/categories">Categories</Link>), '8'),
            getItem((<Link href="/admin/products/attributes">Attributes</Link>), '9'),
            getItem('Tags', '10'),
        ]),
        getItem('Users', '11', <TeamOutlined />),
        getItem('Settings', '12', <SettingOutlined />),
    ];
    return (
        <Sider
            theme='light'
            collapsible
            collapsed={collapsed}
            onCollapse={(value) => setCollapsed(value)}
            width={250}
            className='layout-sidebar'
        >
            <div className='logo-wrapper'>
                <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-dark.svg" />
            </div>
            <Menu
                theme="light"
                defaultSelectedKeys={['1']}
                mode="inline"
                items={items}
                className='admin-sidebar-menu'
            />
        </Sider>
    )
}