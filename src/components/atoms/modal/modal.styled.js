import styled from 'styled-components';
import Modal from 'react-bootstrap/Modal';

const StyledModal = styled(Modal)`
  .modal-header {
    padding: 26px 26px 18px 26px;
    border-bottom: none;
    .btn-close {
      font-size: 12px;
    }
  }
  .modal-body {
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
`;

export const Variant = styled.h2`
  font-weight: 600;
  color: ${({ done }) => (done ? 'var(--text-green)' : 'var(--text-red)')};
  margin-top: 22px;
  margin-bottom: 42px;
`;

export const ModalText = styled.h5`
  text-align: center;
  max-width: 546px;
  width: 100%;
  margin: 0 auto;
  padding: 0 26px 54px;
`;

export default StyledModal;
