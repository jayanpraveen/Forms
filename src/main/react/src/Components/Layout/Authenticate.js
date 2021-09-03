import React, { useState } from "react";
import "./css/Authenticate.css";
import { Card } from "antd";
import Login from "./Login";
import Register from "./Resgister";

const items = [
  { key: "Login", tab: "Login" },
  { key: "Register", tab: "Register" },
];

export default function Authenticate() {
  const [activeTab, setActiveTab] = useState("Login");
  const [tab, setTab] = useState("Login");

  return (
    <>
      <div className="card-container">
        <Card
          hoverable
          className="card"
          title={<h2>{tab}</h2>}
          tabList={items}
          activeTabKey={activeTab}
          onTabChange={(key) => {
            setTab(key);
            setActiveTab(key);
          }}
        >
          {tab === "Login" ? <Login /> : <Register />}
        </Card>
      </div>
    </>
  );
}
