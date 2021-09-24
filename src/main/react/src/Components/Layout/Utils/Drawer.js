import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import Profile from "./Profile";
import { Button, Divider, Drawer, message, Typography } from "antd";
const { Title } = Typography;

function SideDrawer() {
  const [visible, setVisible] = useState(false);
  const [userDetails, setUserDetails] = useState({ username: "" });

  const ButtonStyle = {
    marginLeft: "-24px",
    height: "40px",
    width: "100%",
    position: "absolute",
    bottom: "0",
  };

  async function handleLogout() {
    await axios
      .get("http://localhost:8080/logoutd")
      .then(() => {
        message.success("Logged out");
      })
      .catch((err) => console.log(err));
  }

  React.useEffect(() => {
    async function getUserDeatils() {
      const result = await axios.get("user/details");
      setUserDetails(result.data);
    }
    getUserDeatils();
  }, []);

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="text"
        icon={<MenuOutlined />}
      />
      <Drawer
        title={<Title level={2}>Profile:</Title>}
        width={500}
        placement={"right"}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <Profile userDetails={userDetails} />

        <Divider />
        <Button style={ButtonStyle} type="primary" onClick={handleLogout}>
          <Link to="/"> Log out </Link>
        </Button>
      </Drawer>
    </>
  );
}

export default SideDrawer;
