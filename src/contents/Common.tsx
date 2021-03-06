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
        ???????????? ????????? KB??????!
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
          ??????????????? ????????????????
        </div>
        <div
          style={{
            paddingTop: "20px",
            textAlign: "center",
            fontSize: "20px",
          }}
        >
          KB?????? ???????????? ???????????? ????????? ????????? ???????????? ????????? ????????? ??????
          ?????? ???????????? ?????? ????????? ?????????????????? ????????????.
          <br /> ????????? ?????? ????????? ???????????? ?????? ?????? ??? ???????????? ??? ?????????,
          ?????? ????????? ?????? 24?????? ???????????? ????????????.
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
                1:1 ????????????
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
                ???????????? ????????? ??????
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
          ?????? ?????? : 09:30 ~ 17:30 (??????, ????????? ??????) ?????? ?????? : 24?????? ??????
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
              ????????????
            </div>
            <div
              style={{
                textAlign: "center",
                paddingTop: "50px",
              }}
            >
              ?????????
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
          ????????? ???????????? ????????????
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
          <Col span={1}>????????????</Col>
          <Col span={1}>???????????? </Col>
          <Col span={2}>????????????????????????</Col>
          <Col span={2}>????????? ???????????? ??????</Col>
          <Col span={2}>?????????</Col>
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
