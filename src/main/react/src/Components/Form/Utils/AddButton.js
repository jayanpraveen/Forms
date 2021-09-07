import React from "react";
import "../css/AddButton.css";
import { Tooltip, Tag } from "antd";
import { PlusCircleTwoTone } from "@ant-design/icons";

function AddButton({ add, setState }) {
  return (
    <>
      <Tooltip
        mouseEnterDelay="1"
        title={
          <div style={{ color: "steelblue" }}>
            <Tag color="blue">{"Ctrl"}</Tag>
            {"+ j"}
          </div>
        }
        color="#fff"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PlusCircleTwoTone
            className="AddButton"
            onClick={() => {
              add();
              setState(Math.random());
            }}
          />
        </div>
      </Tooltip>
    </>
  );
}

export default AddButton;
