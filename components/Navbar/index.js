import styled from "styled-components";
import Logo from "../Logo";
import Button from "../Button";
import Menus from "./Menus";

const NavbarComponent = styled.div`
  border-bottom: 1px solid rgb(138, 138, 160, 0.4);
`;
const NavbarContainerComponent = styled.div`
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 760px;
  }

  @media only screen and (min-width: 1024px) {
    max-width: 1000px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1150px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1500px;
  }
`;

export default function Navbar() {
  return (
    <NavbarComponent>
      <NavbarContainerComponent>
        <Logo />
        <Menus />
        <Button label={"Wallet Connect"} icon={"wallet"} />
      </NavbarContainerComponent>
    </NavbarComponent>
  );
}
