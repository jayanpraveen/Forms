import "../css/SiteHeader.css";
import { PageHeader, Typography, Button, message, Divider, Modal } from "antd";
import { CopyTwoTone } from "@ant-design/icons";
import React from "react";
import SubmitButton from "../../Utils/SubmitButton";
import { Link } from "react-router-dom";
const { Text } = Typography;

export default function SiteHeader({ title, subTitle, formId }) {
  // * replace localhost with axios.defaults.baseURL in production.
  const link = `localhost:3000/form/${formId}/view`;

  function info() {
    Modal.info({
      title: "Keyboard shortcuts",
      content: (
        <>
          <p>Ctrl + j - Add Question.</p>
          <p>Ctrl + k - Delete Question.</p>
          <p>Ctrl + s - Save Form.</p>
        </>
      ),
      onOk() {},
    });
  }

  const copyTo = {
    text: link,
    tooltips: false,
    onCopy: () => message.success("Copied link to clipboard 📋"),
    icon: [
      <Button icon={<CopyTwoTone />} type="primary">
        Copy
      </Button>,
      <Button icon={<CopyTwoTone />} type="primary">
        Copy
      </Button>,
    ],
  };

  return (
    <>
      <PageHeader
        onBack={() => null}
        title={title}
        subTitle={
          <span key="info">
            <Button type="dashed" onClick={info}>
              Shortcuts
            </Button>
            <Divider type="vertical" />
          </span>
        }
        extra={[
          <span key="save">
            <SubmitButton placement="bottom" value={"Save"} />,
            <Divider type="vertical" />
          </span>,
          <span key="view">
            <Button>
              <Link to={`/form/${formId}/view`}>View</Link>
            </Button>

            <Divider type="vertical" />
          </span>,
          <span key="copy">
            Copy link: <Text copyable={copyTo} />
          </span>,
        ]}
      ></PageHeader>
    </>
  );
}
