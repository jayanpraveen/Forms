import "../css/SiteHeader.css";
import { PageHeader, Typography, Button, message } from "antd";
import { CopyTwoTone } from "@ant-design/icons";
import React from "react";
import SubmitButton from "../../Utils/SubmitButton";
const { Text } = Typography;

export default function SiteHeader({ copyText, title, subTitle }) {
  // * replace localhost with axios.defaults.baseURL in production.

  const link = `localhost:3000/form/${copyText}/view`;

  const copyTo = {
    text: link,
    tooltips: false,
    onCopy: () => message.success("Link copied to clipboard 📋"),
    icon: [
      <Button icon={<CopyTwoTone />} type="primary" value="COPY">
        Copy
      </Button>,
      <Button icon={<CopyTwoTone />} type="primary" value="COPY">
        Copy
      </Button>,
    ],
  };

  return (
    <>
      <PageHeader
        onBack={() => null}
        title={title}
        subTitle={subTitle}
        extra={[
          <span key="copy">
            Copy link: <Text copyable={copyTo} />
          </span>,
          <SubmitButton key="save" placement="bottom" value={"Save"} />,
        ]}
      ></PageHeader>
    </>
  );
}
