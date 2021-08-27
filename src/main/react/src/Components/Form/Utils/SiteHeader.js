import React from "react";
import { PageHeader } from "antd";
import "../css/SiteHeader.css";
/**
 *  TODO: add icons
 */
export default function SiteHeader({ title, subTitle }) {
  return (
    <>
      <PageHeader onBack={() => null} title={title} subTitle={subTitle} />
    </>
  );
}
