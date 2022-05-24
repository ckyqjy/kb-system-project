import React from "react";
import { useNavigate } from "react-router";
import backgroundImage from "../assets/img/main-bg.png";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Row,
  Col,
  Table,
  Space,
  Tag,
} from "antd";
import { ColumnsType } from "antd/lib/table";

export default function Common(): JSX.Element {
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
    <>
      <div
        style={{
          height: "728px",
          width: "100%",
          background: `url("${backgroundImage}")`,
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
          <br /> 문의에 대한 답변은 고객센터 운영 시간 내 받아보실 수 있으며,
          긴급 장애의 경우 24시간 운영하고 있습니다.
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
          일반 문의 : 09:30 ~ 17:30 (주말, 공휴일 제외) 장애 문의 : 24시간 운영
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
            <Table
              columns={columns}
              dataSource={data}
              showHeader={false}
              style={{ paddingTop: "70px" }}
            />
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
    </>
  );
}
