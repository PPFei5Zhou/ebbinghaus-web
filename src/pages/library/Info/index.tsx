import React from "react";
import { Form, Input, Button } from 'antd';

const Index: React.FC = () => {
    return (
        <Form>
            <Form.Item name="libraryName" label="名称" rules={[{ required: true }]}>
                <Input />
            </Form.Item>
            <Form.Item name="libraryDescription" label="描述">
                <Input />
            </Form.Item>
            <Form.Item name="libraryDescription" label="描述">
                <Button type="primary" htmlType="submit">
                    新建
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Index;