import { MenuOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import React from "react";

function SideDrawer() {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      <Button
        onClick={() => setVisible(true)}
        type="text"
        icon={<MenuOutlined />}
      />
      <Drawer
        title="Basic Drawer"
        placement={"right"}
        closable={true}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        <p>Lorem ipsum dolor sit amet.</p>
      </Drawer>
    </>
  );
}

export default SideDrawer;
