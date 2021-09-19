import { MenuOutlined } from "@ant-design/icons";
import { Button, Divider, Drawer } from "antd";
import { Link } from "react-router-dom";
import React from "react";
import axios from "axios";

function SideDrawer() {
  const [visible, setVisible] = React.useState(false);

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
      .then(() => {})
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="text"
        icon={<MenuOutlined />}
      />
      <Drawer
        title="User details"
        width={500}
        placement={"right"}
        onClose={() => setVisible(false)}
        visible={visible}
        extra={"SD"}
      >
        <p>User info</p>
        <Divider />
        <Button style={ButtonStyle} type="primary" onClick={handleLogout}>
          <Link to="/"> Log out </Link>
        </Button>
      </Drawer>
    </>
  );
}

export default SideDrawer;
