import React, { useEffect } from "react";
import { Avatar, MenuProps } from "antd";
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
import { RootState } from "../../common/store";
import { useSelector } from "react-redux";
import ManagerView from "../../contents/ManagerView";

export default function DefaultLayout(): JSX.Element {
  const { Header, Content } = Layout;
  const serviceList = global.localStorage.getItem("userClass")?.match("admin")
    ? ["웹 호스팅", "웹 스토리지", "도메인", "관리자 페이지"]
    : ["웹 호스팅", "웹 스토리지", "도메인"];
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

  useEffect(() => {
    if (!global.localStorage.getItem("userClass")) navi("/signin");
  }, []);

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
        <Avatar style={{ marginTop: "15px" }}>
          <button
            style={{
              backgroundColor: "transparent",
              border: 0,
              cursor: "pointer",
            }}
            onClick={() => {
              navi("/signin");
              global.localStorage.removeItem("userName");
              global.localStorage.removeItem("userClass");
            }}
          >
            {global.localStorage.getItem("userName")?.charAt(0)}
          </button>
        </Avatar>
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
          <Route
            path={`/${PAGE_PATH.managerview}/*`}
            element={<ManagerView />}
          />
        </Routes>
        <Common />
      </Content>
    </Layout>
  );
}
