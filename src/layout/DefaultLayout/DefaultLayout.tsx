import type { MenuProps } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { readBuilderProgram } from 'typescript';
import bg from '../../assets/img/menu-bg.jpg';
import { url } from 'inspector';

const { Header, Content, Sider } = Layout;
const serviceList = ['웹 호스팅', '웹 스토리지', 'DNS'];
const actionList = ['신청', '조회'];
const items1: MenuProps['items'] = serviceList.map(key => ({
  key,
  label: `${key}`,
}));

const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);

    return {
      key: `sub${key}`,
      label: `${serviceList[index]} 신청`,

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

export default () => (
  <Layout>
    <Header style={{ backgroundImage: "url(" + "https://pixabay.com/get/g6c9c6b79e6a8b71e1f0e9baeaa1e2aae8c9639ebec6642e80034647cc55d7556a28d22b831c75e44e0d8daf5feea56652594404884234378e98b9e432ab7174a_1920.png" + ")", height: '300px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}  className="header">
      <Menu style={{backgroundColor: "rgba(255, 255, 255, 0.0)", marginTop: '200px', color: 'white', fontWeight: 'bolder', fontSize: '20px'}}  mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
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
          Content
        </Content>
      </Layout>
    </Layout>
  </Layout>
);