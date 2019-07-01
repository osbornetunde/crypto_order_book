import React from "react";

const FontAwesomeIcon = ({ icon = "times-circle", text = false, onClick }) => (
  <div
    onClick={onClick}
    style={{
      display: "flex",
      color: "#fff",
      width: "65px",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "flex-end",
      cursor: "pointer"
    }}
  >
    <span className={`far fa-${icon}`} />
    {Boolean(text) && <span> &nbsp; {text}</span>}
  </div>
);

export default FontAwesomeIcon;
