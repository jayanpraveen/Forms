import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const loadingIcon = <LoadingOutlined spin style={{ fontSize: "42px" }} />;

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "100vh",
};

export default function LoadingButton() {
  return (
    <div style={style}>
      <Spin indicator={loadingIcon} />
    </div>
  );
}
