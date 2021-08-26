import React from "react";
import { PlusCircleTwoTone } from "@ant-design/icons";

function AddButton({ add }) {
  return (
    <>
      <PlusCircleTwoTone
        style={{ display: "flex", justifyContent: "center", fontSize: "35px" }}
        onClick={() => add()}
      />
    </>
  );
}

export default AddButton;
