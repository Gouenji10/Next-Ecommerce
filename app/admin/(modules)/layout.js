'use client'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import HeaderAdmin from "@/components/admin/header";
import SidebarAdmin from "@/components/admin/sidebar";
import '@/styles/admin.style.scss'
export default function DashboardLayout({ children }) {

    const { Header, Content, Footer, Sider } = Layout;

    return (
        <main className='admin-layout'>
            <Layout className='layout-wrapper'>
                <SidebarAdmin />
                <Layout className='admin-inner-layout-wrapper'>
                    <HeaderAdmin />
                    <Content className='admin-content-wrapper'>
                        <div className='content-wrapper'>
                            {children}
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',
                            fontFamily: 'Poppins'
                        }}
                    >
                        Ant Design ©2023 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        </main>
    )
}