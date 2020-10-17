import React from "react";

function Button(props) {
  return (
    <button
      type="button"
      className={props.className}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;