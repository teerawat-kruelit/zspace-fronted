import styled from "styled-components";
import PriceNear from "../components/PriceNear";
import Button from "../components/Button";
import Tabs from "../components/Tabs";
import { UserAvatar } from "../components/User";
import { useDispatch } from "react-redux";
import {
  BadgeLike,
  BadgeView,
  BadgeShare,
  BadgeMoreAction,
} from "../components/Badge";

const TokenCardComponent = styled.div`
  margin: 0 auto;
`;
const TokenCardContainerComponent = styled.div`
  width: 300px;
  box-sizing: border-box;
  padding: 15px 10px;
  min-height: 200px;
  background: #14141f;

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
  cursor: pointer;

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

  .view-like,
  .actions {
    display: flex;

    & > div:not(:first-child) {
      margin-left: 3px;
    }

    .badge {
      background-color: #343444;
    }
  }
  .actions {
    .badge {
      min-width: 35px;
    }
  }

  .token-creator__wallet-id,
  .token-title {
    font-size: 18px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding-right: 15px;
  }

  .token-creator__label,
  .token-price__label {
    color: #8a8aa0;
    font-size: 18px;
  }

  .token-creator {
    display: flex;
    overflow: hidden;

    .token-creator-detail {
      overflow: hidden;
    }

    .token-creator-avatar {
      width: 45px;
      height: 45px;
      border-radius: 12px;
      margin-right: 7px;
    }
  }

  .token__desc {
    text-indent: 25px;
    padding: 5px 0px 5px 5px;
    font-size: 14px;
    border-radius: 10px;
    box-sizing: border-box;
    max-height: 100px;
    overflow-y: scroll;
  }

  .token-price {
    text-align: right;
  }
`;

const TokenTabs = styled(Tabs)`
  margin-top: 10px;
`;

export default function TokenCardDetail({ className }) {
  const dispatch = useDispatch();

  return (
    <TokenCardComponent className={"token-card " + className}>
      <TokenCardContainerComponent>
        <TokenMedia>
          <img src={"/person.png"} alt="" />
        </TokenMedia>
        <TokenDetail>
          <div className="token-detail__row">
            <div className="token-title">
              Triumphant Awakeningriumphant riumphant
            </div>
          </div>
          <div className="token-detail__row">
            <div className="view-like">
              <BadgeView />
              <BadgeLike />
            </div>
            <div className="actions">
              <BadgeShare />
              <BadgeMoreAction />
            </div>
          </div>
          <div className="token-detail__row">
            <div className="token-creator">
              <div className="token-creator__avatar">
                <UserAvatar className={"token-creator-avatar"} />
              </div>
              <div className="token-creator__detail">
                <div className="token-creator__label">Creator</div>
                <div className="token-creator__wallet-id">Lazyman.near</div>
              </div>
            </div>
          </div>
          <div className="token-detail__row">
            <div className="token__desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis,
              ad quibusdam magnam voluptatem tempora cum mollitia delectus sunt
              unde? Optio iste cum sed reiciendis corporis dolor accusantium,
              fuga sint minima nostrum necessitatibus, deserunt, illum explicabo
              ut delectus. Doloremque, nihil optio?
            </div>
          </div>
          <div className="token-detail__row">
            <Button type={"white"} label={"Buy"} icon={"bag"} />
            <div className="token-price">
              <div className="token-price__label">Price</div>
              <div className="token-price__amount">
                <PriceNear amount={22.49} />
              </div>
            </div>
          </div>
        </TokenDetail>
        <TokenTabs className={"token-tabs"} defaultActiveKey={"info"}>
          <Tabs.TabPane tab={"info"} key={"info"}>
            info
          </Tabs.TabPane>
          <Tabs.TabPane tab={"owner"} key={"owner"}>
            owner
          </Tabs.TabPane>
          <Tabs.TabPane tab={"history"} key={"history"}>
            history
          </Tabs.TabPane>
          <Tabs.TabPane tab={"info1"} key={"info1"}>
            info1
          </Tabs.TabPane>
          <Tabs.TabPane tab={"info2"} key={"info2"}>
            info2
          </Tabs.TabPane>
          <Tabs.TabPane tab={"info3"} key={"info3"}>
            info3
          </Tabs.TabPane>
          <Tabs.TabPane tab={"info4"} key={"info4"}>
            info4
          </Tabs.TabPane>
        </TokenTabs>
      </TokenCardContainerComponent>
    </TokenCardComponent>
  );
}
