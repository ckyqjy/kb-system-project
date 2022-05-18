import type { MenuProps } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined, FormOutlined } from '@ant-design/icons';
import { readBuilderProgram } from 'typescript';
import bg from '../../assets/img/menu-bg.jpg';
import { url } from 'inspector';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { PAGE_PATH } from '../../common/constList';
import DashBoardPage from '../../page/DashBoardPage/DashBoardPage';
import WebHostingRegister from '../../contents/WebHostingRegister';
import WebHostingView from '../../contents/WebHostingView';
import WebStorageRegister from '../../contents/WebStorageRegister';
import WebStorageView from '../../contents/WebStorageView';
import DNSRegister from '../../contents/DNSRegister';
import DNSView from '../../contents/DNSView';
import React from 'react';

export default function DefaultLayout(): JSX.Element {
const { Header, Content, Sider } = Layout;
const serviceList = ['웹 호스팅', '웹 스토리지', 'DNS'];
const actionList = ['신청', '조회'];
const contentsList =  Object.values(PAGE_PATH).map(path => `/${path}`).slice(Object.values(PAGE_PATH).length - serviceList.length * actionList.length, Object.values(PAGE_PATH).length);
const navi = useNavigate();
const items1: MenuProps['items'] = serviceList.map(key => ({
  key,
  label: `${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
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
  },
);

return (
  <Layout>
    <Header style={{ opacity: '0.9', backgroundImage: "url(" + "https://pixabay.com/get/g6c9c6b79e6a8b71e1f0e9baeaa1e2aae8c9639ebec6642e80034647cc55d7556a28d22b831c75e44e0d8daf5feea56652594404884234378e98b9e432ab7174a_1920.png" + ")", height: '300px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  className="header">
      {/* <Menu style={{backgroundColor: "rgba(255, 255, 255, 0.0)", marginTop: '200px', color: 'white', fontWeight: 'bolder', fontSize: '20px'}}  mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
      <div style={{opacity: '0.75', marginTop: '210px', color: 'white', fontWeight: 'bolder', fontSize: '45px'}} >KB 네트워크</div>
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
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
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Routes>
            <Route
              path={`/${PAGE_PATH.dashboard}`}
              element={<DashBoardPage />}
            />
            <Route
              path={`/${PAGE_PATH.hostingreg}`}
              element={<WebHostingRegister />}
            />
            <Route
              path={`/${PAGE_PATH.hostingview}`}
              element={<WebHostingView />}
            />
            <Route
              path={`/${PAGE_PATH.storagereg}`}
              element={<WebStorageRegister />}
            />
            <Route
              path={`/${PAGE_PATH.storageview}`}
              element={<WebStorageView />}
            />
            <Route
              path={`/${PAGE_PATH.dnsreg}`}
              element={<DNSRegister />}
            />
            <Route
              path={`/${PAGE_PATH.dnsview}`}
              element={<DNSView />}
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  </Layout>
);
        }