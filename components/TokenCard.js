import styled from "styled-components";
import PriceNear from "../components/PriceNear";
import { UserAvatar } from "../components/User";
import { BadgeLike, BadgeComingSoon, BadgeGas } from "./Badge";
import Button from "../components/Button";

const TokenCardComponent = styled.div`
  margin: 0 auto;
`;
const TokenCardContainerComponent = styled.div`
  width: 300px;
  box-sizing: border-box;
  border-radius: 25px;
  padding: 15px 10px;
  min-height: 200px;
  background: #343444;

  @media only screen and (min-width: 375px) {
    width: 355px;
  }
`;
const TokenMedia = styled.div`
  width: 100%;
  border-radius: 25px;
  overflow: hidden;
  height: 300px;
  background-color: #7a798a;
  position: relative;

  .badge-like {
    position: absolute;
    z-index: 9;
    right: 10px;
    top: 10px;
  }

  .badge-coming-soon {
    position: absolute;
    z-index: 9;
    left: 10px;
    top: 10px;
  }

  @media only screen and (min-width: 375px) {
    height: 355px;
  }
`;
const TokenDetail = styled.div`
  .token-detail__row {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .token-owner__wallet-id,
  .token-title {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 15px;
  }

  .token-owner__label,
  .token-price__label {
    color: #8a8aa0;
    font-size: 18px;
  }

  .badge-gas {
    font-size: 16px;
  }

  .token-owner {
    display: flex;
    overflow: hidden;

    .token-owner-detail {
      overflow: hidden;
    }

    .token-owner-avatar {
      width: 45px;
      height: 45px;
      border-radius: 12px;
      margin-right: 7px;
    }
  }

  .token-price {
    text-align: right;
  }

  .btn-view-detail {
    padding-right: 0px;
  }
`;

export default function TokenCard({ className }) {
  return (
    <TokenCardComponent className={"token-card " + className}>
      <TokenCardContainerComponent>
        <TokenMedia>
          <img src={"/person.png"} alt="" />
          <BadgeLike />
          <BadgeComingSoon />
        </TokenMedia>
        <TokenDetail>
          <div className="token-detail__row">
            <div className="token-title">
              "Triumphant Awakeningriumphant riumphant
            </div>
            <BadgeGas />
          </div>
          <div className="token-detail__row">
            <div className="token-owner">
              <div className="token-owner__avatar">
                <UserAvatar className={"token-owner-avatar"} />
              </div>
              <div className="token-owner__detail">
                <div className="token-owner__label">Owner</div>
                <div className="token-owner__wallet-id">Lazyman.near</div>
              </div>
            </div>
            <div className="token-price">
              <div className="token-price__label">Price</div>
              <div className="token-price__amount">
                <PriceNear amount={22.49} />
              </div>
            </div>
          </div>
          <div className="token-detail__row">
            <Button type={"white"} label={"Buy"} icon={"bag"} />
            <Button
              className={"btn-view-detail"}
              type={"transparent"}
              label={"Viw Detail"}
              icon={"arrow-circle"}
            />
          </div>
        </TokenDetail>
      </TokenCardContainerComponent>
    </TokenCardComponent>
  );
}
