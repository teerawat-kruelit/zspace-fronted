import { Input as AntdInput } from "antd";
import styled from "styled-components";

const InputComponent = styled(AntdInput)`
  background-color: transparent;
  border: 1px solid #343444;
  border-radius: 5px;
  padding: 14px 12px;
  color: #fff;
  transition: 0.25s all;
  width: 100%;
  font-size: 16px;

  &:active,
  &:focus,
  &:focus-visible {
    border: 1px solid #5142fc;
    outline: none;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export default function Input({ className, placeholder }) {
  return (
    <InputComponent
      className={className}
      placeholder={placeholder}
      size={"large"}
    />
  );
}
