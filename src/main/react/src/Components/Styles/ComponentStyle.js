const cardStyle = {
  background: "white",
  display: "flex",
  justifyContent: "center",
  width: "540px",
  padding: "7px",
  flexDirection: "column",
  border: "1.5px solid #dadce0",
  wordWrap: "breakWord",
  borderRadius: "8px",
  margin: "0px",
};

const cardBody = {};
const cardHead = {
  paddingLeft: "12px",
  whiteSpace: "pre-line",
};

const listStyle = {
  display: "flex",
  justifyContent: "center",
};

const headerStripeStyle = {
  color: "#fff",
  backgroundColor: "#6739B7",
  borderTopLeftRadius: "8px",
  borderTopRightRadius: "10px",
  height: "10px",
  position: "absolute",
  left: "-1px",
  top: "-1px",
  // * fix width
  width: "540px",
};

const submitStyle = {
  borderRadius: "5px",
  paddingBottom: "2px",
  paddingLeft: "22px",
  paddingRight: "22px",
};

export {
  cardBody,
  cardHead,
  cardStyle,
  listStyle,
  headerStripeStyle,
  submitStyle,
};
