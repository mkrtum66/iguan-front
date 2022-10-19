import styled, { css } from 'styled-components';
import { devices } from '../../../styles/global';

const Background = styled.div`
  position: relative;
  background: rgba(0, 0, 0, 0);
  min-width: 76px;
  min-height: 76px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  transition: all 200ms ease;
  .green-background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    border-radius: 23px;
    background: #ddf0d3 0 0 no-repeat padding-box;
    transition: all 200ms ease;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 36px;
    height: 36px;
  }
  ${({ hovered }) =>
    hovered &&
    css`
      &:hover {
        cursor: pointer;
        .green-background {
          transform: rotate(45deg);
        }
      }
    `}
  ${({ size }) => {
    if (size === 'md') {
      return css`
        min-width: 88px;
        min-height: 88px;
        @media${devices.laptop} {
          min-width: 76px;
          min-height: 76px;
        }
      `;
    } else if (size === 'lg') {
      return css`
        min-width: 116px;
        min-height: 116px;
        @media${devices.laptop} {
          min-width: 76px;
          min-height: 76px;
        }
      `;
    }
  }}
`;

export default Background;
