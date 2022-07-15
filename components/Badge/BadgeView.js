import styled from "styled-components";
import Badge from "./Badge";

const BadgeViewComponent = styled(Badge)`
  background-color: #000;
`;

export default function BadgeView({ label = "0" }) {
  return (
    <BadgeViewComponent
      className={"badge-view"}
      label={label}
      icon={<img src="/eye.svg" alt="icon-eye" />}
    />
  );
}
