import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setModalVisible } from "../store/sliceModal";
import styled from "styled-components";
import Button from "./Button";

const ModalOverRayComponent = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);

  opacity: ${(props) => (props.visible ? 1 : 0)};
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  transition: opacity 0.25s ease;
  z-index: 99;
`;
const ModalComponent = styled.div`
  transform: ${(props) => (props.visible ? "scale(1)" : "scale(0)")};
  transition: all 0.25s ease;
  cursor: pointer;
  max-height: 100vh;
  overflow-y: scroll;
`;
const ModalContainerComponent = styled.div`
  position: relative;
  min-width: 100px;
  min-height: 100px;
  background-color: #fff;
  border-radius: 1rem;
`;
const ButtonClose = styled(Button)`
  position: absolute;
  right: 5px;
  top: 5px;
  width: 30px;
  height: 30px;
  padding: 0;
  opacity: 0.7;
  span {
    font-size: 12px;
    margin: 0 auto;
  }
`;

export default function Modal() {
  const dispatch = useDispatch();
  const { visible, content } = useSelector((state) => state.modal);

  useEffect(() => {
    var body = document.getElementsByTagName("body")[0];
    body.className = visible ? "lock-screen" : "";
  }, [visible]);

  return (
    <ModalOverRayComponent visible={visible}>
      <ModalComponent visible={visible}>
        <ModalContainerComponent>
          {content}
          <ButtonClose
            type="black"
            label={"X"}
            onClick={() => {
              dispatch(setModalVisible({ visible: false }));
            }}
          />
        </ModalContainerComponent>
      </ModalComponent>
    </ModalOverRayComponent>
  );
}
