import styled, { css } from 'styled-components';
import { devices } from '../../styles/global';

const TopSection = styled.div`
  background-color: var(--background-dark);
  padding: 90px 0 150px;
  @media${devices.mobileL} {
    padding: 10px 0 50px;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  @media${devices.mobileL} {
    flex-wrap: wrap-reverse;
  }
`;

export const TextWrapper = styled.div`
  max-width: 50%;
  flex: 0 0 50%;
  @media${devices.mobileL} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

export const ImageWrapper = styled.div`
  max-width: 50%;
  height: auto;
  flex: 0 0 50%;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
  @media${devices.mobileL} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;

export const Title = styled.h1`
  margin-bottom: 44px;
  color: var(--text-white);
  span {
    color: var(--text-green);
  }
  @media${devices.mobileL} {
    margin-bottom: 34px;
  }
`;

export const Text = styled.h4`
  max-width: 622px;
  width: 100%;
  color: var(--text-white);
`;

export const GrowWithUs = styled.div`
  padding: 80px 0 120px;
`;

export const BTitle = styled.h1`
  @media${devices.tabletS} {
    text-align: center;
  }
`;
export const GrowCartsWrapperDesktop = styled.div`
  padding-top: 90px;
  @media${devices.laptopL} {
    padding-top: 40px;
  }
  @media${devices.tabletS} {
    display: none;
  }
`;
export const GrowCartsWrapperMobile = styled.div`
  display: none;
  flex-direction: column;
  padding-top: 40px;
  gap: 140px;
  align-items: center;
  @media${devices.tabletS} {
    display: flex;
  }
`;
export const GrowCartModile = styled.div`
  max-width: 420px;
  width: 100%;
  font-size: 14px;
  padding: 16px 20px;
  border-radius: 40px;
  text-align: center;
  border: 1px solid var(--border-dark);
  position: relative;
  box-shadow: 0 0 10px 5px var(--background-grey);
  &:after {
    content: '';
    width: 24px;
    height: 24px;
    border-bottom: 1px solid var(--border-dark);
    border-right: 1px solid var(--border-dark);
    transform: rotate(45deg);
    bottom: -13px;
    right: 70px;
    position: absolute;
    background-color: var(--background-white);
  }
  img {
    width: 73px;
    height: auto;
    object-fit: contain;
    position: absolute;
    bottom: -110px;
    right: 0;
  }
  ${({ right }) =>
    right &&
    css`
      &:after {
        right: unset;
        left: 70px;
      }
      img {
        right: unset;
        left: 0;
      }
    `}
`;

export const GrowRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  @media${devices.laptop} {
    gap: 40px;
  }
  @media${devices.laptopL} {
    gap: 20px;
  }
`;
export const GrowCartDesktop = styled.div`
  max-width: 420px;
  width: 100%;
  padding: 16px 41px;
  text-align: center;
  border: 1px solid var(--border-dark);
  border-radius: 50px;
  position: relative;
  box-shadow: 0 0 10px 5px var(--background-grey);
  &:after {
    content: '';
    width: 24px;
    height: 24px;
    border-bottom: 1px solid var(--border-dark);
    border-right: 1px solid var(--border-dark);
    transform: rotate(45deg);
    bottom: -13px;
    right: 70px;
    position: absolute;
    background-color: var(--background-white);
  }
  ${({ right }) =>
    right &&
    css`
      &:after {
        right: unset;
        left: 70px;
      }
    `}
  @media${devices.laptopL} {
    font-size: 14px;
    padding: 16px 20px;
    border-radius: 40px;
  }
`;

export const RobotImage = styled.div`
  max-width: 240px;
  height: auto;
  img {
    max-width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const OurPositions = styled.div`
  padding-bottom: 110px;
`;
export const PositionListWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  @media${devices.tabletL} {
    overflow-x: auto;
  }
`;
export const PositionList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  margin: 30px 0 50px;
  gap: 20px;
  width: 100%;
  min-width: 930px;
`;
export const PositionItem = styled.li`
  cursor: pointer;
  color: #8d8d8d;
  border: 1px solid #8d8d8d;
  padding: 9px 20px;
  text-transform: capitalize;
  border-radius: 8px;
  transition: all 150ms ease;
  &.active {
    border-color: #e2f2da;
    background-color: #e2f2da;
    color: var(--text-green);
  }
  &:hover {
    border-color: #e2f2da;
    background-color: #e2f2da;
    color: var(--text-green);
  }
`;
export const JobsRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 -10px 30px;
  gap: 20px 0;
  flex-wrap: wrap;
  @media${devices.mobileM} {
    margin: 0 auto 30px;
  }
`;
export const JobsCol = styled.div`
  max-width: 25%;
  flex: 0 0 25%;
  padding: 0 10px;
  @media${devices.laptop} {
    max-width: 50%;
    flex: 0 0 50%;
  }
  @media${devices.mobileM} {
    max-width: 100%;
    flex: 0 0 100%;
  }
`;
export const SearchWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  margin-bottom: 60px;
`;

export default TopSection;
