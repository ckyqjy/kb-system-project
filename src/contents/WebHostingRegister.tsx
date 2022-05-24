import React from "react";
import { useNavigate } from "react-router";
import styles from "./NotFoundPage.module.css";
import { Form, Input, InputNumber, Button, Select } from "antd";

export default function WebHostingRegister(): JSX.Element {
  const layout = {
    labelCol: { span: 2 },
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
      <h2>웹 호스팅 신청서</h2>
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
        <Form.Item label="서버명" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="서버 선택">
          <Select defaultValue={"Apache"}>
            <Select.Option value="Apache">Apache</Select.Option>
            <Select.Option value="Nginx">Nginx</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="개발 언어 선택">
          <Select defaultValue={"PHP"}>
            <Select.Option value="PHP">PHP</Select.Option>
            <Select.Option value="Javascript">Javascript</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="DB 선택">
          <Select defaultValue={"MariaDB"}>
            <Select.Option value="MariaDB">MariaDB</Select.Option>
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
