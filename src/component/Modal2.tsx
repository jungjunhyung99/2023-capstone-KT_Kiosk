import React, { PropsWithChildren } from "react";
import styled from "styled-components";

interface ModalDefaultType {
  onClickToggleModal2: () => void;
}

function Modal_Result2({
  onClickToggleModal2,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox>{children}</DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal2) {
            onClickToggleModal2();
          }
        }}
      />
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0rem;
    right: 0rem;
`;

const DialogBox = styled.dialog`
    width: 700px;
    height: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    background-color: #B2EBF4;
    z-index: 10000;
    font-size: 35px;
    font-weight: bold;
`;

const Backdrop = styled.div`
    width: 50vw;
    height: 50vh;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.1);
    position: relative;
`;

export default Modal_Result2;