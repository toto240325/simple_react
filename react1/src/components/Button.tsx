// import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  myOnClick: () => void;
}

const Button = ({ children, color = "danger", myOnClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={myOnClick}>
      {children}
    </button>
  );
};

export default Button;
