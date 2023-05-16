import { ButtonContainer, ModalButton, ModalContainer, ModalTitle } from "../../component/kiosk-component/styled_cafe";

function Modal({onClose, onIceClick, onHotClick}: any) {
    return (
    <ModalContainer>
        <ModalTitle>차가운 음료와 따뜻한 음료 중 고르세요!</ModalTitle>
        <ButtonContainer>
        <ModalButton active={false} onClick={onIceClick}>
          Ice
        </ModalButton>
        <ModalButton active={true} onClick={onHotClick}>
          Hot
        </ModalButton>
      </ButtonContainer>
      <button onClick={onClose}>Close</button>    
    </ModalContainer>
    );
}

export default Modal;