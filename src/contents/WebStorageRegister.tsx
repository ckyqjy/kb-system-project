import React from "react";
import { useNavigate } from "react-router";
import { Form, Input, InputNumber, Button, Select } from "antd";

export default function WebStorageRegister(): JSX.Element {
  const layout = {
    labelCol: { span: 3 },
    wrapperCol: { span: 8 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#0070c0",
          color: "white",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        웹 호스팅 등록 할인 이벤트 / 쿠폰코드 KBEVENT
      </div>
      <h2>웹 스토리지 신청</h2>
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="신청인"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="신청 요금제">
          <Select defaultValue={"10GB"}>
            <Select.Option value="10GB">10GB</Select.Option>
            <Select.Option value="30GB">30GB</Select.Option>
            <Select.Option value="50GB">50GB</Select.Option>
            <Select.Option value="100GB">100GB</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="VIP 서비스 이용 여부">
          <Select defaultValue={"이용"}>
            <Select.Option value="이용">이용</Select.Option>
          </Select>
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
