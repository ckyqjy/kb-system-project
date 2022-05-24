import React from "react";
import { useNavigate } from "react-router";
import { Form, Input, InputNumber, Button, Select, Row, Col, Card } from "antd";
import axios from "axios";

export default function WebStorageRegister(): JSX.Element {
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

  const gra1 = "#fff0e1";
  const gra2 = "#fff8f0";

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
            color: "#333",
            fontWeight: "bolder",
            fontSize: "30px",
            textAlign: "center",
            paddingTop: "30px",
          }}
        >
          리눅스 웹 스토리지
        </div>
        <div
          style={{
            color: "#333",
            fontWeight: "bolder",
            fontSize: "20px",
            textAlign: "center",
          }}
        >
          빠른 속도와 풍부한 용량을 제공하는 KB 64bit 리눅스 스토리지를
          이용해보세요.
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
        스토리지 등록 할인 이벤트 / 쿠폰코드 KBEVENT
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
                  웹 1G
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
                  시작가 50% 할인
                </button>
              </div>
              <div style={{ paddingTop: "20px" }}>
                트래픽 <span style={{ color: "#f46d00" }}>30G</span>일
                <span style={{ color: "#f46d00" }}>1G</span>
              </div>
              <div>
                디스크 <span style={{ color: "#f46d00" }}>500M</span>
              </div>
              <div>
                <span style={{ color: "#f46d00" }}>DB</span> 무제한
                <div style={{ height: "40px" }}></div>
              </div>
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
                  웹 3G
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
                  시작가 50% 할인
                </button>
              </div>
              <div style={{ paddingTop: "20px" }}>
                트래픽 <span style={{ color: "#f46d00" }}>30G</span>일
                <span style={{ color: "#f46d00" }}>1G</span>
              </div>
              <div>
                디스크 <span style={{ color: "#f46d00" }}>500M</span>
              </div>
              <div>
                <span style={{ color: "#f46d00" }}>DB</span> 무제한
                <div style={{ height: "40px" }}></div>
              </div>
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
                  웹 10G
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
                  시작가 50% 할인
                </button>
              </div>
              <div style={{ paddingTop: "20px" }}>
                트래픽 <span style={{ color: "#f46d00" }}>30G</span>일
                <span style={{ color: "#f46d00" }}>1G</span>
              </div>
              <div>
                디스크 <span style={{ color: "#f46d00" }}>500M</span>
              </div>
              <div>
                <span style={{ color: "#f46d00" }}>DB</span> 무제한
                <div style={{ height: "40px" }}></div>
              </div>
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
          KB의 다양한 스토리지 서비스를 비교하고 선택하세요!
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
            스토리지 비교하기
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
          리눅스 스토리지 서비스란?
        </div>
        <div style={{ fontSize: "15px", paddingTop: "40px" }}>
          리눅스(Linux) 운영체제 기반의 스토리지 서비스입니다.
          <br /> LG 10기가망을 사용하여 속도가 빠르고 안정적인 서비스를 이용하실
          수 있습니다.
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
          리눅스 스토리지 특징
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
          무료 부가서비스
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
          리눅스 스토리지 사양
        </div>
      </div>
    </>
  );
}
