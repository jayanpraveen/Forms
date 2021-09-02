import { Card, Tabs } from "antd";
import React, { useState } from "react";
import "./css/Auth.css";
const { TabPane } = Tabs;

const items = [
  {
    key: "login",
    tab: "Login",
  },
  {
    key: "register",
    tab: "Register",
  },
];

export default function Auth() {
  const [activeTab, setActiveTab] = useState("login");
  const [tab, setTab] = useState("login");

  const onTabChange = (key) => {
    console.log(key);
    setTab(key);
    setActiveTab(key);
  };

  return (
    <div className="card-container">
      <Card
        tabList={items}
        activeTabKey={activeTab}
        onTabChange={(key) => onTabChange(key)}
      >
        {tab === "login" ? "login" : "reg"}
      </Card>
    </div>
  );
}
