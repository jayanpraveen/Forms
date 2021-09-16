import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/Home.css";
import CreateModal from "./Utils/CreateModal";
import SideDrawer from "./Utils/Drawer";
import FormCard from "./Utils/FormCard";
import { BackTop, Button, Col, Divider, Layout, PageHeader, Row } from "antd";
const { Content } = Layout;

export default function Home() {
  const [refresh, setRefresh] = useState();
  const [APIData, setAPIData] = useState([]);
  const url = "/form";

  const username = "admin";
  const password = "pass";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url, {
        headers: {
          authorization: "Basic " + window.btoa(username + ":" + password),
        },
      });
      setAPIData(result.data);
    };
    fetchData();
  }, [url, refresh]);

  async function logout() {
    const res = await axios
      .get("http://localhost:8080/logoutd")
      .then((data) => data)
      .catch((err) => console.log(err));
    console.log(res);
  }

  return (
    <>
      <BackTop />
      <Layout style={background}>
        <PageHeader
          ghost={false}
          title={
            <>
              <SideDrawer />
              <span style={{ paddingLeft: "10px" }}>Awsm Forms</span>
            </>
          }
          extra={
            <>
              <Button type="primary" onClick={logout}>
                Log out
              </Button>
              <CreateModal refresh={setRefresh} />
            </>
          }
        />
      </Layout>

      <Layout>
        <Divider orientation="left">Templates</Divider>
        <div style={{ padding: 100 }} />
      </Layout>

      <Layout style={background}>
        <Divider orientation="left">
          <h2 style={{ textDecoration: "underline" }}>
            <>Created Forms</>
          </h2>
        </Divider>
        <Content
          style={{
            padding: "50px 50px",
            backgroundImage: `url("http://localhost:5050/img1.png")`,
          }}
        >
          <div className="site-layout-content">
            <Row align="middle" justify="flex-start" gutter={[38, 48]}>
              {APIData.map((item) => (
                <Col key={item.formId} xs={24} md={12} lg={8} xl={6}>
                  <>
                    <FormCard item={item} setRefresh={setRefresh} />
                  </>
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </Layout>
    </>
  );
}

const background = { backgroundColor: "#d5ebff" };
