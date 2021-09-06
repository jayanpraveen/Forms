import { PageHeader, Descriptions, Tag, Button } from "antd";
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
        extra={[<SubmitButton key="save" placement="bottom" value={"Save"} />]}
      >
        {/* <Descriptions size="small" column={3}>
          <Descriptions.Item label="Creation Time">
            2017-01-10
          </Descriptions.Item>
        </Descriptions> */}
      </PageHeader>
    </>
  );
}
