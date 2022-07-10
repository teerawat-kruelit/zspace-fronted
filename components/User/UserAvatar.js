import styled from "styled-components";
import Link from "next/link";

const UserAvatarComponent = styled.div``;
const UserAvatarContainerComponent = styled.div`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  margin: 0 auto;
  width: 60px;
  height: 60px;
  background-color: #7a798a;
`;

export default function UserAvatar({ className, src }) {
  return (
    <Link href={"/"}>
      <a>
        <UserAvatarComponent className={"user-avatar"}>
          <UserAvatarContainerComponent
            className={"user-avatar__container " + className}
          >
            {src && <img src={src} alt={"user-avatar"} />}
          </UserAvatarContainerComponent>
        </UserAvatarComponent>
      </a>
    </Link>
  );
}
