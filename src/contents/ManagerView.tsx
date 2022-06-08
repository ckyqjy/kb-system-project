import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Layout, MenuProps } from "antd";
import { Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../common/constList";
import LogView from "./LogView";
import StatView from "./StatView";

export default function ManagerView(): JSX.Element {
  const [type, setType] = useState("");
  type MenuItem = Required<MenuProps>["items"][number];
  const navi = useNavigate();
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: "group"
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem;
  }

  const items: MenuProps["items"] = [
    getItem("서버관리", "sub1", <MailOutlined />, [
      getItem(
        "서버 로그 모니터링",
        "g1",
        null,
        [
          getItem("메일 로그", "1"),
          getItem("크론 로그", "2"),
          getItem("매세지 로그", "3"),
        ],
        "group"
      ),
      getItem(
        "서버 스테이터스 모니터링",
        "g2",
        null,
        [getItem("서버 스테이터스", "4")],
        "group"
      ),
    ]),

    getItem("유저관리", "sub2", <AppstoreOutlined />, [
      getItem("Option 5", "5"),
      getItem("Option 6", "6"),
      getItem("Submenu", "sub3", null, [
        getItem("Option 7", "7"),
        getItem("Option 8", "8"),
      ]),
    ]),

    getItem("사이트 관리", "sub4", <SettingOutlined />, [
      getItem("Option 9", "9"),
      getItem("Option 10", "10"),
      getItem("Option 11", "11"),
      getItem("Option 12", "12"),
    ]),
  ];

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e.key);
    setType(e.key);
    if (Number(e.key) < 4) {
      navi(`${PAGE_PATH.logview}`);
    } else if (4 <= Number(e.key)) {
      navi(`${PAGE_PATH.statview}`);
    }
  };

  return (
    <>
      <div
        style={{
          height: "700px",
          backgroundColor: "white",
          padding: "0px",
          overflowX: "hidden",
          overflowY: "auto",
          whiteSpace: "pre-wrap",
        }}
      >
        <Layout hasSider>
          <Sider
            style={{
              overflowX: "hidden",
              height: "100%",
              left: 0,
              top: 0,
              bottom: 0,
              backgroundColor: "white",
            }}
          >
            <div className="logo" />
            <Menu
              onClick={onClick}
              style={{ width: 256 }}
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              items={items}
            />
          </Sider>
          <Layout className="site-layout">
            <Content style={{ overflow: "initial" }}>
              <Routes>
                <Route
                  path={`${PAGE_PATH.logview}`}
                  element={<LogView logType={type} />}
                />
                <Route path={`${PAGE_PATH.statview}`} element={<StatView />} />
              </Routes>
            </Content>
          </Layout>
        </Layout>
      </div>
    </>
  );
}
