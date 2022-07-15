import styled from "styled-components";
import Badge from "./Badge";
import Link from "next/link";

const BadgeMoreActionComponent = styled(Badge)`
  background-color: #000;
`;

export default function BadgeMoreAction() {
  return (
    <BadgeMoreActionComponent
      className={"badge-more-acton"}
      label={null}
      icon={<img src="/3dot.svg" alt="icon-more-action" />}
    />
  );
}
