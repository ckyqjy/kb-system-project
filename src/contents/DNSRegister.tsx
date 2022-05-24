import React from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import { Form, Input, InputNumber, Button, Select, Card, Row, Col } from "antd";
import Meta from "antd/lib/card/Meta";

export default function DNSRegister(): JSX.Element {
  const [form] = Form.useForm<FormState>();
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 8 },
  };

  interface FormState {
    username: string;
    domainname: string;
    class1: string;
    class2: string;
    ipaddr: string;
    description: string;
  }

  const onClick = () => {
    const { username, domainname, ipaddr } = form.getFieldsValue();
    const url = `${process.env.REACT_APP_URL}/dnsreg/${domainname}`;
    axios.get(url).then((res) => res.data);
  };

  const gra1 = "#007ec9";
  const gra2 = "#0099c6";

  return (
    <>
      <div
        style={{
          background: `linear-gradient(${gra1}, ${gra2})`,
          width: "100%",
          paddingBottom: "50px",
        }}
      >
        <div
          style={{
            color: "white",
            fontWeight: "bolder",
            fontSize: "30px",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          도메인 등록
        </div>
        <div
          style={{
            paddingLeft: "35%",
            paddingTop: "20px",
            display: "flex",
          }}
        >
          <div style={{}}>
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
                backgroundColor: "#434c53",
                border: "1px",
                borderStyle: "solid",
                borderColor: "#dddddd",
                color: "white",
              }}
            >
              등록
            </button>
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#0070c0",
          color: "white",
          fontSize: "30px",
          textAlign: "center",
        }}
      >
        도메인 등록 할인 이벤트 / 쿠폰코드 KBEVENT
      </div>
      <div style={{ padding: "50px" }}>
        <Row>
          <Col span={2}></Col>
          <Col span={2}></Col>
          <Col span={2}></Col>
          <Col span={1}></Col>
          <Col span={4}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    backgroundColor: "#0070c0",
                    color: "white",
                    textAlign: "center",
                    fontSize: "25px",
                    borderRadius: "10px 10px 0px 0px",
                    height: "80px",
                    paddingTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  국제 도메인
                </div>
              }
              style={{
                width: 240,
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div style={{ height: "100px" }}>
                <div
                  style={{
                    fontSize: "15px",
                    textDecorationLine: "line-through",
                  }}
                >
                  20000원 / 년
                </div>
                <div style={{ fontWeight: "bolder", fontSize: "25px" }}>
                  15000원 / 년
                </div>
                <br />
                <button style={{ backgroundColor: "orange", border: "none" }}>
                  쿠폰 할인가
                </button>
              </div>
              <div style={{ height: "40px" }}></div>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    backgroundColor: "#0070c0",
                    color: "white",
                    textAlign: "center",
                    fontSize: "25px",
                    borderRadius: "10px 10px 0px 0px",
                    height: "80px",
                    paddingTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  국내 도메인
                </div>
              }
              style={{
                width: 240,
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div style={{ height: "100px" }}>
                <div
                  style={{
                    fontSize: "15px",
                    textDecorationLine: "line-through",
                  }}
                >
                  20000원 / 년
                </div>
                <div style={{ fontWeight: "bolder", fontSize: "25px" }}>
                  13500원 / 년
                </div>
                <br />
                <button style={{ backgroundColor: "orange", border: "none" }}>
                  쿠폰 할인가
                </button>
              </div>
              <div style={{ height: "40px" }}></div>
            </Card>
          </Col>
          <Col span={4}>
            <Card
              hoverable
              cover={
                <div
                  style={{
                    backgroundColor: "#0070c0",
                    color: "white",
                    textAlign: "center",
                    fontSize: "25px",
                    borderRadius: "10px 10px 0px 0px",
                    height: "80px",
                    paddingTop: "20px",
                    fontWeight: "bold",
                  }}
                >
                  개인 도메인
                </div>
              }
              style={{
                width: 240,
                backgroundColor: "white",
                textAlign: "center",
                borderRadius: "10px",
              }}
            >
              <div style={{ height: "100px" }}>
                <div
                  style={{
                    fontSize: "15px",
                    color: "white",
                  }}
                >
                  20000원 / 년
                </div>
                <div style={{ fontWeight: "bolder", fontSize: "25px" }}>
                  10000원 / 년
                </div>
                <br />
                <button style={{ backgroundColor: "orange", border: "none" }}>
                  쿠폰 할인가
                </button>
              </div>
              <div style={{ height: "40px" }}></div>
            </Card>
          </Col>
          <Col span={2}></Col>
          <Col span={2}></Col>
          <Col span={1}></Col>
        </Row>
      </div>
      <div
        style={{
          backgroundColor: "#5ca3cf",
          height: "380px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{ fontSize: "30px", paddingTop: "70px", fontWeight: "bolder" }}
        >
          도메인 구매시 무제한 웹호스팅이 무료
        </div>
        <div style={{ fontSize: "15px", paddingTop: "40px" }}>
          도메인 구매시 무제한 웹호스팅 무료 서비스를 이용하실 수 있습니다.
          <br />
          도메인 이용 기간 내에 추가 비용 없이 무료 이용이 가능합니다.
        </div>
        <div
          style={{
            paddingTop: "30px",
            marginBottom: "60px",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              color: "#5ca3cf",
              border: "none",
              width: "200px",
              height: "50px",
              fontWeight: "bolder",
            }}
          >
            무제한 웹호스팅 바로가기
          </button>
        </div>
      </div>
      <div
        style={{
          height: "380px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            paddingTop: "100px",
          }}
        >
          KB에서 도메인을 등록하세요
        </div>
      </div>
      <div
        style={{
          backgroundColor: "#f9f4f0",
          height: "380px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            paddingTop: "100px",
          }}
        >
          무료 부가서비스
        </div>
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "380px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontWeight: "bolder",
            fontSize: "30px",
            paddingTop: "100px",
          }}
        >
          네임서버 안내
        </div>
      </div>
    </>
  );
}
