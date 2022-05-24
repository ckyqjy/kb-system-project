import React from "react";
import { useNavigate } from "react-router";
import backgroundImage from "../assets/img/main-bg.png";
import carouselImage from "../assets/img/carousel-bg.jpeg";
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
  Carousel,
} from "antd";
import { ColumnsType } from "antd/lib/table";

export default function Main(): JSX.Element {
  return (
    <>
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
                backgroundSize: "100% 100%",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginLeft: "10%",
                  fontWeight: "bolder",
                  paddingTop: "30px",
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
                backgroundSize: "100% 100%",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginLeft: "10%",
                  fontWeight: "bolder",
                  paddingTop: "30px",
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
                backgroundSize: "100% 100%",
              }}
            >
              <div
                style={{
                  fontSize: "40px",
                  marginLeft: "10%",
                  fontWeight: "bolder",
                  paddingTop: "30px",
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
      </div>
    </>
  );
}
