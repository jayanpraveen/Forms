import React from "react";
import { Tooltip, Tag } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

function AddButton({ add }) {
  return (
    <>
      <Tooltip
        mouseEnterDelay="0.5"
        title={
          <div style={{ color: "steelblue" }}>
            <Tag color="blue">{"Ctrl"}</Tag>
            {"+ j"}
          </div>
        }
        color="#fff"
      >
        <PlusCircleTwoTone
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "35px",
          }}
          onClick={() => add()}
        />
      </Tooltip>
    </>
  );
}

export default AddButton;
