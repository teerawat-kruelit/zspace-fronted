import styled from "styled-components";
import Button from "../Button";

const LandingHomeComponent = styled.div`
  display: none;

  @media only screen and (min-width: 768px) {
    display: block;
    height: 420px;
  }
`;
const LandingHomeContainerComponent = styled.div`
  @media only screen and (min-width: 768px) {
    margin: 0 auto;
    height: 500px;
    position: relative;

    .landing-home__spot {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(
        30.8% 30.8% at 57.79% 54.71%,
        rgba(43, 24, 103, 0.24) 0%,
        rgba(56, 35, 131, 0.24) 48.71%,
        rgba(69, 40, 150, 0.24) 78.16%,
        rgba(118, 36, 142, 0.24) 100%
      );
    }

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
  }
`;
const LandingHomeSpot1 = styled.div`
  width: 270px;
  height: 200px;
  top: 70px;
  left: -100px;
  filter: blur(70px);
`;
const LandingHomeSpot2 = styled.div`
  width: 150px;
  height: 70px;
  right: 30%;
  bottom: 0px;
  filter: blur(70px);
  transform: rotate(-180deg);
`;
const LandingHomeSpot3 = styled.div`
  width: 150px;
  height: 70px;
  right: 0px;
  top: 0px;
  filter: blur(50px);
  transform: rotate(-180deg);
`;
const TextBox = styled.div`
  position: absolute;
  top: 50px;
  left: 15px;

  .txt-bold {
    font-weight: bold;
    font-size: 42px;
  }

  .txt-stroke {
    font-size: 46px;
    font-weight: 700;
    color: #000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffbd0c;
  }

  .txt-n {
    margin: 40px 0px;
    font-size: 20px;
  }
  .land-home__button-group {
    display: flex;

    & > button {
      margin-right: 20px;
    }
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

export default function LandingHome() {
  return (
    <LandingHomeComponent>
      <LandingHomeContainerComponent>
        <LandingHomeSpot1 className={"landing-home__spot"} />
        <LandingHomeSpot2 className={"landing-home__spot"} />
        <LandingHomeSpot3 className={"landing-home__spot"} />
        <TextBox>
          <div className="txt-bold">Discover, find,</div>
          <div className="txt-stroke">Sell extraordinary</div>
          <div className="txt-bold">Explorer NFTs</div>
          <div className="txt-n">
            Marketplace character cllections non fungible token NFTs
          </div>
          <div className="land-home__button-group">
            <Button icon={"rocket"} label={"Explore"} />
            <Button icon={"doc"} label={"Create"} type={"white"} />
          </div>
        </TextBox>
      </LandingHomeContainerComponent>
    </LandingHomeComponent>
  );
}
