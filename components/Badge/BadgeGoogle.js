import styled from "styled-components";
import Badge from "./Badge";
import Link from "next/link";

const BadgeGoogleComponent = styled(Badge)`
  background-color: #343444;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    .badge-icon {
      width: 25px;
      height: 25px;
      margin: 0;
    }
  }
`;

export default function BadgeGoogle() {
  return (
    <Link href={"/"}>
      <a target={"_blank"}>
        <BadgeGoogleComponent
          label={null}
          icon={<img src="/social-google.svg" alt="icon-social-google" />}
        />
      </a>
    </Link>
  );
}
