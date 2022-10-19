import React from 'react';
import StyledModal, { ModalText, Variant } from './modal.styled';
import CheckMarkIcon from '../../../assets/icon/CheckMarkIcon';
import FailedIcon from '../../../assets/icon/FailedIcon';

const Modal = props => {
  return (
    <StyledModal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <StyledModal.Header closeButton />
      <StyledModal.Body>
        {props.done ? <CheckMarkIcon /> : <FailedIcon />}
        <Variant done={props.done}>{props.done ? 'Done' : 'Failed'}</Variant>
        <ModalText>
          Your application has been sent. Our HR team will get back to you with further updates.
          Meanwhile you can check out some other opportunities as well on our Careers section.
          Thanks for applying!
        </ModalText>
      </StyledModal.Body>
    </StyledModal>
  );
};

export default Modal;
