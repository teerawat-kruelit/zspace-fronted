import styled from "styled-components";
import PriceNear from "./PriceNear";
import { UserAvatar } from "./User";

const TopUsersComponent = styled.div`
  padding: 5px 10px;
  .top-users__title {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 7px;
    color: #ffbd0c;
  }

  @media only screen and (min-width: 768px) {
    .top-users__title {
      font-size: 28px;
      margin-bottom: 10px;
    }
  }
`;
const TopUsersContainerComponent = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  overflow-x: scroll;

  .user {
    margin-right: 25px;
    text-align: center;
  }
  .user__wallet-id {
    margin-top: 5px;
  }
  .user__near-amount {
    font-size: 14px;
  }

  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    .user {
      margin: 0px;
    }
    .user__wallet-id,
    .user__near-amount {
      font-size: 16px;
    }
  }
`;
const TopUserAvatar = styled(UserAvatar)`
  @media only screen and (min-width: 768px) {
    border-radius: 20px;
    width: 80px;
    height: 80px;
  }

  @media only screen and (min-width: 768px) {
    border-radius: 30px;
    width: 100px;
    height: 100px;
  }

  @media only screen and (min-width: 1600px) {
    border-radius: 40px;
    width: 120px;
    height: 120px;
  }
`;

export default function TopUsers({ className, title }) {
  return (
    <TopUsersComponent className={className}>
      <div className="top-users__title">{title}</div>
      <TopUsersContainerComponent>
        <div className="user">
          <TopUserAvatar />
          <div className="user__wallet-id">Holder1.Near</div>
          <div className="user__near-amount">
            {<PriceNear amount={220.2} />}
          </div>
        </div>
        <div className="user">
          <TopUserAvatar />
          <div className="user__wallet-id">Holder1.Near</div>
          <div className="user__near-amount">
            {<PriceNear amount={220.2} />}
          </div>
        </div>
        <div className="user">
          <TopUserAvatar />
          <div className="user__wallet-id">Holder1.Near</div>
          <div className="user__near-amount">
            {<PriceNear amount={220.2} />}
          </div>
        </div>
        <div className="user">
          <TopUserAvatar />
          <div className="user__wallet-id">Holder1.Near</div>
          <div className="user__near-amount">
            {<PriceNear amount={220.2} />}
          </div>
        </div>
        <div className="user">
          <TopUserAvatar />
          <div className="user__wallet-id">Holder1.Near</div>
          <div className="user__near-amount">{<PriceNear amount={220} />}</div>
        </div>
      </TopUsersContainerComponent>
    </TopUsersComponent>
  );
}
