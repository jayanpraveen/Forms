const cardStyle = {
  background: "white",
  display: "flex",
  justifyContent: "center",
  width: "540px",
  padding: "10px",
  flexDirection: "column",
  border: "1.5px solid #dadce0",
  wordWrap: "breakWord",
  borderRadius: "8px",
  margin: "0px",
};

const listStyle = {
  display: "flex",
  justifyContent: "center",
};

const cardBody = {};
const cardHead = {
  whiteSpace: "pre-line",
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

export { cardBody, cardHead, cardStyle, listStyle, headerStripeStyle };
