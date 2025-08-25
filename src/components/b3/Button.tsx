import React, { Component, ReactNode } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "light"
  | "dark"
  | "link";

interface ButtonProps {
  variant?: Variant;
  children: ReactNode;
}

export default class Button extends Component<ButtonProps> {
  render() {
    const { variant = "primary", children } = this.props;
    return <button className={`btn btn-${variant}`}>{children}</button>;
  }
}
