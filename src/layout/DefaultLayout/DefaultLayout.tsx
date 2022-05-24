import { Carousel, Col, MenuProps, Row, Space, Table, Tag } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { readBuilderProgram } from "typescript";
import bg from "../../assets/img/menu-bg.jpg";
import { url } from "inspector";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../common/constList";
import DashBoardPage from "../../page/DashBoardPage/DashBoardPage";
import WebHostingRegister from "../../contents/WebHostingRegister";
import WebHostingView from "../../contents/WebHostingView";
import WebStorageRegister from "../../contents/WebStorageRegister";
import WebStorageView from "../../contents/WebStorageView";
import DNSRegister from "../../contents/DNSRegister";
import DNSView from "../../contents/DNSView";
import logo from "../../assets/img/logo.png";

import React from "react";
import Search from "antd/lib/input/Search";
import { ColumnsType } from "antd/lib/table";
import { Footer } from "antd/lib/layout/layout";
import Common from "../../contents/Common";
import Main from "../../contents/Main";

export default function DefaultLayout(): JSX.Element {
  const { Header, Content, Sider } = Layout;
  const serviceList = ["웹 호스팅", "웹 스토리지", "도메인"];
  const actionList = ["신청", "조회"];
  const contentsList = Object.values(PAGE_PATH)
    .map((path) => `/${path}`)
    .slice(
      Object.values(PAGE_PATH).length - serviceList.length,
      Object.values(PAGE_PATH).length
    );
  const navi = useNavigate();
  const items1: MenuProps["items"] = serviceList.map((key, index) => ({
    key: index,
    label: `${key}`,
  }));

  const items2: MenuProps["items"] = [
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  ].map((icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      label: `${serviceList[index]}`,
      icon: React.createElement(icon),
      children: new Array(2).fill(null).map((_, j) => {
        const subKey = index * 2 + j + 1;
        return {
          key: subKey,
          label: `${serviceList[index]} ${actionList[j]}`,
        };
      }),
    };
  });

  return (
    <Layout style={{ overflow: "auto" }}>
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: "white",
          height: "70px",
          display: "flex",
        }}
        className="header"
      >
        <img
          alt="img"
          src={logo}
          style={{
            width: "180px",
            height: "70px",
            marginLeft: "-40px",
            cursor: "pointer",
          }}
          onClick={() => {
            navi("/");
          }}
        />

        <Menu
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
            color: "#333",
            display: "inline-block",
            width: "100%",
          }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
          onClick={(e) => {
            const pagePath = contentsList[Number(e.key)];
            navi(pagePath);
          }}
        />
      </Header>
      {/* <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
          onClick={e => {
            const pagePath = contentsList[Number(e.key) - 1];
            navi(pagePath);
          }}
        />
      </Sider> */}
      <Content className="site-layout">
        <div style={{ paddingTop: "70px" }}></div>
        <Routes>
          <Route path={`/${PAGE_PATH.home}`} element={<Main />} />
          <Route path={`/${PAGE_PATH.main}`} element={<Main />} />
          <Route path={`/${PAGE_PATH.dashboard}`} element={<DashBoardPage />} />
          <Route
            path={`/${PAGE_PATH.hostingreg}`}
            element={<WebHostingRegister />}
          />
          {/* <Route
            path={`/${PAGE_PATH.hostingview}`}
            element={<WebHostingView />}
          /> */}
          <Route
            path={`/${PAGE_PATH.storagereg}`}
            element={<WebStorageRegister />}
          />
          {/* <Route
            path={`/${PAGE_PATH.storageview}`}
            element={<WebStorageView />}
          /> */}
          <Route path={`/${PAGE_PATH.dnsreg}`} element={<DNSRegister />} />
          {/* <Route path={`/${PAGE_PATH.dnsview}`} element={<DNSView />} /> */}
        </Routes>
        <Common />
      </Content>
    </Layout>
  );
}
