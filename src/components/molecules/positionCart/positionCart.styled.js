import styled from 'styled-components';

const CartWrapper = styled.div`
  width: 100%;
  min-height: 320px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.16);
  padding: 32px 24px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  text-transform: capitalize;
`;

export const CartHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Position = styled.h2`
  margin-bottom: 8px;
`;
export const Level = styled.h3``;

export const CartFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Type = styled.div`
  padding: 9px 22px;
  border-color: #e2f2da;
  background-color: #e2f2da;
  color: var(--text-green);
  border-radius: 8px;
`;
export const State = styled.h5`
  color: #aeadad;
`;

export default CartWrapper;
