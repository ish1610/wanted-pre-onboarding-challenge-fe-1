import React from "react";
import styled from "@emotion/styled";
import { IControlLoginButton } from "../type";

const ControlButton = styled.button`
  font-weight: 700;
  background-color: RGB(43, 46, 74);
  border: 1px solid RGB(43, 46, 74);
  color: #fff;
  padding: 14px 20px;
  border-radius: 8px;
  transition: 0.2s;
  :hover {
    background-color: #fff;
    color: RGB(43, 46, 74);
  }
`;

const ControlLoginButtonView = ({ content }: IControlLoginButton) => {
  return <ControlButton>{content}</ControlButton>;
};

export default ControlLoginButtonView;
