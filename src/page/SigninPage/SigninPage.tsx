import { Checkbox, Form, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import { RootState } from "../../common/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CheckboxChangeEvent } from "antd/lib/checkbox";
import styles from "./SigninPage.module.css";
import logo from "../../assets/img/logo.png";
import { setUserData } from "../../common/slices/userSlice";

interface FormState {
  userId: string;
  password: string;
  remember: boolean;
}

export default function SigninPage(): JSX.Element {
  const [form] = Form.useForm<FormState>();
  const dispatch = useDispatch();
  const navi = useNavigate();

  const onClickSignin = () => {
    const { userId, remember, password } = form.getFieldsValue();
    if (userId) {
      global.localStorage.setItem("userName", userId);
      global.localStorage.setItem("userClass", password);
    } else {
      global.localStorage.removeItem("userName");
      global.localStorage.removeItem("userClass");
    }
    dispatch(setUserData({ userName: userId, userClass: password }));
    navi("/");
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.components}>
          <div className={styles.box}>
            <div className={styles.bi}>
              <img alt="img" src={logo} />
            </div>
            <div
              style={{
                position: "relative",
                objectFit: "contain",
                marginTop: "60px",
              }}
            >
              <Form form={form} name="basic" autoComplete="off">
                <Form.Item
                  className={styles.inputId}
                  name="userId"
                  rules={[{ message: "Please input your user ID!" }]}
                >
                  <Input
                    autoFocus
                    className={styles.inputItem}
                    bordered={false}
                    placeholder="ID"
                    width="100%"
                    height="100%"
                  />
                </Form.Item>
                <Form.Item
                  className={styles.inputPw}
                  name="password"
                  rules={[{ message: "Please input your password!" }]}
                >
                  <Input.Password
                    bordered={false}
                    className={styles.inputItem}
                    placeholder="PASSWORD"
                    width="100%"
                    height="100%"
                  />
                </Form.Item>
                <button
                  className={styles.btn}
                  type="submit"
                  onClick={onClickSignin}
                >
                  LOGIN
                </button>
              </Form>
            </div>
          </div>
          <span className={styles.copyright}>
            Copyright(c) 2022 All Rights Reserved
          </span>
        </div>
      </div>
    </>
  );
}
