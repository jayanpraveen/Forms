import axios from "axios";
import React, { useEffect, useState } from "react";
import "./css/Home.css";
import CreateModal from "./Utils/CreateModal";
import SideDrawer from "./Utils/Drawer";
import FormCard from "./Utils/FormCard";
import { BackTop, Col, Divider, Layout, PageHeader, Row } from "antd";
import { Link } from "react-router-dom";
const { Content } = Layout;

export default function Home() {
  const [refresh, setRefresh] = useState();
  const [APIData, setAPIData] = useState([]);
  const url = "/form";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setAPIData(result.data);
    };
    fetchData();
  }, [url, refresh]);

  return (
    <>
      <BackTop />
      <Layout style={background}>
        <PageHeader
          ghost={false}
          title={
            <>
              <SideDrawer />
              <span style={{ paddingLeft: "10px" }}>
                <Link to="/home">Awsm Forms</Link>
              </span>
            </>
          }
          extra={
            <>
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
        <Content style={{ padding: "50px 50px" }}>
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
