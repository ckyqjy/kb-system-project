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
import backgroundImage from "../../assets/img/main-bg.png";
import carouselImage from "../../assets/img/carousel-bg.jpeg";
import React from "react";
import Search from "antd/lib/input/Search";
import { ColumnsType } from "antd/lib/table";
import { Footer } from "antd/lib/layout/layout";

export default function DefaultLayout(): JSX.Element {
  const { Header, Content, Sider } = Layout;
  const serviceList = ["웹 호스팅", "웹 스토리지", "도메인"];
  const actionList = ["신청", "조회"];
  const contentsList = Object.values(PAGE_PATH)
    .map((path) => `/${path}`)
    .slice(
      Object.values(PAGE_PATH).length - serviceList.length * actionList.length,
      Object.values(PAGE_PATH).length
    );
  const navi = useNavigate();
  const items1: MenuProps["items"] = serviceList.map((key) => ({
    key,
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

  interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
  }

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

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
        <img alt="img" src={logo} style={{ width: "180px", height: "70px" }} />
        <Menu
          style={{
            fontSize: "20px",
            fontWeight: "bolder",
            color: "#333",
            display: "inline-block",
            width: "100% - 180px",
          }}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
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
        <div className="site-layout-background">
          <Carousel
            autoplay
            style={{ border: "2px", borderColor: "#333", borderWidth: "1" }}
          >
            <div>
              <div
                style={{
                  height: "500px",
                  width: "100%",
                  color: "white",
                  lineHeight: "500px",
                  backgroundImage: `url("${carouselImage}")`,
                  backgroundColor: "#364d79",
                  backgroundSize: '100% 100%'
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    marginLeft: "10%",
                    fontWeight: "bolder",
                    paddingTop: '30px'
                  }}
                >
                  누구나 할 수 있는 홈페이지 제작!
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "500px",
                  width: "100%",
                  color: "white",
                  lineHeight: "500px",
                  backgroundImage: `url("${carouselImage}")`,
                  backgroundColor: "#364d79",
                  backgroundSize: '100% 100%'
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    marginLeft: "10%",
                    fontWeight: "bolder",
                    paddingTop: '30px'
                  }}
                >
                  리눅스 웹호스팅 시작가 50% 할인!
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  height: "500px",
                  width: "100%",
                  color: "white",
                  lineHeight: "500px",
                  backgroundImage: `url("${carouselImage}")`,
                  backgroundColor: "#364d79",
                  backgroundSize: '100% 100%'
                }}
              >
                <div
                  style={{
                    fontSize: "40px",
                    marginLeft: "10%",
                    fontWeight: "bolder",
                    paddingTop: '30px'
                  }}
                >
                  도메인 신규 등록 25% 할인!
                </div>
              </div>
            </div>
          </Carousel>

          <div
            style={{
              height: "344px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Row>
              <Col span={12}>
                <div
                  style={{
                    paddingLeft: "20%",
                    paddingTop: "60px",
                    display: "flex",
                  }}
                >
                  <div
                    style={{
                      paddingTop: "60px",
                    }}
                  >
                    <button
                      style={{
                        fontWeight: "bolder",
                        fontSize: "30px",
                        height: "100px",
                        width: "100px",
                        backgroundColor: "white",
                        border: "1px",
                        borderRight: "0px",
                        borderStyle: "solid",
                        borderColor: "#dddddd",
                      }}
                    >
                      www.
                    </button>
                    <input
                      style={{
                        fontSize: "30px",
                        height: "100px",
                        width: "500px",
                        display: "inline",
                        border: "1px",
                        borderLeft: "0px",
                        borderStyle: "solid",
                        borderColor: "#dddddd",
                      }}
                      placeholder="등록하실 도메인을 입력해주세요"
                    />
                    <button
                      style={{
                        fontSize: "30px",
                        fontWeight: "bolder",
                        height: "100px",
                        width: "100px",
                        display: "inline-block",
                        backgroundColor: "#009cff",
                        border: "1px",
                        borderStyle: "solid",
                        borderColor: "#dddddd",
                        color: "white",
                      }}
                    >
                      검색
                    </button>
                  </div>
                </div>
              </Col>
              <Col span={12}>
                <div
                  style={{
                    height: "200px",
                    marginTop: "70px",
                    paddingLeft: "20%",
                    paddingTop: "3%",
                    fontSize: "35px",
                    fontWeight: "bolder",
                  }}
                >
                  어떤 상품을 고를지 고민되시나요? <br />
                  나에게 맞는 서비스를 찾아보세요!
                </div>
              </Col>
            </Row>
          </div>

          <div
            style={{
              height: "728px",
              width: "100%",
              background:
                `url("${backgroundImage}")`,
              backgroundColor: "white",
              textAlign: "center",
              fontSize: "50px",
              color: "white",
              fontWeight: "bolder",
              paddingTop: "300px",
            }}
          >
            웹사이트 운영은 KB에서!
          </div>
          </div>
      </Content>
      <Footer>
      <div
            style={{
              paddingTop: "50px",
              height: "430px",
              width: "100%",
              backgroundColor: "#f9f9f9 !important",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "bolder",
              }}
            >
              문의사항이 있으신가요?
            </div>
            <div
              style={{
                paddingTop: "20px",
                textAlign: "center",
                fontSize: "20px",
              }}
            >
              KB에서 제공하는 서비스에 대하여 궁금한 사항이나 도움이 필요한 경우
              전문 상담팀의 기술 지원을 제공해드리고 있습니다.
              <br /> 문의에 대한 답변은 고객센터 운영 시간 내 받아보실 수
              있으며, 긴급 장애의 경우 24시간 운영하고 있습니다.
            </div>

            <div style={{ color: "white", paddingTop: "20px" }}>
              <Row>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}>
                  <button
                    style={{
                      width: "160px",
                      height: "60px",
                      fontSize: "14px",
                      backgroundColor: "#0082de",
                      border: "0px",
                      borderRadius: "0.75",
                    }}
                  >
                    1:1 문의하기
                  </button>
                </Col>
                <Col span={2}>
                  <button
                    style={{
                      width: "200px",
                      height: "60px",
                      fontSize: "14px",
                      backgroundColor: "#0082de",
                      border: "0px",
                      borderRadius: "0.75",
                    }}
                  >
                    자주묻는 질문과 답변
                  </button>
                </Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
                <Col span={2}></Col>
              </Row>
            </div>
            <div
              style={{
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              일반 문의 : 09:30 ~ 17:30 (주말, 공휴일 제외) 장애 문의 : 24시간
              운영
            </div>
          </div>
          <div
            style={{
              padding: "30px",
              height: "365px",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <Row>
              <Col span={6}>
                <div
                  style={{
                    textAlign: "center",
                    fontSize: "30px",
                    fontWeight: "bolder",
                    paddingTop: "100px",
                  }}
                >
                  공지사항
                </div>
                <div
                  style={{
                    textAlign: "center",
                    paddingTop: "50px",
                  }}
                >
                  더보기
                </div>
              </Col>
              <Col span={18}>
                <Table columns={columns} dataSource={data} showHeader={false} style={{ paddingTop: '70px'}}/>
              </Col>
            </Row>
          </div>
          <div
            style={{
              height: "1027px",
              width: "100%",
              backgroundColor: "#f3f6f8",
            }}
          >
            <div
              style={{
                textAlign: "center",
                paddingTop: "50px",
                fontWeight: "bolder",
              }}
            >
              도메인 웹호스팅 고객센터
            </div>
          </div>
          <div
            style={{
              height: "44px",
              width: "100%",
              backgroundColor: "#535353",
              color: "white",
              paddingTop: "20px",
            }}
          >
            <Row>
              <Col span={1}></Col>
              <Col span={1}>회사소개</Col>
              <Col span={1}>이용약관 </Col>
              <Col span={2}>개인정보처리방침</Col>
              <Col span={2}>이메일 무단수집 거부</Col>
              <Col span={2}>이메일</Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={2}></Col>
              <Col span={1}></Col>
            </Row>
          </div>
          <div
            style={{
              height: "245px",
              width: "100%",
              backgroundColor: "#535353",
            }}
          ></div>
      </Footer>
    </Layout>
  );
}
