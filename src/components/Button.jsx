import React from "react";

function Button(props) {
  return <button type={props.type}>{props.buttonText}</button>;
}

export default Button;
