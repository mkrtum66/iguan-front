import styled from 'styled-components';

export const ProcessCartWrapper = styled.div`
  max-width: 620px;
  width: 100%;
  border: 1px solid #6ebd44;
  border-radius: 20px;
  position: relative;
  padding: 40px 33px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CartTitle = styled.h2`
  text-align: center;
  margin-top: 21px;
  margin-bottom: 42px;
`;

export const CartNumber = styled.p`
  font-family: 'Londrina Shadow', cursive;
  color: var(--text-green);
  font-size: 36px;
  line-height: 43px;
  position: absolute;
  top: 10px;
  left: 20px;
`;

export const CartDescription = styled.h5`
  text-align: center;
`;

export default ProcessCartWrapper;
