import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const loadingIcon = <LoadingOutlined spin />;
export default function LoadingButton() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Spin size="large" indicator={loadingIcon} />
    </div>
  );
}
