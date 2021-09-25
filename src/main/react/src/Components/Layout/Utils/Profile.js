import "../css/Profile.css";
import { Avatar, Col, Divider, Row, Typography } from "antd";

function Profile({ userDetails }) {
  const size = {
    xxl: "240px",
    xl: "240px",
    lg: "240px",
    md: "200px",
    sm: "180px",
    xs: "180px",
  };

  const str = window.btoa(userDetails["name"]);

  const ProfileAvatar = () => (
    <div>
      <Avatar
        draggable={false}
        src={`https://avatars.dicebear.com/api/personas/${str}.svg`}
        style={{ backgroundColor: "#f0f8ff" }}
        size={size}
      ></Avatar>
    </div>
  );

  const DescriptionItem = ({ title, content }) => (
    <div className="site-description-item-profile-wrapper">
      <p className="site-description-item-profile-p-label">
        {<Typography.Title level={5}>{title}: </Typography.Title>}
      </p>
      <>{content}</>
    </div>
  );

  return (
    <div>
      <div style={{ display: "grid", placeItems: "center" }}>
        <ProfileAvatar />
      </div>
      <Divider />
      <Row>
        <Col span={24}>
          <DescriptionItem title="Name" content={userDetails["name"]} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Username" content={userDetails["username"]} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Email" content={userDetails["email"]} />
        </Col>
      </Row>
    </div>
  );
}

export default Profile;
