import React, { useState, useEffect } from "react";
import "./Home.css";
import { Divider, Layout, Menu } from "antd";
import axios from "axios";
import { FileOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
const { Header, Content, Footer, Sider } = Layout;

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
            <Menu.Item key="3" icon={<LogoutOutlined />}>
              Log out
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{}}>
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Divider />
          <Content style={{ margin: "0 16px" }}>
            <div className="site-layout-background" style={{ padding: 24 }}>
              {APIData.map((item) => (
                <div key={item}>{item}</div>
              ))}
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
