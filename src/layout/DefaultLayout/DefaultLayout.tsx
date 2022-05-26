import React from "react";
import { MenuProps } from "antd";
import { Layout, Menu } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";
import { PAGE_PATH } from "../../common/constList";
import DashBoardPage from "../../page/DashBoardPage/DashBoardPage";
import WebHostingRegister from "../../contents/WebHosting";
import WebStorageRegister from "../../contents/WebStorage";
import DNSRegister from "../../contents/DNS";
import logo from "../../assets/img/logo.png";
import Common from "../../contents/Common";
import Main from "../../contents/Main";
import LogView from "../../contents/LogView";
import StatView from "../../contents/StatView";

export default function DefaultLayout(): JSX.Element {
  const { Header, Content } = Layout;
  const serviceList = ["웹 호스팅", "웹 스토리지", "도메인"];
  const contentsList = Object.values(PAGE_PATH)
    .map((path) => `/${path}`)
    .slice(
      Object.values(PAGE_PATH).length - serviceList.length,
      Object.values(PAGE_PATH).length
    );
  const navi = useNavigate();
  const menuItems: MenuProps["items"] = serviceList.map((key, index) => ({
    key: index,
    label: `${key}`,
  }));

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
          items={menuItems}
          onClick={(e) => {
            const pagePath = contentsList[Number(e.key)];
            navi(pagePath);
          }}
        />
      </Header>
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
          <Route
            path={`/${PAGE_PATH.storagereg}`}
            element={<WebStorageRegister />}
          />
          <Route path={`/${PAGE_PATH.dnsreg}`} element={<DNSRegister />} />
          <Route path={`/${PAGE_PATH.logview}`} element={<LogView />} />
          <Route path={`/${PAGE_PATH.statview}`} element={<StatView />} />
        </Routes>
        <Common />
      </Content>
    </Layout>
  );
}
