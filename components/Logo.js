import styled from "styled-components";

const LogoComponent = styled.div``;
const LogoContainerComponent = styled.div`
  display: flex;
  align-items: center;
  .logo__icon {
    position: relative;
    width: 30px;
    height: 30px;
  }
  .logo__text {
    letter-spacing: 0.025rem;
    line-height: 30px;
    font-weight: 500;
    .z {
      color: #ffbd0c;
      font-size: 40px;
    }
    .space {
      font-size: 28px;
    }
  }

  @media only screen and (min-width: 1600px) {
    .logo__icon {
      width: 60px;
      height: 60px;
    }

    .logo__text {
      .z {
        font-size: 54px;
      }
      .space {
        font-size: 42px;
      }
    }
  }
`;

export default function Logo() {
  return (
    <LogoComponent className="logo">
      <LogoContainerComponent className="logo__container">
        <div className="logo__icon">
          <img src={"/zspace.svg"} alt={"zspace-icon"} />
        </div>
        <div className="logo__text">
          <span className="z">z</span>
          <span className="space">space</span>
        </div>
      </LogoContainerComponent>
    </LogoComponent>
  );
}
