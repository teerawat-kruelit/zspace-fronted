import styled from "styled-components";

const BadgeComponent = styled.div`
  border-radius: 13px;
`;
const BadgeContainerComponent = styled.div`
  display: flex;
  align-items: center;
  padding: 3px 7px;
  box-sizing: border-box;

  .badge-icon {
    width: 15px;
    height: 15px;
    margin-right: 3px;
    img {
      object-fit: contain;
    }
  }
`;

export default function Badge({ className, icon, label, onClick }) {
  return (
    <BadgeComponent className={className}>
      <BadgeContainerComponent>
        {icon && <div className="badge-icon">{icon}</div>}{" "}
        {label && <span>{label}</span>}
      </BadgeContainerComponent>
    </BadgeComponent>
  );
}
