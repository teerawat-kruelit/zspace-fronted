import styled from "styled-components";
import Logo from "./Logo";
import Link from "next/link";
import { Input } from "../components/Form";
import { BadgeFB, BadgeTwitter, BadgeGoogle, BadgeDiscord } from "./Badge";
import Button from "../components/Button";

const FooterComponent = styled.div`
  padding: 30px 10px;
  border-top: 1px solid rgb(138, 138, 160, 0.4);
`;
const FooterComponentContainer = styled.div`
  @media only screen and (min-width: 768px) {
    max-width: 760px;
  }
  @media only screen and (min-width: 1024px) {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1150px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 1500px;
  }
`;
const FooterBlock1 = styled.div`
  .footer__logo {
    display: flex;
    justify-content: center;
  }
  .footer__desc {
    max-width: 500px;
    margin: 0 auto;
    text-align: center;
    margin-top: 7px;
  }
  .footer__social-group {
    max-width: 300px;
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    justify-content: space-around;
  }

  @media only screen and (min-width: 1024px) {
    width: 30%;
    padding: 0px 10px;
  }
`;
const FooterBlock2 = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  text-align: center;

  .footer__link-list {
    margin: 0 auto;
    max-width: 550px;
  }
  .footer__link-list-group {
    display: flex;
    flex-direction: column;
  }
  .footer__link-list-header {
    font-size: 18px;
    font-weight: bold;
  }
  .footer__link-list-item {
    font-weight: normal;
    font-size: 16px;
    margin-top: 10px;
    transition: 0.25s all;
    cursor: pointer;
    &:hover {
      color: #ffbd0c;
    }
  }

  @media only screen and (min-width: 768px) {
    .footer__link-list-header {
      font-size: 20px;
    }
    .footer__link-list-item {
      font-size: 18px;
      margin-top: 10px;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin: 30px 0px 0px 0px;
    padding: 0px 20px;
    flex-grow: 1;

    .footer__link-list {
      max-width: 400px;
    }
    .footer__link-list-item {
      margin-top: 21px;
    }
  }

  @media only screen and (min-width: 1200px) {
    .footer__link-list {
      max-width: 450px;
    }
  }
`;
const FooterBlock3 = styled.div`
  margin: 0 auto;
  margin-top: 30px;

  .footer__sub {
    margin: 0 auto;
    width: 250px;
  }

  .footer__sub-header {
    text-align: center;
    font-weight: bold;
  }
  .footer__sub-form {
    margin-top: 10px;
    display: flex;
    position: relative;
    button {
      height: 100%;
      border-radius: 0px 7px 7px 0px;
      position: absolute;
      right: 0px;
      .btn-icon {
        margin: 0;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .footer__sub-header {
      font-size: 20px;
    }
    .footer__sub {
      width: 300px;
    }
  }

  @media only screen and (min-width: 1024px) {
    margin: 30px 0px 0px 0px;
    padding: 0px 10px;
    width: 25%;
    .footer__sub {
      width: 250px;
    }
  }
`;
export default function Footer() {
  return (
    <FooterComponent>
      <FooterComponentContainer>
        <FooterBlock1>
          <div className="footer__logo">
            <Logo />
          </div>
          <div className="footer__desc">
            Lorem ipsum dolor sit amet,consectetur adipisicing elit. Quis non,
            fugit totam vel laboriosam vitae. Lorem ipsum dolor sit
            amet,consectetur adipisicing elit. Quis non, fugit totam vel
            laboriosam vitae.
          </div>
          <div className="footer__social-group">
            <BadgeFB />
            <BadgeTwitter />
            <BadgeGoogle />
            <BadgeDiscord />
          </div>
        </FooterBlock1>
        <FooterBlock2>
          <div className="footer__link-list">
            <div className="footer__link-list-header">My Account</div>
            <div className="footer__link-list-group">
              <Link href={"/"}>
                <a className="footer__link-list-item">Authors</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Collection</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Author Profile</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Create Collection</a>
              </Link>
            </div>
          </div>
          <div className="footer__link-list">
            <div className="footer__link-list-header">Resources</div>
            <div className="footer__link-list-group">
              <Link href={"/"}>
                <a className="footer__link-list-item">Help & Support</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Live Auctions</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Item Details</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Activity</a>
              </Link>
            </div>
          </div>
          <div className="footer__link-list">
            <div className="footer__link-list-header">Company</div>
            <div className="footer__link-list-group">
              <Link href={"/"}>
                <a className="footer__link-list-item">About Us</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Contact Us</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Our Blog</a>
              </Link>
              <Link href={"/"}>
                <a className="footer__link-list-item">Discover</a>
              </Link>
            </div>
          </div>
        </FooterBlock2>
        <FooterBlock3>
          <div className="footer__sub">
            <div className="footer__sub-header">Subscribe Us</div>
            <div className="footer__sub-form">
              <Input placeHolder={"Info@lazyworld.tech"} />
              <Button icon={"arrow-send"} type={"color"} />
            </div>
          </div>
        </FooterBlock3>
      </FooterComponentContainer>
    </FooterComponent>
  );
}
