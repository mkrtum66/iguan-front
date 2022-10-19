import styled, { css } from 'styled-components';
import { devices } from '../../../styles/global';

const Title = styled.h1`
  margin-bottom: 45px;
  @media ${devices.mobileL} {
    margin-bottom: 14px;
  }
`;

export const Description = styled.h4`
  margin-bottom: 50px;
  overflow: hidden;
  position: relative;
  transition: all 0.5s linear;
  ${({ ifSeeMore, more }) => {
    if (!!ifSeeMore && !more) {
      return css`
        max-height: 150px;
      `;
    } else if (!!ifSeeMore && !!more) {
      return css`
        max-height: 600px;
      `;
    } else {
      return css`
        max-height: fit-content;
      `;
    }
  }}
  &:after {
    content: '';
    display: ${({ ifSeeMore }) => (ifSeeMore ? 'block' : 'none')};
    position: absolute;
    bottom: 0;
    left: 0;
    height: 50%;
    width: 100%;
    z-index: ${({ more }) => (more ? '-1' : '1')};
    background: ${({ more }) =>
      more
        ? 'linear-gradient(rgba(255, 255, 255, 0%), rgba(255, 255, 255, 0%))'
        : 'linear-gradient(rgba(255, 255, 255, 5%), rgba(255, 255, 255, 100%))'};
  }

  @media ${devices.mobileL} {
    margin-bottom: 30px;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 65%;
  ${({ ifSeeMore }) =>
    !!ifSeeMore &&
    css`
      max-width: 622px;
    `}
  @media ${devices.mobileL} {
    max-width: 100%;
    margin-bottom: 14px;
    ${({ ifSeeMore }) =>
      !!ifSeeMore &&
      css`
        max-width: 100%;
      `}
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  ${({ reversed }) =>
    !!reversed &&
    css`
      flex-direction: row-reverse;
    `}
  @media ${devices.mobileL} {
    flex-direction: column-reverse;
    ${({ reversed }) =>
      !!reversed &&
      css`
        flex-direction: column-reverse;
      `}
  }
`;

export const TextColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 45%;
  ${({ ifSeeMore }) =>
    !!ifSeeMore &&
    css`
      max-width: 50%;
    `}
  @media ${devices.mobileL} {
    max-width: 100%;
    ${({ ifSeeMore }) =>
      !!ifSeeMore &&
      css`
        max-width: 100%;
      `}
  }
`;
export default Title;
