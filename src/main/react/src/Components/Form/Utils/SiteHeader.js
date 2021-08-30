import { PageHeader } from "antd";
import React from "react";
import SubmitButton from "../../Utils/SubmitButton";
import "../css/SiteHeader.css";
/**
 *  TODO: add icons
 */
export default function SiteHeader({ title, subTitle }) {
  return (
    <>
      <PageHeader
        onBack={() => null}
        title={title}
        subTitle={subTitle}
        extra={<SubmitButton placement="bottom" value={"Save"} />}
      />
    </>
  );
}
