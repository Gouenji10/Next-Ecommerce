'use client'
import { Breadcrumb, Button, Drawer, Form, Input, Select, Space, Table, notification } from 'antd';
import { HomeOutlined, PlusCircleOutlined, RightOutlined } from '@ant-design/icons'
import Link from 'next/link';
import { useState } from 'react';

export default function Page() {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const [api, contextHolder] = notification.useNotification();
    const toogleDrawer = () => {
        setOpen(!open);
        form.resetFields();
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
    const onFinish = async (data) => {
        setLoading(true)
        const res = await fetch('/api/categories/', {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(data),
        })
        if (res?.status === 200) {
            api['success']({
                message: 'Task Complete',
                description: 'Adding Category has been completed successfully.',
            });
            form.resetFields();
            setLoading(false)
        }
        // TODO: add category to the list
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            {contextHolder}
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
                <Table bordered dataSource={dataSource} pagination={false} columns={columns} />
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
                        <Button type="primary" onClick={() => form.submit()} loading={loading}>OK</Button>
                    </Space>
                }
            >
                <div className='drawer-content'>
                    <Form
                        layout={'vertical'}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >
                        <Form.Item
                            label="Name"
                            name='name'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your category name!',
                                },
                            ]}
                        >
                            <Input placeholder="Name..." />
                        </Form.Item>
                        <Form.Item
                            label="Slug"
                            name='slug'
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your category slug!',
                                },
                            ]}
                        >
                            <Input placeholder="Slug..." />
                        </Form.Item>
                        <Form.Item label="Parent Category" name="parent_id">
                            <Select
                                defaultValue={"0"}
                                name="parent_id"
                                options={[
                                    { value: '0', label: 'Select Parent Category' },
                                    { value: '1', label: 'Lucy' },
                                    { value: '2', label: 'yiminghe' },
                                    { value: '3', label: 'Disabled', disabled: true },
                                ]}
                            />
                        </Form.Item>
                    </Form>
                </div>
            </Drawer>
        </>
    )
}