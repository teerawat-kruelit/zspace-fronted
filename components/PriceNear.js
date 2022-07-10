import styled from "styled-components";

const PriceNearComponent = styled.div``;
const PriceNearContainerComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    display: flex;
    align-items: center;
    margin-left: 3px;
    width: 12px;
    height: 12px;
  }

  @media only screen and (min-width: 768px) {
    font-size: 18px;
    .icon {
      width: 15px;
      height: 15px;
    }
  }
`;

export default function PriceNear({ className, amount }) {
  return (
    <PriceNearComponent className={"price-near " + className}>
      <PriceNearContainerComponent>
        <span>{amount}</span>
        <div className="icon">
          <img src={"/near.svg"} alt={"near-icon"} />
        </div>
      </PriceNearContainerComponent>
    </PriceNearComponent>
  );
}
