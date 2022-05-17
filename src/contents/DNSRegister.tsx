import React from 'react';
import { useNavigate } from 'react-router';
import { Form, Input, InputNumber, Button } from 'antd';

export default function DNSRegister(): JSX.Element {
  const layout = {
    labelCol: { span: 1 },
    wrapperCol: { span: 8 },
    };

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values: any) => {
console.log(values);
};

  return (
    <>
        <h2>DNS 신청서</h2>
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'age']} label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
            <InputNumber />
        </Form.Item>
        <Form.Item name={['user', 'website']} label="Website">
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="Introduction">
            <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 1 }}>
            <Button type="primary" htmlType="submit">
            Submit
            </Button>
        </Form.Item>
        </Form>
    </>
    );
  }