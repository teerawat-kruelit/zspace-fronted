import styled from "styled-components";
import Badge from "./Badge";

const BadgeGasComponent = styled(Badge)`
  background-color: #ffbd0c;
  color: #343444;
  font-weight: bold;
`;

export default function BadgeGas({ label = "GAS", onClick }) {
  return <BadgeGasComponent className={"badge-gas"} label={label} />;
}
