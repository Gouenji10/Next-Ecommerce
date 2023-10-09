'use client'
import { Breadcrumb, Button, Drawer, Form, Input, Select, Space, Table } from 'antd';
import { HomeOutlined, PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
    const [open, setOpen] = useState(false);
    const [form] = Form.useForm();
    const toogleDrawer = () => {
        setOpen(!open);
    };


    const dataSource = [
        { key: '1', name: 'Mike', age: 32, address: '10 Downing Street', },
        { key: '2', name: 'John', age: 42, address: '10 Downing Street', },
    ];

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name', },
        { title: 'Age', dataIndex: 'age', key: 'age', },
        { title: 'Address', dataIndex: 'address', key: 'address', },
        { title: 'Actions', dataIndex: 'action', key: 'action', },
    ];
    return (
        <>
            <Breadcrumb
                className='breadcrumb-wrapper'
                items={[
                    { title: (<HomeOutlined />) },
                    { title: (<Link href={'/admin/dashboard'}><span> Dashboard</span></Link>) },
                    { title: (<Link href={'/admin/products'}><span>Products</span></Link>) },
                    { title: 'Categories' },
                ]}
                separator={<RightOutlined />}
            />
            <div className='content'>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: -10,
                    marginBottom: 10
                }}>
                    <h2>Categories</h2>
                    <Button
                        icon={<PlusCircleOutlined />}
                        type='primary'
                        onClick={toogleDrawer}
                    >Add New</Button>
                </div>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
            <Drawer
                title="Add New Category"
                placement={'right'}
                width={500}
                onClose={toogleDrawer}
                open={open}
                maskClosable={false}
                extra={
                    <Space>
                        <Button onClick={toogleDrawer}>Cancel</Button>
                        <Button type="primary" onClick={toogleDrawer}>
                            OK
                        </Button>
                    </Space>
                }
            >
                <div className='drawer-content'>
                    <Form
                        layout={'vertical'}
                        form={form}
                    >
                        <Form.Item label="Name">
                            <Input
                                placeholder="Name..."
                            />
                        </Form.Item>
                        <Form.Item label="Slug">
                            <Input
                                placeholder="Slug..."
                            />
                        </Form.Item>
                        <Form.Item label="Parent Category">
                            <Select
                                defaultValue="0"
                                options={[
                                    { value: '0', label: 'Select Parent Category' },
                                    { value: 'lucy', label: 'Lucy' },
                                    { value: 'Yiminghe', label: 'yiminghe' },
                                    { value: 'disabled', label: 'Disabled', disabled: true },
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Drawer>

        </>
    )
}