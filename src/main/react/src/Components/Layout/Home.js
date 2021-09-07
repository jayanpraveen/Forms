import React, { useState, useEffect } from "react";
import "./css/Home.css";
import { Divider, Layout, Menu, Row, Col, Card, PageHeader } from "antd";
import axios from "axios";
import { FileOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import CreateModal from "./CreateModal";
const { Content, Footer, Sider } = Layout;

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  const url = "/form";
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      const arr = result.data.map((item) => item.formId);
      setAPIData(arr);
    };
    fetchData();
  }, [url]);
  console.log(APIData);

  const downStyle = {};

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          theme="dark"
          collapsible
          collapsed={collapsed}
          onCollapse={() => setCollapsed(!collapsed)}
          width="225"
        >
          <div className="logo"></div>
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<UserOutlined />}>
              User
            </Menu.Item>
            <Menu.Item key="2" icon={<FileOutlined />}>
              Forms
            </Menu.Item>
            <Menu.Item style={downStyle} key="3" icon={<LogoutOutlined />}>
              Log out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <>
            <PageHeader
              ghost={false}
              title={"Hello, user"}
              extra={[<CreateModal />]}
            />
          </>
          <Divider orientation="left">Created Forms</Divider>
          <Content style={{ margin: "0 16px" }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              <Row justify="space-between" gutter={[42, 24]}>
                {APIData.map((item) => (
                  <Col
                    key={item}
                    xs={24}
                    lg={24 / 4}
                    className="gutter-row"
                    span={4}
                  >
                    <div style={style}>
                      <Card hoverable title={item} style={{ cursor: "auto" }}>
                        <a>{"edit "}</a>
                        <a>{"view "}</a>
                        <a>{"response "}</a>
                      </Card>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit.
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}
const style = {};
