import styled from "styled-components";
import { Button as AntdButton } from "antd";

const ButtonComponent = styled(AntdButton)`
  border: none;
  border-radius: 24px;
  background-color: transparent;
  border: 1px solid #5142fc;
  display: flex;
  align-items: center;
  padding: 12px 15px;

  transition: 0.25s all;
  cursor: pointer;

  .btn-icon {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  span {
    color: #fff;
    font-size: 16px;
    font-weight: 500;
  }

  &:hover {
    background-color: #5142fc;
  }

  &.btn-white {
    color: #000;
    background-color: #fff;
    border: none;
    span {
      color: #000;
    }
    &:hover {
      background-color: #fff;
    }
  }

  &.btn-color {
    color: #000;
    background-color: #5142fc;
    border: none;
    span {
      color: #000;
    }
    &:hover {
      background-color: #5142fc;
    }
  }

  &.btn-transparent {
    border: none;
    span {
      color: #8a8aa0;
    }
    &:hover {
      background-color: transparent;
    }
  }

  @media only screen and (min-width: 768px) {
    span {
      font-size: 18px;
    }
  }
  @media only screen and (min-width: 1600px) {
    padding: 10px 16px;
    .btn-icon {
      width: 18px;
      height: 18px;
    }
  }
`;

/**
 * @param {{
 * type: "primary" | "transparent" | "white"  | "color";
 * }} props
 */

export default function Button({
  className,
  type = "primary",
  label,
  icon,
  onClick,
}) {
  return (
    <ButtonComponent
      className={`btn-${type} ${className || ""} `}
      onClick={onClick}
    >
      {icon && (
        <div className="btn-icon">
          <img src={`/${icon}.svg`} alt={"btn-icon"} />
        </div>
      )}
      <span>{label}</span>
    </ButtonComponent>
  );
}
