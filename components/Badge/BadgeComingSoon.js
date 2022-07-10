import styled from "styled-components";
import Badge from "./Badge";

const BadgeComingSoonComponent = styled(Badge)`
  background-color: #ffbd0c;
  color: #343444;
  font-weight: bold;
  letter-spacing: 0.025rem;
`;

export default function BadgeComingSoon({ label = "Coming Soon", onClick }) {
  return (
    <BadgeComingSoonComponent className={"badge-coming-soon"} label={label} />
  );
}
