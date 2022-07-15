import styled from "styled-components";
import TokenCard from "./TokenCard";

const FeedTokenCardComponent = styled.div``;
const FeedTokenCardContainerComponent = styled.div``;
const TokenGroup = styled.div`
  padding: 5px 10px;
  display: flex;
  flex-wrap: wrap;

  .feed-token-card {
    margin-top: 20px;
  }
`;

export default function FeedToken() {
  return (
    <FeedTokenCardComponent>
      <FeedTokenCardContainerComponent>
        <TokenGroup>
          <TokenCard className={"feed-token-card"} />
          <TokenCard className={"feed-token-card"} />
          <TokenCard className={"feed-token-card"} />
          <TokenCard className={"feed-token-card"} />
        </TokenGroup>
      </FeedTokenCardContainerComponent>
    </FeedTokenCardComponent>
  );
}
