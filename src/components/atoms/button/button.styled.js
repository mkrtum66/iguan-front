import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  background: var(--background-green);
  border-radius: 1000px;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: var(--text-white);
  cursor: pointer;
  padding: 10px 20px;
  user-select: none;
  touch-action: manipulation;
  border: 1px solid var(--border-green);
  width: 100%;
  transition: all 200ms ease-in-out;
  &:hover {
    background: transparent;
    color: var(--text-green);
  }
  &[disabled] {
    opacity: 0.7;
  }
  ${({ outlined }) =>
    !!outlined &&
    css`
      background: var(--background-transparent);
      border-color: var(--border-green);
      color: var(--text-green);
      &:hover {
        background: var(--background-green);
        border-color: var(--border-green);
        color: var(--text-white);
      }
    `}
  ${({ size }) =>
    size === 'xl'
      ? css`
          width: 317px;
        `
      : css`
          width: 221px;
        `}
`;
