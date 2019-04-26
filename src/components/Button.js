import React from "react";

function Button(props) {
  return (
    <button type="button" style={props.style}>
      {props.children}
    </button>
  );
}

export default Button;
