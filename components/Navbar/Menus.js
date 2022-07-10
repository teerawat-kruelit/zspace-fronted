import styled from "styled-components";
import Link from "next/link";

const MenusComponent = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    padding-top: 3px;
    display: flex;
  }
`;
const MenusContainerComponent = styled.div`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 0 auto;
  font-weight: 600;
  width: 425px;

  a:hover {
    transition: 0.25s all;
    color: #ffbd0c;
  }

  @media only screen and (min-width: 1024px) {
    width: 425px;
    a:not(:last-child) {
      margin-right: 40px;
    }
  }

  @media only screen and (min-width: 1600px) {
    width: 800px;
    a {
      font-size: 20px;
    }
    a:not(:last-child) {
      margin-right: 40px;
    }
  }
`;

export default function Menus({ className }) {
  return (
    <MenusComponent className={className}>
      <MenusContainerComponent>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href={"/"}>
          <a>Explore</a>
        </Link>
        <Link href={"/"}>
          <a>Activity</a>
        </Link>
        <Link href={"/"}>
          <a>Community</a>
        </Link>
        <Link href={"/"}>
          <a>Pages</a>
        </Link>
        <Link href={"/"}>
          <a>Contact</a>
        </Link>
      </MenusContainerComponent>
    </MenusComponent>
  );
}
