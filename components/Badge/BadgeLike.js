import styled from "styled-components";
import Badge from "./Badge";

const BadgeLikeComponent = styled(Badge)`
  background-color: #000;
`;

export default function BadgeLike({ label = 0, onClick }) {
  return (
    <BadgeLikeComponent
      className={"badge-like"}
      label={label}
      icon={<img src="/heart.svg" alt="icon-heart" />}
    />
  );
}
