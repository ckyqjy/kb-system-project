import React from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';
import { Form, Input, InputNumber, Button, Select } from 'antd';

export default function DNSRegister(): JSX.Element {
  const [form] = Form.useForm<FormState>();
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };

  interface FormState {
    username: string;
    domainname: string;
    class1: string;
    class2: string;
    ipaddr: string;
    description: string;
  }
    
  const onClick = () => {
    const { username, domainname, ipaddr } = form.getFieldsValue();
    const url = `${process.env.REACT_APP_URL}/dnsreg/${domainname}`;
    axios
      .get(url)
      .then(res => res.data)
  }

  return (
    <>
        <h2>DNS 신청서</h2>
        <Form {...layout} form={form} name="nest-messages">
        <Form.Item name="username" label="신청인" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="domainname" label="도메인명" rules={[{ required: true }]}>
            <Input />
        </Form.Item>
        <Form.Item name="class1" label="구분">
        <Select defaultValue={"신규"}>
          <Select.Option value="신규">신규</Select.Option>
          <Select.Option value="변경">변경</Select.Option>
          <Select.Option value="삭제">삭제</Select.Option>
          <Select.Option value="기간연장">기간연장</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="class2" label="외부 호스팅 여부">
        <Select defaultValue={"외부 호스팅 사용"}>
          <Select.Option value="외부 호스팅 사용">외부 호스팅 사용</Select.Option>
          <Select.Option value="외부 호스팅 미사용">외부 호스팅 미사용</Select.Option>
        </Select>
      </Form.Item>
        <Form.Item name='ipaddr' label="IP 주소">
            <Input />
        </Form.Item>
        <Form.Item name='description' label="도메인 사용용도">
            <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 1 }}>
            <Button type="primary" htmlType="submit" onClick={onClick}>
            Submit
            </Button>
        </Form.Item>
        </Form>
    </>
    );
  }