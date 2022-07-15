import styled from "styled-components";

const BadgeComponent = styled.div`
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BadgeContainerComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 7px;
  box-sizing: border-box;

  .badge-icon {
    width: 15px;
    height: 15px;
    img {
      object-fit: contain;
    }
  }

  span {
    margin-left: 3px;
  }
`;

export default function Badge({ className, icon, label, onClick }) {
  return (
    <BadgeComponent className={"badge " + className}>
      <BadgeContainerComponent hasLabel={label ? true : false}>
        {icon && <div className="badge-icon">{icon}</div>}
        {label && <span className="'badge-label">{label}</span>}
      </BadgeContainerComponent>
    </BadgeComponent>
  );
}
