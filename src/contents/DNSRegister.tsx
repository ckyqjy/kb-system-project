import React from 'react';
import { useNavigate } from 'react-router';
import { Form, Input, InputNumber, Button, Select } from 'antd';

export default function DNSRegister(): JSX.Element {
  const layout = {
    labelCol: { span: 3 },
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
        <Form.Item name={['user', 'name']} label="신청인" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item label="도메인명" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item label="구분">
        <Select defaultValue={"신규"}>
          <Select.Option value="신규">신규</Select.Option>
          <Select.Option value="변경">변경</Select.Option>
          <Select.Option value="삭제">삭제</Select.Option>
          <Select.Option value="기간연장">기간연장</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="외부 호스팅 여부">
        <Select defaultValue={"외부 호스팅 사용"}>
          <Select.Option value="외부 호스팅 사용">외부 호스팅 사용</Select.Option>
          <Select.Option value="외부 호스팅 미사용">외부 호스팅 미사용</Select.Option>
        </Select>
      </Form.Item>
        <Form.Item name={['user', 'website']} label="IP 주소">
            <Input />
        </Form.Item>
        <Form.Item name={['user', 'introduction']} label="도메인 사용용도">
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