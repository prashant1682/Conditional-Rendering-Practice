import React from "react";
import Input from "./Input";
import Button from "./Button";

function Form(props) {
  return (
    <div>
      <form className="form">
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.userIsRegistered ? null : (
          <Input type="password" placeholder="Confirm Password" />
        )}
        {props.userIsRegistered ? (
          <Button type="submit" buttonText="Login" />
        ) : (
          <Button type="submit" buttonText="Register" />
        )}
      </form>
    </div>
  );
}

export default Form;
