import styled from "styled-components";
import Badge from "./Badge";
import Link from "next/link";

const BadgeShareComponent = styled(Badge)`
  background-color: #000;
`;

export default function BadgeShare() {
  return (
    <BadgeShareComponent
      className={"badge-share"}
      label={null}
      icon={<img src="/arrow-share.svg" alt="icon-arrow-share" />}
    />
  );
}
